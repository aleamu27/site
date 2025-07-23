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
    console.log('📤 Vercel serverless image upload request received');
    
    // For Vercel serverless functions, we need to parse FormData manually
    const requestContentType = req.headers['content-type'] || '';
    
    if (!requestContentType.includes('multipart/form-data')) {
      return res.status(400).json({
        error: 'Invalid content type',
        message: 'Expected multipart/form-data',
        received: requestContentType
      });
    }

    // Parse the multipart/form-data
    const boundary = requestContentType.split('boundary=')[1];
    if (!boundary) {
      return res.status(400).json({
        error: 'No boundary found',
        message: 'Invalid multipart/form-data format'
      });
    }

    // Get raw body buffer
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    
    // Parse the form data manually - work with raw bytes, not strings
    const boundaryBuffer = Buffer.from(`--${boundary}`);
    const parts = [];
    let start = 0;
    let boundaryIndex;
    
    // Split buffer by boundary
    while ((boundaryIndex = buffer.indexOf(boundaryBuffer, start)) !== -1) {
      if (start !== boundaryIndex) {
        parts.push(buffer.slice(start, boundaryIndex));
      }
      start = boundaryIndex + boundaryBuffer.length;
    }
    
    let fileBuffer = null;
    let filename = '';
    let fileContentType = '';
    
    for (const part of parts) {
      // Convert only the headers to string to check for the image field
      const headerEndIndex = part.indexOf(Buffer.from('\r\n\r\n'));
      if (headerEndIndex === -1) continue;
      
      const headers = part.slice(0, headerEndIndex).toString();
      
      if (headers.includes('name="image"')) {
        // Extract filename from headers
        const filenameMatch = headers.match(/filename="([^"]+)"/);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
        
        // Extract content type from headers
        const contentTypeMatch = headers.match(/Content-Type:\s*([^\r\n]+)/);
        if (contentTypeMatch) {
          fileContentType = contentTypeMatch[1].trim();
        }
        
        // Extract file data - everything after the double CRLF
        const fileDataStart = headerEndIndex + 4; // Skip \r\n\r\n
        let fileDataEnd = part.length;
        
        // Remove trailing \r\n if present
        if (part[fileDataEnd - 2] === 0x0D && part[fileDataEnd - 1] === 0x0A) {
          fileDataEnd -= 2;
        }
        
        fileBuffer = part.slice(fileDataStart, fileDataEnd);
        break;
      }
    }

    if (!fileBuffer || !filename) {
      return res.status(400).json({
        error: 'No file found',
        message: 'Could not parse uploaded file',
        debug: {
          hasBuffer: !!fileBuffer,
          filename: filename,
          contentType: fileContentType,
          partsCount: parts.length
        }
      });
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(fileContentType)) {
      return res.status(400).json({
        error: 'Invalid file type',
        message: 'Only JPEG, PNG, GIF, and WebP images are allowed',
        received: fileContentType,
        allowedTypes
      });
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (fileBuffer.length > maxSize) {
      return res.status(400).json({
        error: 'File too large',
        message: 'File size must be less than 5MB',
        size: `${(fileBuffer.length / 1024 / 1024).toFixed(2)}MB`,
        maxSize: '5MB'
      });
    }

    console.log('📁 Uploading file:', {
      filename,
      type: fileContentType,
      size: `${(fileBuffer.length / 1024 / 1024).toFixed(2)}MB`
    });

    // Generate a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileExtension = filename.split('.').pop();
    const uniqueFilename = `blog-images/${timestamp}-${filename.replace(/[^a-zA-Z0-9.-]/g, '')}`;

    // Upload to Vercel Blob
    const blob = await put(uniqueFilename, fileBuffer, {
      access: 'public',
      contentType: fileContentType,
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
      debug: 'Check Vercel function logs for details'
    });
  }
}; 