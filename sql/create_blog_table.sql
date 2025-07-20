-- Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  image TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc', now())
);

-- Create an index on slug for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);

-- Create an index on created_at for ordering
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON public.blog_posts(created_at DESC);

-- Create an index on published status
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc', now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Set up Row Level Security (RLS)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public to read published blog posts
CREATE POLICY "Allow public read access to published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

-- Allow authenticated users to insert blog posts
CREATE POLICY "Allow authenticated users to insert blog posts" ON public.blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own blog posts
CREATE POLICY "Allow authenticated users to update blog posts" ON public.blog_posts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Allow authenticated users to delete blog posts
CREATE POLICY "Allow authenticated users to delete blog posts" ON public.blog_posts
    FOR DELETE USING (auth.role() = 'authenticated');

-- Insert a sample blog post for testing
INSERT INTO public.blog_posts (title, slug, excerpt, content, author, featured)
VALUES (
  'Welcome to Hepta Blog',
  'welcome-to-hepta-blog',
  'This is the first blog post on our new platform. Learn about what we do and what''s coming next.',
  'Welcome to the Hepta blog! We''re excited to share our insights on AI, development, design, and automation. Stay tuned for regular updates about our projects and the latest trends in technology.',
  'Hepta Team',
  true
)
ON CONFLICT (slug) DO NOTHING; 