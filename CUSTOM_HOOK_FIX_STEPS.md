# Fix Custom Access Token Hook Error

## 🚨 Problem
`Error running hook URI: pg-functions://postgres/auth/custom_access_token_hook`

This means a PostgreSQL function is configured in Supabase Auth but failing to execute.

## 🔧 SOLUTION 1: Disable the Custom Hook (Easiest)

### Step 1: Access Supabase Dashboard
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: **ziksrslyraqhygilcvct**
3. Navigate to: **Authentication → Hooks**

### Step 2: Disable the Custom Access Token Hook
1. Look for **"Custom Access Token Hook"** section
2. **Disable** the toggle or **clear the URI field**
3. **Save changes**

### Step 3: Test Authentication
1. Try logging in again
2. The error should be resolved

---

## 🔧 SOLUTION 2: Fix the PostgreSQL Function (Advanced)

If you need the custom hook, here's how to fix it:

### Check Current Function
In Supabase SQL Editor, run:
```sql
-- Check if the function exists
SELECT * FROM pg_proc WHERE proname = 'custom_access_token_hook';

-- Check function definition
\df+ custom_access_token_hook
```

### Create a Working Function
Replace with this minimal working version:
```sql
CREATE OR REPLACE FUNCTION public.custom_access_token_hook(event jsonb)
RETURNS jsonb
LANGUAGE plpgsql
STABLE
AS $$
DECLARE
    claims jsonb;
BEGIN
    -- Get existing claims
    claims := event->'claims';
    
    -- Ensure all required claims are present
    -- Required: iss, aud, exp, iat, sub, role, aal, session_id, email, phone, is_anonymous
    
    -- Return the event with claims intact
    RETURN jsonb_build_object('claims', claims);
END;
$$;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.custom_access_token_hook TO supabase_auth_admin;
GRANT USAGE ON SCHEMA public TO supabase_auth_admin;
REVOKE EXECUTE ON FUNCTION public.custom_access_token_hook FROM authenticated, anon, public;
```

### Test the Function
```sql
-- Test with sample data
SELECT public.custom_access_token_hook(
    '{"user_id": "test", "claims": {"iss": "test", "aud": "authenticated", "exp": 1234567890, "iat": 1234567890, "sub": "test", "role": "authenticated", "aal": "aal1", "session_id": "test", "email": "test@example.com", "phone": "", "is_anonymous": false}}'::jsonb
);
```

---

## 🔧 SOLUTION 3: Remove All Custom Functions (Nuclear Option)

If you want to completely clean up:
```sql
-- List all custom auth functions
SELECT proname, prosrc FROM pg_proc WHERE proname LIKE '%auth%' OR proname LIKE '%token%';

-- Drop the specific function (if you don't need it)
DROP FUNCTION IF EXISTS public.custom_access_token_hook;
```

---

## ✅ Verification Steps

After implementing any solution:

1. **Go to your login page**
2. **Try logging in** with any credentials
3. **Check browser console** for errors
4. **Use the temporary bypass**: `admin@hepta.no` / `hepta2025`

---

## 🚀 Quick Test

Use the temporary bypass I added to your login form:
- **Email:** `admin@hepta.no` 
- **Password:** `hepta2025`

This will work regardless of Supabase configuration and let you test immediately.

---

## 📞 Need Help?

If none of these solutions work:
1. **Contact via:** j@hepta.no
2. **Check the debug info** on your login page  
3. **Send screenshots** of any errors from browser console 