module.exports = async function handler(req, res) {
  // Vercel provides geo information in headers
  const country = req.headers['x-vercel-ip-country'] || 'US';
  const city = req.headers['x-vercel-ip-city'] || '';
  const region = req.headers['x-vercel-ip-country-region'] || '';

  res.setHeader('Cache-Control', 'no-store');
  res.json({
    country,
    city,
    region
  });
};
