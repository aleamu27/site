# Supabase "Output Claims Field Missing" Debug Guide

## 🚨 Current Issues
You're experiencing these errors:
1. `Auth Error: output claims field is missing`
2. `Error running hook URI: pg-functions://postgres/auth/custom_access_token_hook`

These are Supabase authentication configuration errors that can be fixed by checking several settings.

## 🔧 URGENT FIX: Disable Custom Auth Hook

The `custom_access_token_hook` error suggests there's a broken PostgreSQL function configured in your Supabase project.

### **Step 1: Disable the Custom Hook (Immediate Fix)**
1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Select your project**
3. **Go to Authentication → Settings**
4. **Look for "Custom Access Token Hook"**
5. **Either:**
   - **Disable it completely** (recommended)
   - **Or fix the PostgreSQL function** (advanced)

### **Step 2: Check Auth Hook Settings**
In Supabase Dashboard → Authentication → Settings:
- **Custom Access Token Hook**: Should be **DISABLED** or **EMPTY**
- **Additional Claims**: Should be **EMPTY** unless you specifically need them
- **Session Configuration**: Use default settings

### **Step 3: Remove Custom Functions (If Any)**
If you have custom PostgreSQL functions in your database:
1. **Go to SQL Editor**
2. **Check for custom auth functions:**
   ```sql
   -- Check for custom auth functions
   SELECT * FROM pg_proc WHERE proname LIKE '%auth%' OR proname LIKE '%token%';
   
   -- If you find custom functions you don't need, drop them:
   -- DROP FUNCTION IF EXISTS your_custom_function_name;
   ```

## 🔍 Debug Steps

### Step 1: Check Environment Variables
1. **In Vercel Dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Verify you have: `REACT_APP_SUPABASE_ANON_KEY`
   - Make sure it starts with `eyJ...` (JWT format)

2. **Verify the key is correct:**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Select your project
   - Go to Settings → API
   - Copy the "anon public" key (NOT the service_role key)

### Step 2: Check Supabase Auth Configuration
1. **Enable Email/Password Auth:**
   - In Supabase Dashboard → Authentication → Providers
   - Make sure "Email" is enabled
   - Confirm "Enable email confirmations" settings

2. **Check JWT Settings:**
   - Go to Settings → API
   - Verify "JWT Settings" section
   - Make sure JWT Secret is properly configured

### Step 3: Verify User Exists in Supabase Auth
The error suggests the user might not exist in Supabase Auth (different from your custom database).

1. **Check Users in Supabase:**
   - Go to Authentication → Users
   - Look for your test user
   - If not there, create one:
     ```sql
     -- In SQL Editor, run:
     INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
     VALUES (gen_random_uuid(), 'your-email@example.com', crypt('your-password', gen_salt('bf')), now(), now(), now());
     ```

2. **Or use Supabase Auth Signup:**
   ```javascript
   // In browser console on your site:
   const { data, error } = await supabase.auth.signUp({
     email: 'your-email@example.com',
     password: 'your-password'
   });
   console.log('Signup result:', { data, error });
   ```

### Step 4: Test Configuration
1. **Visit your login page**
2. **Click "Show Debug Info"**
3. **Check these values:**
   - Environment: should be "production"
   - Has API Key: should be "Yes"
   - API Key Length: should be ~300+ characters
   - Client Exists: should be "Yes"

### Step 5: Alternative Solutions

#### Option A: Bypass Auth Temporarily
If you need immediate access, you can temporarily bypass the auth system:

```javascript
// In LoginForm.jsx, add this temporary bypass:
if (email === 'admin@hepta.no' && password === 'hepta2025') {
  console.log('🔓 Using temporary bypass');
  setSuccess('Temporary access granted');
  setTimeout(() => navigate('/admin'), 1000);
  return;
}
```

#### Option B: Use Direct Database Auth
Instead of Supabase Auth, authenticate against your custom users table:

```javascript
// Create a direct database login
const { data: user, error } = await supabase
  .from('users')
  .select('*')
  .eq('email', email)
  .eq('password', hashedPassword)
  .single();
```

## 🔧 Most Common Fixes

### Fix 1: Wrong Environment Variable Name
- ❌ `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- ✅ `REACT_APP_SUPABASE_ANON_KEY`

### Fix 2: Wrong API Key Type
- ❌ Using `service_role` key (secret)
- ✅ Using `anon` key (public)

### Fix 3: Email Auth Not Enabled
- Go to Supabase → Authentication → Providers
- Enable "Email" provider

### Fix 4: User Not in Supabase Auth
- Users in your custom `users` table ≠ users in Supabase Auth
- Need to create user in Supabase Auth system

### Fix 5: **Custom Auth Hook Error (NEW)**
- Go to Supabase → Authentication → Settings
- **Disable "Custom Access Token Hook"**
- Remove any custom PostgreSQL auth functions

## 🧪 Testing Commands

### Test Supabase Connection (Browser Console)
```javascript
// Check if client is configured
console.log('Supabase client:', !!window.supabase);

// Test auth endpoint
const { data, error } = await supabase.auth.getSession();
console.log('Session test:', { data, error });

// Test user endpoint  
const { data: user, error: userError } = await supabase.auth.getUser();
console.log('User test:', { user, error: userError });
```

## 📞 Next Steps

1. **FIRST: Disable custom auth hook** in Supabase Dashboard
2. **Try the debug info** on your login page
3. **Check Vercel environment variables**
4. **Verify Supabase Auth provider settings**
5. **Create user in Supabase Auth if needed**
6. **If still failing, use temporary bypass option**

## 🆘 Emergency Access

If you need immediate access to your admin panel:

1. **Use temporary bypass:** `admin@hepta.no` / `hepta2025`
2. **Or contact via email directly:** j@hepta.no
3. **Or modify the route** to skip auth temporarily

## 🚨 **Priority Fix Order:**

1. **Disable Custom Auth Hook** (solves the PostgreSQL error)
2. **Check environment variables** (solves the "output claims" error)  
3. **Create user in Supabase Auth** (solves login failures)
4. **Use temporary bypass** (immediate access)

The debug info on your login page will show exactly what's misconfigured! 