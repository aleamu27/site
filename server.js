const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { company, employees, project, email, type } = req.body;

    // Handle newsletter subscription
    if (type === 'newsletter') {
      console.log('📧 Newsletter subscription request:', { email });
      
      if (!email) {
        return res.status(400).json({
          error: 'Email is required for newsletter subscription',
          required: ['email']
        });
      }

      // Send newsletter subscription notification to j@hepta.no
      const { data: notificationData, error: notificationError } = await resend.emails.send({
        from: 'Newsletter <j@hepta.no>',
        to: ['j@hepta.no'],
        subject: `New Newsletter Subscription`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #184B54;">New Newsletter Subscription</h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Subscriber Information</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Source:</strong> Website Footer Form</p>
              <p><strong>Subscribed At:</strong> ${new Date().toISOString()}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>This subscription was submitted via hepta.no newsletter form.</p>
            </div>
          </div>
        `,
      });

      if (notificationError) {
        console.error('Newsletter notification email error:', notificationError);
        return res.status(400).json({ error: 'Failed to process newsletter subscription', details: notificationError });
      }

      console.log('Newsletter subscription notification sent successfully:', notificationData);
      
      res.json({ 
        success: true, 
        message: 'Newsletter subscription successful!',
        subscriptionId: notificationData.id
      });
      return;
    }

    // Handle contact form submission (existing logic)
    // Validate required fields
    if (!company || !employees || !project || !email) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['company', 'employees', 'project', 'email']
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <j@hepta.no>', // Your verified domain
      to: [email], // Send to the user who submitted the form
      bcc: ['j@hepta.no'], // You'll receive notifications here
      subject: `New Contact Form Submission from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #184B54;">New Contact Form Submission</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Company Information</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Number of Employees:</strong> ${employees}</p>
            <p><strong>Contact Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Project Details</h3>
            <p style="line-height: 1.6;">${project}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This email was sent from your website contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: 'Failed to send email', details: error });
    }

    console.log('Email sent successfully:', data);
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully!',
      emailId: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log('Environment check:');
  console.log('- Resend API Key:', process.env.RESEND_API_KEY ? 'Set' : 'Not set');
}); 