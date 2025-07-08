# Vercel Deployment Guide for Hepta.no

Perfect! Your form will send emails from `j@hepta.no` to the user's input email. Here's how to deploy to Vercel Pro! 🚀

## What I've Set Up

✅ **Email Configuration**: Sends from `j@hepta.no`  
✅ **Serverless Function**: `api/contact.js` for Vercel  
✅ **CORS Headers**: Properly configured  
✅ **Domain Integration**: Ready for `hepta.no`  

## Step 1: Verify Your Domain in Resend (IMPORTANT!)

Before deploying, you MUST verify `hepta.no` in Resend:

1. **Go to [Resend Dashboard](https://resend.com/domains)**
2. **Click "Add Domain"**
3. **Enter:** `hepta.no`
4. **Add DNS Records** to your domain:
   ```
   Type: TXT
   Name: _resend
   Value: [Resend will provide this]
   
   Type: MX
   Name: @
   Value: feedback-smtp.resend.com
   Priority: 10
   ```
5. **Verify** the domain (may take a few minutes)

## Step 2: Deploy to Vercel

### Option A: GitHub Integration (Recommended)
1. **Push your code to GitHub**
2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
3. **"New Project" → Import from GitHub**
4. **Select your repository**
5. **Configure:**
   - Framework Preset: Create React App
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `build`

### Option B: Vercel CLI
```bash
npm install -g vercel
vercel
```

## Step 3: Set Environment Variables

In your Vercel project dashboard:

1. **Go to Settings → Environment Variables**
2. **Add:**
   ```
   Name: RESEND_API_KEY
   Value: [Your Resend API Key]
   ```

## Step 4: Update Your Domain

1. **In Vercel Dashboard → Domains**
2. **Add your domain:** `hepta.no`
3. **Update DNS** to point to Vercel:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## How Your Email Will Work

**📧 From:** `Contact Form <j@hepta.no>`  
**📧 To:** Whatever email the user enters  
**📧 BCC:** `j@hepta.no` (you get a copy)  

### Email Content:
- Company information
- Project details  
- Professional HTML formatting
- Branded with hepta.no

## Testing After Deployment

1. **Visit your deployed site**
2. **Fill out the contact form**
3. **Check both emails:**
   - User gets confirmation
   - You get notification at `j@hepta.no`

## File Structure Created

```
your-project/
├── api/
│   └── contact.js          # Vercel serverless function
├── src/
│   └── pages/
│       └── Contact.jsx     # Updated frontend
├── vercel.json             # Vercel configuration
└── server.js               # Keep for local development
```

## Local Development

For local testing, still use:
```bash
npm run server  # Runs Express server
npm start       # Runs React app
```

The contact form will automatically detect:
- **Local:** Uses `http://localhost:3001/api/contact`
- **Production:** Uses `/api/contact` (Vercel function)

## Troubleshooting

### Domain Not Verified
- **Error:** "Email address not verified"
- **Fix:** Complete Step 1 (Resend domain verification)

### CORS Errors
- **Error:** Cross-origin request blocked
- **Fix:** Already handled in `api/contact.js`

### Function Timeout
- **Error:** Function timeout
- **Fix:** Configured 10s max duration in `vercel.json`

## Next Steps After Deployment

1. **Test the form** on your live site
2. **Monitor Resend dashboard** for email delivery
3. **Update your contact page** if needed
4. **Consider adding email templates** for different languages

## Pro Tips

- **Resend Dashboard** shows detailed email logs
- **Vercel Functions** have built-in monitoring
- **Your Pro account** gives you better performance and limits

Your professional contact form for `hepta.no` is ready to deploy! 🎉 