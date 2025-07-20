# Vercel Environment Variable Setup - URGENT FIX

## 🚨 **Error:** 
`Environment Variable "REACT_APP_SUPABASE_ANON_KEY" references Secret "react_app_supabase_anon_key", which does not exist.`

## 🔧 **Quick Fix (5 minutes):**

### **Step 1: Get Your Supabase Key**
1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Select your project:** ziksrslyraqhygilcvct
3. **Go to Settings → API**
4. **Copy the "anon public" key** (starts with `eyJ...`)

### **Step 2: Add to Vercel**
1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Click "Add New"**
5. **Fill in:**
   - **Name:** `REACT_APP_SUPABASE_ANON_KEY`
   - **Value:** Your Supabase anon key (paste the `eyJ...` key)
   - **Environment:** All (Production, Preview, Development)
6. **Click "Save"**

### **Step 3: Redeploy**
1. **Go to Deployments tab**
2. **Click "Redeploy" on the latest deployment**
3. **Wait for deployment to complete**

## ✅ **Verification**

After redeployment:
1. **Visit your site** `/blog`
2. **Open DevTools → Console**
3. **Should see:** "✅ Supabase available, fetching from database..."
4. **Should NOT see:** "⚠️ Supabase not available"

## 🔍 **What Was Wrong**

I tried to reference a Vercel secret that didn't exist:
```json
// BAD - This caused the error
"build": {
  "env": {
    "REACT_APP_SUPABASE_ANON_KEY": "@react_app_supabase_anon_key"
  }
}
```

The correct way is to set environment variables directly in Vercel Dashboard.

## 🚀 **After This Fix**

Your blog will:
- ✅ **Load posts from Supabase** (not API fallback)
- ✅ **Save new posts to database**
- ✅ **Show real blog content** on frontend

## 🆘 **Still Having Issues?**

If you see errors after redeployment:
1. **Check the environment variable** is set correctly in Vercel
2. **Make sure the key** starts with `eyJ` (JWT format)
3. **Try a fresh deployment** instead of redeploy

**This should fix the Supabase connection immediately!** 🎉 