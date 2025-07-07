# Deployment Guide - Making Your Resend Form Web-Ready

Your form is **currently only working locally**. Here's how to make it work on the web! 🚀

## Current Status ❌

- ✅ **Local development**: Works perfectly
- ❌ **Web deployment**: Needs setup
- ❌ **Email address**: Placeholder needs replacement
- ❌ **Backend**: Only runs locally

## What Needs to Be Done

### 1. **Update Your Email Address (Required!)**
Edit `server.js` line 38:
```javascript
bcc: ['your-email@example.com'], // ⚠️ REPLACE WITH YOUR ACTUAL EMAIL
```

**Replace with your real email** where you want to receive contact form submissions.

### 2. **Deploy Your Backend**

You need to deploy your `server.js` file. Here are your options:

#### Option A: Railway (Recommended - Free tier available)
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repo
3. Deploy the backend
4. Set environment variable: `RESEND_API_KEY=re_ZvbyGeiT_DeDQ8NrZ3RXMdZyvL1VUg5DX`
5. Get your deployed URL (e.g., `https://your-app.railway.app`)

#### Option B: Vercel (Serverless)
1. Install Vercel CLI: `npm install -g vercel`
2. Create `api/contact.js` (serverless function)
3. Deploy with `vercel`

#### Option C: Netlify Functions
1. Create `netlify/functions/contact.js`
2. Deploy to Netlify
3. Set environment variables in Netlify dashboard

### 3. **Update Frontend Configuration**

After deploying backend, create a `.env` file:
```bash
REACT_APP_API_URL=https://your-deployed-backend.com/api/contact
```

### 4. **Security: Move API Key to Environment Variables**

**Remove API key from `package.json`** and set it as environment variable on your hosting platform.

## Quick Railway Deployment (Easiest)

### Step 1: Prepare for Railway
Create `railway.json` in your project root:
```json
{
  "build": {
    "builder": "nodejs",
    "buildCommand": "npm install"
  },
  "deploy": {
    "startCommand": "node server.js",
    "healthcheckPath": "/health"
  }
}
```

### Step 2: Deploy
1. Push your code to GitHub
2. Go to [Railway.app](https://railway.app)
3. "New Project" → "Deploy from GitHub repo"
4. Select your repo
5. Set environment variables:
   - `RESEND_API_KEY`: `re_ZvbyGeiT_DeDQ8NrZ3RXMdZyvL1VUg5DX`
   - `PORT`: `3001`

### Step 3: Update Frontend
Get your Railway URL and update your React app's `.env`:
```bash
REACT_APP_API_URL=https://your-app.railway.app/api/contact
```

## Testing After Deployment

1. **Test the backend directly**:
   ```bash
   curl https://your-backend-url.com/health
   ```

2. **Test your contact form** on the live website

3. **Check email delivery** in Resend dashboard

## Current Email Behavior

**From:** `Contact Form <onboarding@resend.dev>` (Resend's test domain)  
**To:** Person who submitted the form  
**BCC:** Your email (for notifications)  

### Upgrading the "From" Address (Optional)

For a more professional look:
1. **Add your domain** to Resend dashboard
2. **Verify DNS** records
3. **Update `server.js`**:
   ```javascript
   from: 'Contact Form <noreply@yourdomain.com>',
   ```

## Checklist Before Going Live

- [ ] Replace `your-email@example.com` with your real email
- [ ] Deploy backend to Railway/Vercel/Netlify
- [ ] Set `RESEND_API_KEY` as environment variable
- [ ] Update `REACT_APP_API_URL` in frontend
- [ ] Remove API key from `package.json`
- [ ] Test form submission on live site
- [ ] Check emails are received

## Need Help?

1. **Railway deployment issues**: Check Railway logs
2. **Email not sending**: Check Resend dashboard
3. **CORS errors**: Make sure your backend allows your frontend domain

Your form will be fully functional on the web once these steps are complete! 🎉 