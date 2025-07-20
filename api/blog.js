const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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

  try {
    if (req.method === 'POST') {
      // Save new blog post to Supabase
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

      return res.status(201).json({
        success: true,
        message: 'Blog post created successfully in Supabase!',
        data: blogPost
      });
    }

    if (req.method === 'GET') {
      // Get blog posts from Supabase
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

      return res.status(200).json({
        success: true,
        message: 'Blog posts retrieved successfully',
        data: blogPosts || []
      });
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('❌ Blog API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}; 