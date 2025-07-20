// src/lib/supabase.js

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Check if the environment variables are loaded
if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Supabase environment variables are missing. ' +
    'Make sure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY are set.'
  );
}

// Initialize the client
export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper to check configuration status
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseKey;
};