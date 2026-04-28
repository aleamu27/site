import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

// Only log in development
const DEBUG = process.env.NODE_ENV !== 'production';
const log = (...args) => DEBUG && console.log(...args);
const logWarn = (...args) => DEBUG && console.warn(...args);

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    log('🔄 AuthContext: Initializing authentication state...');
    
    // Check if Supabase is configured
    if (!isSupabaseConfigured() || !supabase) {
      logWarn('⚠️ AuthContext: Supabase is not configured. Authentication features will be disabled.');
      log('🔍 AuthContext: Configuration check:', {
        isConfigured: isSupabaseConfigured(),
        clientExists: !!supabase,
        hasKey: !!process.env.REACT_APP_SUPABASE_ANON_KEY
      });
      setLoading(false);
      return;
    }

    log('✅ AuthContext: Supabase is configured, getting session...');

    // Get session
    supabase.auth.getSession().then(({ data: { session } }) => {
      log('📡 AuthContext: Session check complete');
      log('🎫 AuthContext: Session data:', session ? 'Present' : 'None');
      
      if (session) {
        log('👤 AuthContext: User found in session:', {
          id: session.user?.id,
          email: session.user?.email,
          confirmed_at: session.user?.email_confirmed_at
        });
      }
      
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        log('👤 AuthContext: Fetching user profile...');
        fetchProfile(session.user.id);
      }
      setLoading(false);
      log('✅ AuthContext: Initial setup complete');
    });

    log('👂 AuthContext: Setting up auth state listener...');
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      log('🔄 AuthContext: Auth state changed');
      log('📝 AuthContext: Event:', _event);
      log('🎫 AuthContext: New session:', session ? 'Present' : 'None');
      
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        log('👤 AuthContext: User logged in, fetching profile...');
        fetchProfile(session.user.id);
        // Log session creation
        logSecurityEvent('login', { method: 'session' });
      } else {
        log('👋 AuthContext: User logged out, clearing profile...');
        setProfile(null);
      }
    });

    return () => {
      log('🧹 AuthContext: Cleaning up auth listener...');
      subscription.unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProfile = async (userId) => {
    log('👤 AuthContext: fetchProfile called for user:', userId);
    
    if (!isSupabaseConfigured()) {
      logWarn('⚠️ AuthContext: Cannot fetch profile - Supabase not configured');
      return;
    }
    
    try {
      log('📡 AuthContext: Querying profiles table...');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      log('📨 AuthContext: Profile query response received');
      log('✅ AuthContext: Profile data:', data ? 'Present' : 'None');
      log('❌ AuthContext: Profile error:', error ? error.message : 'None');

      if (!error && data) {
        log('✅ AuthContext: Profile fetched successfully');
        setProfile(data);
      } else if (error) {
        logWarn('⚠️ AuthContext: Profile fetch failed:', error.message);
        log('💡 AuthContext: This might be normal if profiles table doesn\'t exist or user has no profile');
      }
    } catch (err) {
      console.error('💥 AuthContext: Unexpected error fetching profile:', err);
    }
  };

  const logSecurityEvent = async (action, details = {}) => {
    if (!user || !isSupabaseConfigured()) return;
    
    try {
      await supabase.rpc('log_security_event', {
        p_user_id: user.id,
        p_action: action,
        p_details: details,
        p_ip_address: null, // Would get from server
        p_user_agent: navigator.userAgent
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  };

  const value = {
    user,
    profile,
    session,
    loading,
    logSecurityEvent
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
