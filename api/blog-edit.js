const { createClient } = require('@supabase/supabase-js');

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

  // Extract ID from query or URL path
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({
      error: 'Missing blog post ID',
      message: 'Blog post ID is required'
    });
  }

  try {
    if (req.method === 'GET') {
      // Get single blog post for editing
      console.log('📖 Fetching blog post for editing:', id);

      if (!supabase) {
        return res.status(500).json({
          error: 'Database not configured',
          message: 'Supabase connection failed'
        });
      }

      const { data: blogPost, error: fetchError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (fetchError) {
        console.error('❌ Error fetching blog post:', fetchError);
        return res.status(500).json({
          error: 'Database error',
          message: fetchError.message
        });
      }

      if (!blogPost) {
        return res.status(404).json({
          error: 'Post not found',
          message: 'Blog post does not exist'
        });
      }

      console.log('✅ Blog post retrieved for editing:', blogPost.title);

      return res.status(200).json({
        success: true,
        message: 'Blog post retrieved successfully',
        data: blogPost
      });
    }

    if (req.method === 'PUT') {
      // Update blog post
      const { title, excerpt, author, content, featured_image, featured } = req.body;

      console.log('✏️ Updating blog post:', id, { title });

      // Validate required fields
      if (!title || !excerpt || !author || !content) {
        return res.status(400).json({
          error: 'Missing required fields',
          required: ['title', 'excerpt', 'author', 'content']
        });
      }

      if (!supabase) {
        return res.status(500).json({
          error: 'Database not configured',
          message: 'Supabase connection failed'
        });
      }

      // Generate new slug if title changed
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9æøåàáäâèéëêìíïîòóöôùúüûñç]+/g, '-')
        .replace(/(^-|-$)/g, '');

      const updateData = {
        title: title.trim(),
        slug,
        excerpt: excerpt.trim(),
        content: content.trim(),
        author: author.trim(),
        featured_image: featured_image?.trim() || null,
        featured: featured || false,
        updated_at: new Date().toISOString()
      };

      const { data: updatedPost, error: updateError } = await supabase
        .from('blog_posts')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (updateError) {
        console.error('❌ Error updating blog post:', updateError);
        return res.status(500).json({
          error: 'Database error',
          message: updateError.message
        });
      }

      console.log('✅ Blog post updated successfully:', updatedPost.title);

      return res.status(200).json({
        success: true,
        message: 'Blog post updated successfully',
        data: updatedPost
      });
    }

    if (req.method === 'DELETE') {
      // Delete blog post
      console.log('🗑️ Deleting blog post:', id);

      if (!supabase) {
        return res.status(500).json({
          error: 'Database not configured',
          message: 'Supabase connection failed'
        });
      }

      const { error: deleteError } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (deleteError) {
        console.error('❌ Error deleting blog post:', deleteError);
        return res.status(500).json({
          error: 'Database error',
          message: deleteError.message
        });
      }

      console.log('✅ Blog post deleted successfully');

      return res.status(200).json({
        success: true,
        message: 'Blog post deleted successfully'
      });
    }

    // Method not allowed
    return res.status(405).json({ error: 'Method not allowed' });

  } catch (error) {
    console.error('❌ Blog edit API error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message,
      debug: 'Check Vercel function logs for details'
    });
  }
}; 