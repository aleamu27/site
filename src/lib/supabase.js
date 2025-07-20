import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co'

// For React apps, environment variables MUST start with REACT_APP_
// Vercel needs REACT_APP_SUPABASE_ANON_KEY (not NEXT_PUBLIC_)
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

// Debug logging for production troubleshooting
console.log('Supabase Debug:', {
  url: supabaseUrl,
  hasKey: !!supabaseKey,
  keyLength: supabaseKey ? supabaseKey.length : 0,
  keyPrefix: supabaseKey ? supabaseKey.substring(0, 20) + '...' : 'none',
  allReactEnvVars: Object.keys(process.env).filter(key => key.startsWith('REACT_APP_')),
  nodeEnv: process.env.NODE_ENV
})

// Only create client if we have the key
export const supabase = supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseKey && supabase !== null
}

// Test function to verify Supabase connectivity
export const testSupabaseConnection = async () => {
  if (!supabase) {
    return {
      success: false,
      error: 'Supabase client not initialized - missing API key'
    }
  }

  try {
    console.log('🧪 Testing Supabase connection...')
    
    // Test 1: Check if we can call the auth API
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    console.log('👤 User check result:', { user: !!user, error: userError?.message })
    
    // Test 2: Try to get session (this should work even without login)
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    console.log('🎫 Session check result:', { session: !!session, error: sessionError?.message })
    
    return {
      success: true,
      tests: {
        userCheck: { success: !userError, error: userError?.message },
        sessionCheck: { success: !sessionError, error: sessionError?.message }
      }
    }
  } catch (error) {
    console.error('💥 Supabase connection test failed:', error)
    return {
      success: false,
      error: error.message,
      details: error
    }
  }
}

// Log final status
console.log('Supabase Client Status:', {
  configured: isSupabaseConfigured(),
  clientExists: !!supabase
})

// Run connection test if in development
if (process.env.NODE_ENV === 'development' && supabase) {
  testSupabaseConnection().then(result => {
    console.log('🧪 Supabase Connection Test:', result)
  })
}
