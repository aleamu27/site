const { createClient } = require('@supabase/supabase-js');
const { randomUUID } = require('crypto');

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

module.exports = async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!supabase) {
    return res.status(500).json({ error: 'Database not configured' });
  }

  try {
    const { consentType, domain } = req.body;

    if (!consentType || !['accepted', 'declined'].includes(consentType)) {
      return res.status(400).json({ error: 'Invalid consent type' });
    }

    // Get IP from Vercel headers
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim()
      || req.headers['x-real-ip']
      || 'unknown';

    // Get user agent
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Generate consent ID
    const consentId = randomUUID();

    // Store in database
    const { data, error } = await supabase
      .from('cookie_consents')
      .insert([{
        consent_id: consentId,
        ip_address: ip,
        consent_type: consentType,
        domain: domain || null,
        user_agent: userAgent
      }])
      .select()
      .single();

    if (error) {
      console.error('Consent storage error:', error);
      return res.status(500).json({ error: 'Failed to store consent' });
    }

    res.json({
      success: true,
      consentId: consentId
    });

  } catch (error) {
    console.error('Consent API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
