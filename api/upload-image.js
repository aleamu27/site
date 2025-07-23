const { put } = require('@vercel/blob');

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
    console.log('📤 Image upload request received');

    // Check if we have a file in the request
    if (!req.body || !req.body.file) {
      return res.status(400).json({
        error: 'No file provided',
        message: 'Please provide a file to upload'
      });
    }

    const { file, filename } = req.body;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return res.status(400).json({
        error: 'Invalid file type',
        message: 'Only JPEG, PNG, GIF, and WebP images are allowed',
        allowedTypes
      });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return res.status(400).json({
        error: 'File too large',
        message: 'File size must be less than 5MB',
        maxSize: '5MB'
      });
    }

    console.log('📁 Uploading file:', {
      filename,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)}MB`
    });

    // Generate a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileExtension = filename.split('.').pop();
    const uniqueFilename = `blog-images/${timestamp}-${filename.replace(/[^a-zA-Z0-9.-]/g, '')}`;

    // Convert base64 to buffer if needed
    let fileBuffer;
    if (typeof file.data === 'string' && file.data.startsWith('data:')) {
      // Base64 data URL
      const base64Data = file.data.split(',')[1];
      fileBuffer = Buffer.from(base64Data, 'base64');
    } else if (file.data) {
      fileBuffer = Buffer.from(file.data);
    } else {
      throw new Error('Invalid file data format');
    }

    // Upload to Vercel Blob
    const blob = await put(uniqueFilename, fileBuffer, {
      access: 'public',
      contentType: file.type,
    });

    console.log('✅ File uploaded successfully:', {
      url: blob.url,
      size: blob.size,
      pathname: blob.pathname
    });

    return res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        filename: uniqueFilename,
        originalFilename: filename
      }
    });

  } catch (error) {
    console.error('❌ Image upload error:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    return res.status(500).json({
      error: 'Failed to upload image',
      message: error.message,
      debug: 'Check server logs for details'
    });
  }
}; 