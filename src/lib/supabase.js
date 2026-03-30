// src/lib/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Check if the environment variables are loaded
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    'Supabase environment variables are missing. ' +
    'Some features will be disabled.'
  );
}

// Initialize the client only if we have the key, otherwise create a dummy
export const supabase = supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

// Helper to check configuration status
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseKey;
};