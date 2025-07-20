# Supabase Blog Setup Guide

## 🎯 What This Does
Connects your blog system to Supabase so blog posts are **actually stored** in a live database instead of just being logged to console.

## 📋 Prerequisites
- ✅ Supabase project (you have: ziksrslyraqhygilcvct.supabase.co)
- ✅ Environment variable: `REACT_APP_SUPABASE_ANON_KEY`

## 🚀 Setup Steps

### Step 1: Create the Blog Table in Supabase

1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Select your project: ziksrslyraqhygilcvct**
3. **Go to SQL Editor**
4. **Run this SQL script:**

```sql
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

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON public.blog_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published);

-- Set up Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public to read published blog posts
CREATE POLICY "Allow public read access to published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

-- Allow authenticated users to manage blog posts
CREATE POLICY "Allow authenticated users to insert blog posts" ON public.blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to update blog posts" ON public.blog_posts
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to delete blog posts" ON public.blog_posts
    FOR DELETE USING (auth.role() = 'authenticated');

-- Insert a sample blog post
INSERT INTO public.blog_posts (title, slug, excerpt, content, author, featured)
VALUES (
  'Welcome to Hepta Blog',
  'welcome-to-hepta-blog',
  'This is the first blog post on our new platform.',
  'Welcome to the Hepta blog! We''re excited to share our insights on AI, development, design, and automation.',
  'Hepta Team',
  true
)
ON CONFLICT (slug) DO NOTHING;
```

### Step 2: Verify Environment Variables

Make sure you have this set in Vercel:
- **Variable:** `REACT_APP_SUPABASE_ANON_KEY`
- **Value:** Your Supabase anon key

## 🧪 Testing

### Test Blog Creation
1. **Go to** `/blog-cms` on your site
2. **Fill out the form:**
   - Title: "Test Post fra Supabase"
   - Excerpt: "Testing Supabase integration"
   - Author: "Alexander"
   - Content: "This post will be saved to Supabase!"
3. **Submit the form**

### Check if it worked
1. **Browser console** should show: "✅ Blog post saved to Supabase"
2. **In Supabase Dashboard:**
   - Go to Table Editor → blog_posts
   - You should see your new post!

### Test Blog Retrieval
1. **Make a GET request to** `/api/blog`
2. **Should return** your saved blog posts from Supabase

## 🔍 What Changed

### Before (Mock Data):
```javascript
// OLD - Just fake data
const blogPost = { id: Date.now(), title: "..." };
console.log('Saving blog post:', formData); // Only logging!
```

### After (Real Supabase):
```javascript
// NEW - Real database
const { data: blogPost, error } = await supabase
  .from('blog_posts')
  .insert([blogPostData])
  .select()
  .single();
```

## 📊 Database Schema

Your `blog_posts` table has these columns:
- **id** (UUID) - Auto-generated unique ID
- **title** (TEXT) - Blog post title
- **slug** (TEXT) - URL-friendly version of title
- **excerpt** (TEXT) - Short description
- **content** (TEXT) - Full blog content  
- **author** (TEXT) - Author name
- **image** (TEXT) - Optional featured image URL
- **featured** (BOOLEAN) - Whether this is a featured post
- **published** (BOOLEAN) - Whether this post is visible
- **created_at** (TIMESTAMP) - When post was created
- **updated_at** (TIMESTAMP) - When post was last modified

## 🔐 Security Features

- **Row Level Security (RLS)** enabled
- **Public can read** published posts
- **Only authenticated users** can create/edit posts
- **UUID primary keys** for security
- **Unique slug constraints** prevent duplicates

## 🚀 Next Steps

After this setup works:

1. **Create a Blog Display Page** to show your posts
2. **Add search/filtering** functionality  
3. **Implement categories/tags**
4. **Add image upload** for featured images
5. **Create admin dashboard** for managing posts

## 🆘 Troubleshooting

### Error: "Database not configured"
- Check that `REACT_APP_SUPABASE_ANON_KEY` is set in Vercel
- Redeploy after adding environment variables

### Error: "relation blog_posts does not exist"
- Run the SQL script in Supabase SQL Editor
- Make sure you're connected to the right project

### Error: "new row violates row-level security policy"
- Make sure you're logged in when creating posts
- Or temporarily disable RLS for testing

### Posts not showing up
- Check that `published = true`
- Verify the posts exist in Supabase Table Editor
- Check browser console for API errors

## ✅ Success Checklist

- [ ] SQL script executed in Supabase
- [ ] `blog_posts` table exists with sample data
- [ ] Environment variables set in Vercel
- [ ] BlogCMS form submits successfully  
- [ ] Blog posts appear in Supabase table
- [ ] GET `/api/blog` returns real data

**Your blog is now powered by Supabase!** 🎉 