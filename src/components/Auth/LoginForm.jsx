import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafbfa;
`;

const LoginCard = styled.form`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px 0 rgba(24,75,84,0.07);
  padding: 3rem;
  width: 100%;
  max-width: 420px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 2rem 0;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.1rem;
  padding: 0.9rem 1.1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1.2rem;
  font-family: inherit;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #184B54;
  }
  
  &:disabled {
    background: #f5f5f5;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #184B54;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover:not(:disabled) {
    background: #0f3238;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #d32f2f;
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
`;

const LockoutMessage = styled.div`
  background: #fff3e0;
  color: #e65100;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: #e8f5e9;
  color: #2e7d32;
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lockoutInfo, setLockoutInfo] = useState(null);
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { logSecurityEvent } = useAuth();

  useEffect(() => {
    // Check for existing session only if Supabase is available
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          navigate('/admin');
        }
      });
    }
  }, [navigate]);

  const checkLoginAttempts = async (email) => {
    if (!supabase) return false;
    
    try {
      const { data, error } = await supabase
        .rpc('check_login_attempts', { user_email: email });
      
      if (!error && data && data[0]) {
        const info = data[0];
        if (info.is_locked) {
          const lockExpiresAt = new Date(info.lock_expires_at);
          const now = new Date();
          const minutesLeft = Math.ceil((lockExpiresAt - now) / 60000);
          
          setLockoutInfo({
            isLocked: true,
            minutesLeft,
            attemptsCount: info.attempts_count
          });
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error('Failed to check login attempts:', err);
      return false;
    }
  };

  const logLoginAttempt = async (email, success, errorMessage = null) => {
    if (!supabase) return;
    
    try {
      await supabase
        .from('login_attempts')
        .insert({
          email,
          success,
          error_message: errorMessage,
          ip_address: null, // Would get from server
          user_agent: navigator.userAgent
        });
    } catch (err) {
      console.error('Failed to log login attempt:', err);
    }
  };

  const createSession = async (userId) => {
    if (!supabase) return;
    
    const sessionToken = crypto.randomUUID();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour sessions

    try {
      await supabase
        .from('user_sessions')
        .insert({
          user_id: userId,
          session_token: sessionToken,
          expires_at: expiresAt.toISOString(),
          ip_address: null, // Would get from server
          user_agent: navigator.userAgent
        });
      
      // Store session token in secure cookie or localStorage
      localStorage.setItem('session_token', sessionToken);
    } catch (err) {
      console.error('Failed to create session:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    console.log('🚀 Login attempt started');
    console.log('📧 Email:', email);
    console.log('🔒 Password length:', password.length);
    console.log('🌍 Environment:', process.env.NODE_ENV);
    console.log('🔧 Supabase client exists:', !!supabase);

    // Check if Supabase is available (production only)
    if (!supabase) {
      console.error('❌ Supabase client not available');
      console.log('🔍 Environment variables check:', {
        REACT_APP_SUPABASE_ANON_KEY: !!process.env.REACT_APP_SUPABASE_ANON_KEY,
        allReactEnvVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_'))
      });
      setError('Login is only available in production. Please visit the live site.');
      setLoading(false);
      return;
    }

    console.log('✅ Supabase client available, checking for account lockout...');

    // Check if account is locked
    const isLocked = await checkLoginAttempts(email);
    if (isLocked) {
      console.warn('🔒 Account is locked');
      setLoading(false);
      return;
    }

    console.log('✅ Account not locked, attempting authentication...');

    try {
      console.log('📡 Calling supabase.auth.signInWithPassword...');
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      console.log('📨 Supabase response received');
      console.log('✅ Success data:', data ? 'Present' : 'None');
      console.log('❌ Error data:', error ? 'Present' : 'None');

      if (error) {
        console.error('🚨 Authentication failed');
        console.error('📋 Full error object:', error);
        console.error('📝 Error details:', {
          message: error.message,
          status: error.status,
          statusCode: error.statusCode,
          name: error.name,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        
        await logLoginAttempt(email, false, error.message);
        console.log('📊 Login attempt logged as failed');
        
        // Handle specific Supabase errors
        let userFriendlyMessage = error.message;
        
        if (error.message.includes('output claims field is missing')) {
          console.warn('🔧 Auth error: output claims field is missing - this may indicate Supabase auth configuration issues');
          userFriendlyMessage = 'Authentication configuration error. Please contact support if this persists.';
        } else if (error.message.includes('Invalid login credentials')) {
          userFriendlyMessage = 'Invalid email or password. Please check your credentials and try again.';
        } else if (error.message.includes('Email not confirmed')) {
          userFriendlyMessage = 'Please check your email and click the confirmation link before logging in.';
        } else if (error.message.includes('Too many requests')) {
          userFriendlyMessage = 'Too many login attempts. Please wait a few minutes before trying again.';
        } else if (error.message.includes('User not found')) {
          userFriendlyMessage = 'No account found with this email address. Please check your email or contact support.';
        }
        
        setError(`Auth Error: ${userFriendlyMessage}`);
        
        // Check if this failed attempt triggers a lockout
        console.log('🔍 Checking if this attempt triggers lockout...');
        await checkLoginAttempts(email);
      } else {
        console.log('🎉 Authentication successful!');
        console.log('👤 User data:', {
          id: data.user?.id,
          email: data.user?.email,
          confirmed_at: data.user?.email_confirmed_at,
          last_sign_in_at: data.user?.last_sign_in_at
        });
        console.log('🎫 Session data:', {
          access_token: data.session?.access_token ? 'Present' : 'None',
          refresh_token: data.session?.refresh_token ? 'Present' : 'None',
          expires_at: data.session?.expires_at
        });
        
        await logLoginAttempt(email, true);
        console.log('📊 Login attempt logged as successful');
        
        await createSession(data.user.id);
        console.log('🗂️ Session created');
        
        setSuccess('Login successful! Redirecting...');
        
        console.log('🏠 Redirecting to /admin in 1 second...');
        setTimeout(() => {
          navigate('/admin');
        }, 1000);
      }
    } catch (err) {
      console.error('💥 Unexpected error during login:');
      console.error('📋 Error object:', err);
      console.error('📝 Error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
      console.log('🏁 Login attempt completed');
    }
  };

  return (
    <LoginWrapper>
      <LoginCard onSubmit={handleSubmit}>
        <Title>Login to Hepta Admin</Title>
        
        {lockoutInfo && lockoutInfo.isLocked && (
          <LockoutMessage>
            Account temporarily locked due to too many failed attempts.
            Please try again in {lockoutInfo.minutesLeft} minutes.
          </LockoutMessage>
        )}
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading || (lockoutInfo && lockoutInfo.isLocked)}
        />
        
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading || (lockoutInfo && lockoutInfo.isLocked)}
        />
        
        <Button 
          type="submit" 
          disabled={loading || (lockoutInfo && lockoutInfo.isLocked)}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
      </LoginCard>
    </LoginWrapper>
  );
};

export default LoginForm;
