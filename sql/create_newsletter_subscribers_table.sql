-- Create newsletter_subscribers table for hepta.no
-- This table stores all newsletter subscribers from the website

-- Drop existing table if it exists (optional - only if you want to start fresh)
-- DROP TABLE IF EXISTS public.newsletter_subscribers CASCADE;

-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
  source TEXT DEFAULT 'website-footer',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON public.newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_created_at ON public.newsletter_subscribers(created_at DESC);

-- Set up Row Level Security (RLS)
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (subscribe to newsletter)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Policy: Only authenticated users can read subscribers (for admin dashboard)
CREATE POLICY "Only authenticated users can view subscribers" ON public.newsletter_subscribers
    FOR SELECT USING (auth.role() = 'authenticated');

-- Policy: Only authenticated users can update subscriber status (unsubscribe, etc.)
CREATE POLICY "Only authenticated users can update subscribers" ON public.newsletter_subscribers
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Verify the table structure
SELECT 
    column_name, 
    data_type, 
    is_nullable, 
    column_default 
FROM information_schema.columns 
WHERE table_name = 'newsletter_subscribers' 
ORDER BY ordinal_position; 