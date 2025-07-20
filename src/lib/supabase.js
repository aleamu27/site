import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co'
// Try both React and Next.js naming conventions
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug logging (remove this after fixing)
console.log('Supabase Debug:', {
  hasKey: !!supabaseKey,
  keyLength: supabaseKey ? supabaseKey.length : 0,
  envVars: Object.keys(process.env).filter(key => key.includes('SUPABASE')),
  reactKey: !!process.env.REACT_APP_SUPABASE_KEY,
  nextKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})

// Only create client if we have the key (production) or provide a fallback
export const supabase = supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseKey
}