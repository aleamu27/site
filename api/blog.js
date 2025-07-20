const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

console.log('🔧 Supabase Debug Info:', {
  url: supabaseUrl,
  hasKey: !!supabaseKey,
  keyLength: supabaseKey ? supabaseKey.length : 0,
  keyPrefix: supabaseKey ? supabaseKey.substring(0, 10) + '...' : 'MISSING'
});

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
        hasSupabase: !!supabase,
        timestamp: new Date().toISOString()
      });

      // Validate required fields
      if (!title || !excerpt || !author || !content) {
        console.error('❌ Validation failed - missing required fields');
        return res.status(400).json({
          error: 'Missing required fields',
          required: ['title', 'excerpt', 'author', 'content'],
          received: { title: !!title, excerpt: !!excerpt, author: !!author, content: !!content }
        });
      }

      // Check Supabase connection
      if (!supabase) {
        console.error('❌ Supabase not configured - missing environment variables');
        return res.status(500).json({
          error: 'Database not configured',
          message: 'Supabase connection failed - check environment variables',
          debug: {
            hasUrl: !!supabaseUrl,
            hasKey: !!supabaseKey,
            envVarName: 'REACT_APP_SUPABASE_ANON_KEY'
          }
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

      console.log('💾 Attempting to save to Supabase:', {
        slug: blogPostData.slug,
        title: blogPostData.title,
        table: 'blog_posts'
      });

      // Insert into Supabase
      const { data: blogPost, error: supabaseError } = await supabase
        .from('blog_posts')
        .insert([blogPostData])
        .select()
        .single();

      if (supabaseError) {
        console.error('❌ Detailed Supabase error:', {
          message: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint,
          code: supabaseError.code,
          fullError: supabaseError
        });
        
        // Provide more specific error messages
        let userMessage = 'Database error occurred';
        if (supabaseError.message?.includes('relation "blog_posts" does not exist')) {
          userMessage = 'Blog posts table does not exist in database. Please run the SQL setup script.';
        } else if (supabaseError.message?.includes('row-level security')) {
          userMessage = 'Database security policy blocking insert. Check row-level security settings.';
        } else if (supabaseError.message?.includes('duplicate key')) {
          userMessage = 'A blog post with this title already exists.';
        }
        
        return res.status(500).json({
          error: 'Database error',
          message: userMessage,
          details: supabaseError.message,
          debug: {
            code: supabaseError.code,
            hint: supabaseError.hint,
            table: 'blog_posts'
          }
        });
      }

      console.log('✅ Blog post saved to Supabase successfully:', {
        id: blogPost.id,
        title: blogPost.title,
        slug: blogPost.slug,
        created_at: blogPost.created_at
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
    console.error('❌ Unexpected blog API error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
      debug: 'Check server logs for details'
    });
  }
}; 