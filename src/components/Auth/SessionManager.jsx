import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import styled from 'styled-components';

const SessionWarning = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: #fff3e0;
  border: 1px solid #ffb74d;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const SessionButton = styled.button`
  background: #ff6f00;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    background: #e65100;
  }
`;

const SessionManager = () => {
  const { user, session } = useAuth();
  const [showWarning, setShowWarning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!session) return;

    const checkSession = async () => {
      const sessionToken = localStorage.getItem('session_token');
      if (!sessionToken) return;

      try {
        const { data, error } = await supabase
          .from('user_sessions')
          .select('*')
          .eq('session_token', sessionToken)
          .eq('is_active', true)
          .single();

        if (data) {
          const expiresAt = new Date(data.expires_at);
          const now = new Date();
          const minutesLeft = Math.floor((expiresAt - now) / 60000);

          // Show warning when 5 minutes left
          if (minutesLeft <= 5 && minutesLeft > 0) {
            setShowWarning(true);
            setTimeLeft(minutesLeft);
          } else if (minutesLeft <= 0) {
            // Session expired
            await handleLogout();
          }

          // Update last activity
          await supabase
            .from('user_sessions')
            .update({ last_activity: new Date().toISOString() })
            .eq('session_token', sessionToken);
        }
      } catch (err) {
        console.error('Session check error:', err);
      }
    };

    // Check session every minute
    const interval = setInterval(checkSession, 60000);
    checkSession(); // Initial check

    return () => clearInterval(interval);
  }, [session]);

  const handleLogout = async () => {
    const sessionToken = localStorage.getItem('session_token');
    
    // Mark session as inactive
    if (sessionToken) {
      await supabase
        .from('user_sessions')
        .update({ is_active: false })
        .eq('session_token', sessionToken);
    }

    // Log security event
    if (user) {
      await supabase.rpc('log_security_event', {
        p_user_id: user.id,
        p_action: 'logout',
        p_details: { reason: 'session_expired' },
        p_ip_address: null,
        p_user_agent: navigator.userAgent
      });
    }

    localStorage.removeItem('session_token');
    await supabase.auth.signOut();
  };

  const extendSession = async () => {
    const sessionToken = localStorage.getItem('session_token');
    if (!sessionToken) return;

    const newExpiresAt = new Date();
    newExpiresAt.setHours(newExpiresAt.getHours() + 24);

    try {
      await supabase
        .from('user_sessions')
        .update({ 
          expires_at: newExpiresAt.toISOString(),
          last_activity: new Date().toISOString()
        })
        .eq('session_token', sessionToken);

      setShowWarning(false);
    } catch (err) {
      console.error('Failed to extend session:', err);
    }
  };

  if (!showWarning) return null;

  return (
    <SessionWarning>
      Your session will expire in {timeLeft} minutes.
      <SessionButton onClick={extendSession}>Extend Session</SessionButton>
    </SessionWarning>
  );
};

export default SessionManager;