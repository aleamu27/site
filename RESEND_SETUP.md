# Resend Integration Setup Guide

Your contact form is now integrated with Resend for email delivery! Here's what has been set up and what you need to do next.

## What's Been Done

✅ **Resend Package Installed**: Added Resend SDK to your project  
✅ **Backend API Created**: Express server with `/api/contact` endpoint  
✅ **Form Updated**: Contact form now sends data to the backend  
✅ **Error Handling**: Added loading states and error messages  
✅ **Email Template**: Nicely formatted HTML email template  

## Quick Start

1. **Start the full application** (backend + frontend):
   ```bash
   npm run dev:full
   ```

2. **Or run separately**:
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm start
   ```

## Important Configuration Needed

### 1. Email Addresses
Edit `server.js` and update these email addresses:

```javascript
// Line 35-36 in server.js
to: [email], // Sends confirmation to the user
bcc: ['your-email@domain.com'], // Change this to YOUR email address
```

### 2. From Address (Important!)
Currently using Resend's test domain. For production:

```javascript
// Line 34 in server.js
from: 'Contact Form <onboarding@resend.dev>', // Change to your verified domain
```

**To use your own domain:**
1. Go to [Resend Dashboard](https://resend.com/domains)
2. Add and verify your domain
3. Update the `from` address to `Contact Form <noreply@yourdomain.com>`

### 3. API Key Security
Your API key is currently in `package.json` for testing. For production:

1. Remove it from `package.json`
2. Add it to your hosting environment variables
3. Use a `.env` file locally (gitignored)

## How It Works

1. User fills out the 4-step contact form
2. On final submit, data is sent to `http://localhost:3001/api/contact`
3. Backend validates the data
4. Resend sends a formatted email to:
   - The user (confirmation)
   - You (notification via BCC)
5. Success/error feedback shown to user

## Testing

1. Fill out your contact form completely
2. Submit the form
3. Check both email addresses for delivery
4. Check browser console for any errors

## Email Template

The email includes:
- Company information
- Project details
- Professional HTML formatting
- Your brand colors (#184B54)

## Troubleshooting

**Common Issues:**

1. **"Network error"** - Backend not running
   - Run `npm run server` first

2. **"Failed to send email"** - API key issue
   - Check API key in Resend dashboard
   - Verify it's correctly set

3. **Emails not received** - Check:
   - Spam folders
   - Email addresses in `server.js`
   - Resend dashboard for delivery status

**Need Help?**
- Check Resend dashboard for detailed logs
- Look at browser console for frontend errors
- Check server terminal for backend errors

## Next Steps

1. Test the form thoroughly
2. Update email addresses to your actual addresses
3. Consider adding your domain to Resend
4. Add the API key to environment variables for security
5. Deploy both frontend and backend to production

Your contact form is now ready to send real emails! 🎉 