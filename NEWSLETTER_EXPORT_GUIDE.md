# 📧 Newsletter Subscribers Management Guide

## ✅ **What's Been Set Up**

Newsletter subscribers are now saved to your **Supabase database** in the `newsletter_subscribers` table!

### **Table Structure:**
- `id` - Unique UUID for each subscriber
- `email` - Subscriber's email address (unique)
- `status` - Subscription status (active, unsubscribed, etc.)
- `source` - Where they subscribed from (website-footer)
- `subscribed_at` - When they subscribed
- `unsubscribed_at` - When they unsubscribed (if applicable)
- `created_at` - Database record creation time
- `updated_at` - Last updated time

## 📊 **How to View Subscribers**

### **Option 1: Supabase Dashboard (Easiest)**
1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Select your project:** `ziksrslyraqhygilcvct`
3. **Go to Table Editor**
4. **Click on `newsletter_subscribers` table**
5. **View all subscribers with their details**

### **Option 2: SQL Query**
Run this in Supabase SQL Editor:
```sql
-- View all active subscribers
SELECT 
    email,
    source,
    subscribed_at,
    created_at
FROM newsletter_subscribers 
WHERE status = 'active'
ORDER BY created_at DESC;
```

## 📥 **How to Export as CSV**

### **Method 1: Supabase Dashboard Export**
1. **Go to Table Editor → `newsletter_subscribers`**
2. **Click the export button** (if available in your Supabase plan)
3. **Download as CSV**

### **Method 2: SQL Query + Copy**
1. **Go to Supabase SQL Editor**
2. **Run this query:**
```sql
COPY (
    SELECT 
        email,
        status,
        source,
        subscribed_at::date as subscription_date,
        created_at::date as created_date
    FROM newsletter_subscribers 
    WHERE status = 'active'
    ORDER BY created_at DESC
) TO STDOUT WITH CSV HEADER;
```
3. **Copy the results** and paste into Excel/Google Sheets

### **Method 3: Admin Dashboard (Coming Soon)**
You can add a CSV export feature to your admin dashboard:

```javascript
// Example: Add this to your admin dashboard
const exportSubscribers = async () => {
  const { data } = await supabase
    .from('newsletter_subscribers')
    .select('email, status, source, subscribed_at, created_at')
    .eq('status', 'active')
    .order('created_at', { ascending: false });
    
  // Convert to CSV
  const csv = [
    ['Email', 'Status', 'Source', 'Subscribed Date', 'Created Date'],
    ...data.map(row => [row.email, row.status, row.source, row.subscribed_at, row.created_at])
  ].map(row => row.join(',')).join('\n');
  
  // Download CSV
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `newsletter_subscribers_${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
};
```

## 🔍 **Useful Queries**

### **Count Total Subscribers**
```sql
SELECT COUNT(*) as total_subscribers 
FROM newsletter_subscribers 
WHERE status = 'active';
```

### **Recent Subscribers (Last 7 Days)**
```sql
SELECT email, created_at 
FROM newsletter_subscribers 
WHERE created_at >= NOW() - INTERVAL '7 days'
AND status = 'active'
ORDER BY created_at DESC;
```

### **Subscribers by Source**
```sql
SELECT source, COUNT(*) as count
FROM newsletter_subscribers 
WHERE status = 'active'
GROUP BY source
ORDER BY count DESC;
```

### **Monthly Subscription Growth**
```sql
SELECT 
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as new_subscribers
FROM newsletter_subscribers 
WHERE status = 'active'
GROUP BY month
ORDER BY month DESC;
```

## 🛠️ **Testing Newsletter Subscription**

1. **Go to your website footer**
2. **Enter a test email**
3. **Submit the newsletter form**
4. **Check Supabase table** - should see new row
5. **Check your email** - should receive notification

## 🔐 **Row Level Security (RLS)**

Your `newsletter_subscribers` table should have these policies:

```sql
-- Allow anyone to insert (subscribe)
CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
    FOR INSERT WITH CHECK (true);

-- Only authenticated users can read subscribers
CREATE POLICY "Only authenticated users can view subscribers" ON newsletter_subscribers
    FOR SELECT USING (auth.role() = 'authenticated');
```

## 📈 **Next Steps**

1. **Test newsletter signup** on your website
2. **Verify data is saved** in Supabase
3. **Export your first CSV** to test the process
4. **Consider adding unsubscribe functionality**
5. **Add newsletter management to your admin dashboard**

## 🎯 **Benefits**

- ✅ **All subscribers saved to database**
- ✅ **Easy CSV export for email campaigns**
- ✅ **Duplicate email prevention**
- ✅ **Source tracking** (know where subscribers came from)
- ✅ **Subscription date tracking**
- ✅ **Email notifications** when someone subscribes

**Your newsletter subscriber management is now fully functional!** 🎉 