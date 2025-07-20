-- Fix blog_posts table column mismatch
-- The table has "published_at" but our code expects "published"

-- Option 1: Add the missing "published" column (recommended)
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS published BOOLEAN DEFAULT true;

-- Update existing rows to have published = true where published_at is not null
UPDATE public.blog_posts 
SET published = true 
WHERE published_at IS NOT NULL;

-- Update existing rows to have published = false where published_at is null
UPDATE public.blog_posts 
SET published = false 
WHERE published_at IS NULL;

-- Option 2: If you want to rename the column instead (alternative)
-- ALTER TABLE public.blog_posts RENAME COLUMN published_at TO published;

-- Verify the table structure
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'blog_posts' 
ORDER BY ordinal_position; 