const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

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
  console.log('- Supabase Anon Key:', process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY ? 'Set' : 'Not set');
}); 