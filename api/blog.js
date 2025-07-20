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
      // Save new blog post
      const { title, excerpt, author, content, image, featured } = req.body;

      console.log('📝 New blog post submission:', {
        title,
        excerpt,
        author,
        contentLength: content?.length || 0,
        image: !!image,
        featured
      });

      // Validate required fields
      if (!title || !excerpt || !author || !content) {
        return res.status(400).json({
          error: 'Missing required fields',
          required: ['title', 'excerpt', 'author', 'content']
        });
      }

      // Generate slug
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9æøåàáäâèéëêìíïîòóöôùúüûñç]+/g, '-')
        .replace(/(^-|-$)/g, '');

      // Create blog post object
      const blogPost = {
        id: Date.now(), // Simple ID generation
        title: title.trim(),
        excerpt: excerpt.trim(),
        author: author.trim(),
        content: content.trim(),
        image: image?.trim() || '',
        featured: featured || false,
        slug,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        published: true
      };

      // In a real app, you'd save this to a database
      // For now, we'll just return success and the created post
      console.log('✅ Blog post created successfully:', {
        id: blogPost.id,
        title: blogPost.title,
        slug: blogPost.slug
      });

      return res.status(201).json({
        success: true,
        message: 'Blog post created successfully!',
        data: blogPost
      });
    }

    if (req.method === 'GET') {
      // Get blog posts (placeholder)
      return res.status(200).json({
        success: true,
        message: 'Blog posts retrieved',
        data: []
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