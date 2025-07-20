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

// Log final status
console.log('Supabase Client Status:', {
  configured: isSupabaseConfigured(),
  clientExists: !!supabase
})