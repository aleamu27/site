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
    const { company, employees, project, email } = req.body;

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