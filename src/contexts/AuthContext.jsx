<<<<<<< HEAD
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    console.log('🔄 AuthContext: Initializing authentication state...');
    
    // Check if Supabase is configured
    if (!isSupabaseConfigured() || !supabase) {
      console.warn('⚠️ AuthContext: Supabase is not configured. Authentication features will be disabled.');
      console.log('🔍 AuthContext: Configuration check:', {
        isConfigured: isSupabaseConfigured(),
        clientExists: !!supabase,
        hasKey: !!process.env.REACT_APP_SUPABASE_ANON_KEY
      });
      setLoading(false);
      return;
    }

    console.log('✅ AuthContext: Supabase is configured, getting session...');

    // Get session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('📡 AuthContext: Session check complete');
      console.log('🎫 AuthContext: Session data:', session ? 'Present' : 'None');
      
      if (session) {
        console.log('👤 AuthContext: User found in session:', {
          id: session.user?.id,
          email: session.user?.email,
          confirmed_at: session.user?.email_confirmed_at
        });
      }
      
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        console.log('👤 AuthContext: Fetching user profile...');
        fetchProfile(session.user.id);
      }
      setLoading(false);
      console.log('✅ AuthContext: Initial setup complete');
    });

    console.log('👂 AuthContext: Setting up auth state listener...');
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('🔄 AuthContext: Auth state changed');
      console.log('📝 AuthContext: Event:', _event);
      console.log('🎫 AuthContext: New session:', session ? 'Present' : 'None');
      
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        console.log('👤 AuthContext: User logged in, fetching profile...');
        fetchProfile(session.user.id);
        // Log session creation
        logSecurityEvent('login', { method: 'session' });
      } else {
        console.log('👋 AuthContext: User logged out, clearing profile...');
        setProfile(null);
      }
    });

    return () => {
      console.log('🧹 AuthContext: Cleaning up auth listener...');
      subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (userId) => {
    console.log('👤 AuthContext: fetchProfile called for user:', userId);
    
    if (!isSupabaseConfigured()) {
      console.warn('⚠️ AuthContext: Cannot fetch profile - Supabase not configured');
      return;
    }
    
    try {
      console.log('📡 AuthContext: Querying profiles table...');
      
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      console.log('📨 AuthContext: Profile query response received');
      console.log('✅ AuthContext: Profile data:', data ? 'Present' : 'None');
      console.log('❌ AuthContext: Profile error:', error ? error.message : 'None');

      if (!error && data) {
        console.log('✅ AuthContext: Profile fetched successfully');
        setProfile(data);
      } else if (error) {
        console.warn('⚠️ AuthContext: Profile fetch failed:', error.message);
        console.log('💡 AuthContext: This might be normal if profiles table doesn\'t exist or user has no profile');
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
=======
 
>>>>>>> ec7a60ee54388c5db6c2b36e2833cb0f044f2522
