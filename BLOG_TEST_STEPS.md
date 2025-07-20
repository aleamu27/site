# Quick Blog Test Steps

## 🧪 **Test Your Supabase Blog Integration**

### **Step 1: Set up the Database (5 minutes)**

1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Select project: ziksrslyraqhygilcvct** 
3. **Click SQL Editor**
4. **Copy & paste this SQL and run it:**

```sql
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

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

CREATE POLICY "Allow authenticated users to insert blog posts" ON public.blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

### **Step 2: Test Blog Creation (2 minutes)**

1. **Visit your deployed site** (or run locally: `npm start`)
2. **Go to** `/blog-cms`
3. **Fill out:**
   - **Title:** "Test fra Supabase"
   - **Excerpt:** "Dette er en test av Supabase"
   - **Author:** "Alexander"
   - **Content:** "Hvis du ser dette i Supabase, så fungerer det!"
4. **Click Submit**

### **Step 3: Verify It Worked**

1. **Check browser console** - should see: "✅ Blog post saved to Supabase"
2. **In Supabase Dashboard:**
   - Go to **Table Editor** 
   - Click **blog_posts** table
   - **Your test post should be there!**

### **Step 4: Test Blog Retrieval**

1. **Open browser DevTools → Network tab**
2. **Visit** `/api/blog` in browser
3. **Should see JSON response** with your blog posts

## 🎯 **What Should Happen**

### ✅ **Success Indicators:**
- BlogCMS form submits without errors
- Console shows "Blog post saved to Supabase"
- Post appears in Supabase table editor
- `/api/blog` returns your posts as JSON

### ❌ **If Something's Wrong:**
- **"Database not configured"** → Check `REACT_APP_SUPABASE_ANON_KEY` in Vercel
- **"relation blog_posts does not exist"** → Run the SQL script above
- **Form doesn't submit** → Check browser console for errors

## 🚀 **After It Works**

Your blog posts are now:
- ✅ **Stored in Supabase** (real database)
- ✅ **Accessible via API** (`/api/blog`)
- ✅ **Secure** (Row Level Security enabled)
- ✅ **Production ready**

**Next step:** Create a blog listing page to display your posts! 