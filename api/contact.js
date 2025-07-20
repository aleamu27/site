const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

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
    const { company, project, email, type } = req.body;

    // Handle newsletter subscription
    if (type === 'newsletter') {
      console.log('📧 Newsletter subscription request:', { email });
      
      if (!email) {
        return res.status(400).json({
          error: 'Email is required for newsletter subscription',
          required: ['email']
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          error: 'Please provide a valid email address'
        });
      }

      const cleanEmail = email.toLowerCase().trim();

      // Check Supabase connection
      if (!supabase) {
        console.error('❌ Supabase not configured for newsletter');
        return res.status(500).json({
          error: 'Database not configured',
          message: 'Newsletter subscription service temporarily unavailable'
        });
      }

      // Save newsletter subscriber to Supabase database
      console.log('💾 Saving newsletter subscriber to database:', cleanEmail);
      
      const { data: subscriber, error: supabaseError } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          email: cleanEmail,
          source: 'website-footer',
          status: 'active'
        }])
        .select()
        .single();

      if (supabaseError) {
        console.error('❌ Supabase newsletter error:', {
          message: supabaseError.message,
          details: supabaseError.details,
          code: supabaseError.code
        });
        
        // Handle duplicate email gracefully
        if (supabaseError.code === '23505' || supabaseError.message?.includes('duplicate')) {
          return res.json({
            success: true,
            message: 'You are already subscribed to our newsletter!',
            alreadySubscribed: true
          });
        }
        
        return res.status(500).json({
          error: 'Failed to save newsletter subscription',
          message: 'Please try again later'
        });
      }

      console.log('✅ Newsletter subscriber saved successfully:', subscriber);

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
              <p><strong>Email:</strong> ${cleanEmail}</p>
              <p><strong>Source:</strong> Website Footer Form</p>
              <p><strong>Subscriber ID:</strong> ${subscriber.id}</p>
              <p><strong>Subscribed At:</strong> ${new Date(subscriber.created_at).toLocaleString()}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>This subscription was submitted via hepta.no newsletter form and saved to the database.</p>
              <p>You can view all subscribers in your Supabase dashboard.</p>
            </div>
          </div>
        `,
      });

      if (notificationError) {
        console.error('Newsletter notification email error:', notificationError);
        // Don't fail the whole request if email fails, subscriber is already saved
        console.log('⚠️ Email notification failed, but subscriber was saved successfully');
      } else {
        console.log('📧 Newsletter notification email sent successfully:', notificationData.id);
      }

      res.json({ 
        success: true, 
        message: 'Thanks for subscribing to our newsletter!',
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          subscribedAt: subscriber.created_at
        }
      });
      return;
    }

    // Handle contact form submission (existing logic)
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
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for reaching out - Hepta</title>
    <style>
        /* Reset and base styles */
        body, table, td, p, h1, h2, h3 {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        body {
            background-color: #fafbfa;
            color: #222;
            line-height: 1.6;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 32px rgba(24, 75, 84, 0.07);
        }
        
        .header {
            background: linear-gradient(90deg, #184B54 0%, #5FC39B 100%);
            padding: 50px 40px 40px 40px;
            text-align: center;
        }
        
        .logo-section {
            margin-bottom: 24px;
        }
        
        .logo-circle {
            width: 64px;
            height: 64px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
        
        .logo-text {
            color: #ffffff;
            font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.04em;
        }
        
        .header-title {
            color: #ffffff;
            font-size: 28px;
            font-weight: 600;
            margin: 0;
            letter-spacing: -0.01em;
            line-height: 1.2;
        }
        
        .header-subtitle {
            color: rgba(255, 255, 255, 0.85);
            font-size: 18px;
            font-weight: 400;
            margin: 12px 0 0 0;
        }
        
        .content {
            padding: 50px 40px;
            text-align: center;
        }
        
        .main-message {
            color: #222;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.6;
            margin: 0 0 32px 0;
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .highlight-box {
            background: #F8F4E3;
            border-radius: 12px;
            padding: 32px;
            margin: 32px 0;
            border-left: 4px solid #184B54;
        }
        
        .highlight-text {
            color: #184B54;
            font-size: 20px;
            font-weight: 600;
            margin: 0 0 12px 0;
            letter-spacing: -0.01em;
        }
        
        .highlight-subtext {
            color: #555;
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            line-height: 1.5;
        }
        
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent 0%, #E5E5E5 50%, transparent 100%);
            margin: 40px 0;
            border: none;
        }
        
        .footer {
            background: #F5F5F5;
            padding: 32px 40px;
            text-align: center;
            border-top: 1px solid #E5E5E5;
        }
        
        .signature {
            color: #222;
            font-size: 16px;
            font-weight: 500;
            margin: 0 0 20px 0;
        }
        
        .team-name {
            color: #184B54;
            font-weight: 600;
            font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
            letter-spacing: 0.02em;
        }
        
        .footer-links {
            margin: 20px 0 0 0;
        }
        
        .footer-link {
            color: #888;
            text-decoration: none;
            font-size: 14px;
            margin: 0 16px;
            font-weight: 400;
        }
        
        .footer-link:hover {
            color: #184B54;
            text-decoration: underline;
        }
        
        .footer-brand {
            color: #888;
            font-size: 14px;
            margin: 16px 0 0 0;
        }
        
        .brand-link {
            color: #184B54;
            text-decoration: none;
            font-weight: 600;
            font-family: 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
        }
        
        .brand-link:hover {
            text-decoration: underline;
        }
        
        /* Responsive */
        @media only screen and (max-width: 600px) {
            .email-container {
                margin: 0 10px;
                border-radius: 8px;
            }
            
            .header {
                padding: 32px 24px 24px 24px;
            }
            
            .content {
                padding: 32px 24px;
            }
            
            .footer {
                padding: 24px;
            }
            
            .header-title {
                font-size: 24px;
            }
            
            .header-subtitle {
                font-size: 16px;
            }
            
            .main-message {
                font-size: 16px;
            }
            
            .highlight-box {
                padding: 24px 20px;
            }
            
            .highlight-text {
                font-size: 18px;
            }
            
            .footer-link {
                display: block;
                margin: 8px 0;
            }
        }
    </style>
</head>
<body>
    <div style="padding: 20px 0;">
        <div class="email-container">
            <!-- Header -->
            <div class="header">
                <div class="logo-section">
                    <div class="logo-circle">
                        <div class="logo-text">H</div>
                    </div>
                </div>
                <h1 class="header-title">Thank you for reaching out!</h1>
                <p class="header-subtitle">We've received your message</p>
            </div>
            
            <!-- Content -->
            <div class="content">
                <p class="main-message">
                    We appreciate you taking the time to contact us about your project. 
                    Our team will review your inquiry and get back to you at our earliest convenience.
                </p>
                
                <div class="highlight-box">
                    <div class="highlight-text">What happens next?</div>
                    <div class="highlight-subtext">
                        We'll review your project details and reach out within 24-48 hours to discuss how we can help bring your ideas to life.
                    </div>
                </div>
                
                <hr class="divider">
                
                <div class="signature">
                    Best regards,<br>
                    <span class="team-name">The Hepta team</span>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <div class="footer-links">
                    <a href="https://hepta.no" class="footer-link">Visit our website</a>
                    <a href="https://x.com/HeptaCreative" class="footer-link">Follow us on X</a>
                    <a href="mailto:j@hepta.no" class="footer-link">Contact us</a>
                </div>
                <div class="footer-brand">
                    <a href="https://hepta.no" class="brand-link">hepta.no</a> • Oslo
                </div>
            </div>
        </div>
    </div>
</body>
</html>`,
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