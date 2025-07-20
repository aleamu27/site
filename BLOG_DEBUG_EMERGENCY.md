# 🚨 EMERGENCY: Database Error When Saving Blog Posts

## 🔍 **Latest Error Analysis**
```
📡 API Response: {status: 500, statusText: '', ok: false}
❌ Failed to save blog post: Error: Could not find the 'featured' column of 'blog_posts' in the schema cache
```

**PROBLEM IDENTIFIED:** Your table is missing the `featured` column!

## 🛠️ **IMMEDIATE FIX (30 seconds)**

### **QUICK FIX: Add Missing Columns**

**Gå til [Supabase Dashboard](https://supabase.com/dashboard) → SQL Editor → Kjør dette:**

```sql
-- Legg til manglende 'featured' kolonne
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- Sjekk at alle kolonner nå finnes
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'blog_posts' 
ORDER BY ordinal_position;
```

**Forventede kolonner du skal se:**
- `id` (uuid)
- `title` (text)
- `slug` (text) 
- `excerpt` (text)
- `content` (text)
- `author` (text)
- `image` (text, nullable)
- `featured` (boolean) ← **Denne manglet**
- `published` (boolean)
- `created_at` (timestamptz)
- `updated_at` (timestamptz)

### **TOTAL RESET (hvis fortsatt problemer)**

```sql
-- Drop og opprett tabellen på nytt med ALLE kolonner
DROP TABLE IF EXISTS public.blog_posts CASCADE;

CREATE TABLE public.blog_posts (
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

-- Set up Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read published posts
CREATE POLICY "Allow public read access to published blog posts" ON public.blog_posts
    FOR SELECT USING (published = true);

-- TEMPORARY: Allow anyone to insert posts
CREATE POLICY "Allow anyone to insert blog posts" ON public.blog_posts
    FOR INSERT WITH CHECK (true);
```

## 📧 **NEWSLETTER PROBLEM**

Hvis newsletter ikke fungerer, sjekk dette:

### **1. Environment Variables**
I Vercel Dashboard → Settings → Environment Variables:
```
RESEND_API_KEY = [Din Resend API Key]
```

### **2. Test Newsletter Direkte**
Lim inn i browser console på din side:
```javascript
// Test newsletter subscription
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    type: 'newsletter'
  })
}).then(r => r.json()).then(console.log).catch(console.error);
```

### **3. Verifiser Resend Domain**
1. **Gå til [Resend Dashboard](https://resend.com/domains)**
2. **Sjekk at `hepta.no` er verifisert**
3. **Hvis ikke verifisert, legg til DNS records:**
   ```
   Type: TXT, Name: _resend, Value: [fra Resend]
   Type: MX, Name: @, Value: feedback-smtp.resend.com
   ```

## ✅ **Test etter fix**

### **Blog Test:**
1. **Kjør SQL-en over**
2. **Gå til `/blog-cms`** (må være innlogget)
3. **Lag test post**
4. **Skal nå fungere!**

### **Newsletter Test:**
1. **Gå til bunnen av hjemmesiden**
2. **Skriv inn email i newsletter form**
3. **Klikk "Join Newsletter"**
4. **Skal få "Thanks for subscribing!" melding**

## 🔍 **Hvis fortsatt problemer**

**Debug Method: Network Tab**
1. **Åpne Developer Console (F12)**
2. **Gå til Network tab**
3. **Test blog creation / newsletter signup**
4. **Se på failed requests for eksakt feilmelding**

**Kjør SQL-en og test igjen - skal nå fungere! 🎯** 