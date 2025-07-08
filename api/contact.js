const { Resend } = require('resend');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { company, project, email } = req.body;

    // Validate required fields
    if (!company || !project || !email) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['company', 'project', 'email']
      });
    }

    // Send notification email to j@hepta.no
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'Contact Form <j@hepta.no>', // Your verified domain
      to: ['j@hepta.no'], // Send form data to you
      subject: `New Contact Form Submission from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #184B54;">New Contact Form Submission</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Company Information</h3>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Contact Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Project Details</h3>
            <p style="line-height: 1.6;">${project}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Reply to: <a href="mailto:${email}">${email}</a></p>
            <p>This form was submitted via hepta.no contact form.</p>
          </div>
        </div>
      `,
    });

    if (notificationError) {
      console.error('Notification email error:', notificationError);
      return res.status(400).json({ error: 'Failed to send notification email', details: notificationError });
    }

    // Send thank you email to the user
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: 'Hepta <j@hepta.no>', // Your verified domain
      to: [email], // Send to the user
      subject: 'Thank you for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #184B54;">Thank you for reaching out!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            We will answer your mail at our earliest convenience.
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>Best regards,<br/>The Hepta team</p>
          </div>
        </div>
      `,
    });

    if (confirmationError) {
      console.error('Confirmation email error:', confirmationError);
      // Don't fail the whole request if confirmation email fails
      console.log('Notification email sent successfully, but confirmation email failed');
    }

    console.log('Notification email sent successfully:', notificationData);
    if (!confirmationError) {
      console.log('Confirmation email sent successfully:', confirmationData);
    }
    
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully!',
      notificationEmailId: notificationData.id,
      confirmationEmailId: confirmationError ? null : confirmationData.id
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: error.message 
    });
  }
}; 