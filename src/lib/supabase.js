import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

// Only create client if we have the key (production) or provide a fallback
export const supabase = supabaseKey 
  ? createClient(supabaseUrl, supabaseKey)
  : null

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseKey
}