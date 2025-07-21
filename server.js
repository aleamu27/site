const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Blog posts endpoint
app.post('/api/blog', async (req, res) => {
  try {
    const { title, excerpt, author, content, image, featured } = req.body;

    console.log('📝 New blog post submission:', {
      title,
      excerpt,
      author,
      contentLength: content?.length || 0,
      image: !!image,
      featured,
      hasSupabase: !!supabase
    });

    // Validate required fields
    if (!title || !excerpt || !author || !content) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['title', 'excerpt', 'author', 'content']
      });
    }

    // Check Supabase connection
    if (!supabase) {
      console.error('❌ Supabase not configured');
      return res.status(500).json({
        error: 'Database not configured',
        message: 'Supabase connection failed'
      });
    }

    // Generate slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9æøåàáäâèéëêìíïîòóöôùúüûñç]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Create blog post object for Supabase
    const blogPostData = {
      title: title.trim(),
      slug,
      excerpt: excerpt.trim(),
      content: content.trim(),
      author: author.trim(),
      image: image?.trim() || null,
      featured: featured || false,
      published: true
    };

    console.log('💾 Saving to Supabase:', {
      slug: blogPostData.slug,
      title: blogPostData.title
    });

    // Insert into Supabase
    const { data: blogPost, error: supabaseError } = await supabase
      .from('blog_posts')
      .insert([blogPostData])
      .select()
      .single();

    if (supabaseError) {
      console.error('❌ Supabase error:', supabaseError);
      return res.status(500).json({
        error: 'Database error',
        message: supabaseError.message,
        details: supabaseError
      });
    }

    console.log('✅ Blog post saved to Supabase:', {
      id: blogPost.id,
      title: blogPost.title,
      slug: blogPost.slug
    });

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully in Supabase!',
      data: blogPost
    });

  } catch (error) {
    console.error('❌ Blog API error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
});

// Get blog posts endpoint
app.get('/api/blog', async (req, res) => {
  try {
    console.log('📖 Fetching blog posts from Supabase');

    if (!supabase) {
      return res.status(500).json({
        error: 'Database not configured',
        message: 'Supabase connection failed'
      });
    }

    const { data: blogPosts, error: fetchError } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('❌ Error fetching blog posts:', fetchError);
      return res.status(500).json({
        error: 'Database error',
        message: fetchError.message
      });
    }

    console.log('✅ Blog posts retrieved:', blogPosts?.length || 0, 'posts');

    res.json({
      success: true,
      message: 'Blog posts retrieved successfully',
      data: blogPosts || []
    });

  } catch (error) {
    console.error('❌ Blog fetch error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
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
      if (resend) {
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
      } else {
        console.warn('⚠️ Resend not configured, skipping newsletter notification email.');
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
    // Validate required fields
    if (!company || !employees || !project || !email) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['company', 'employees', 'project', 'email']
      });
    }

    // Send email using Resend
    if (resend) {
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
    } else {
      console.warn('⚠️ Resend not configured, skipping contact form email.');
      res.status(503).json({
        error: 'Service Unavailable',
        message: 'Email sending service is temporarily unavailable.'
      });
    }

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
  console.log('- Supabase Anon Key:', process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY ? 'Set' : 'Not set');
}); 