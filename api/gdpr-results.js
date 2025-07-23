const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

// Initialize Supabase
const supabaseUrl = 'https://ziksrslyraqhygilcvct.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Initialize Resend
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      email,
      subscribeNewsletter,
      score,
      checkedCount,
      totalItems,
      categories
    } = req.body;

    console.log('📊 Processing GDPR results submission:', {
      email,
      score,
      checkedCount,
      totalItems,
      subscribeNewsletter
    });

    // Validate input
    if (!email || !categories) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['email', 'categories']
      });
    }

    // Handle newsletter subscription if requested
    if (subscribeNewsletter && supabase) {
      try {
        console.log('📧 Adding to newsletter subscription...');
        
        const { error: subscriptionError } = await supabase
          .from('newsletter_subscribers')
          .insert([
            {
              email: email.toLowerCase().trim(),
              subscribed_at: new Date().toISOString(),
              source: 'gdpr_checklist'
            }
          ]);

        if (subscriptionError && !subscriptionError.message.includes('duplicate')) {
          console.error('❌ Newsletter subscription error:', subscriptionError);
        } else {
          console.log('✅ Newsletter subscription successful or already exists');
        }
      } catch (subscriptionErr) {
        console.error('❌ Newsletter subscription error:', subscriptionErr);
      }
    }

    // Generate detailed results HTML
    const resultsHtml = generateResultsHtml(score, checkedCount, totalItems, categories);

    // Send results email
    if (resend) {
      try {
        console.log('📤 Sending GDPR results email...');
        
        const { data: emailData, error: emailError } = await resend.emails.send({
          from: 'Hepta <noreply@hepta.no>',
          to: [email],
          subject: `Your GDPR Compliance Results - ${score}% Complete`,
          html: resultsHtml,
        });

        if (emailError) {
          console.error('❌ Email sending error:', emailError);
          throw new Error(`Failed to send email: ${emailError.message}`);
        }

        console.log('✅ Email sent successfully:', emailData);
      } catch (emailErr) {
        console.error('❌ Email error:', emailErr);
        return res.status(500).json({
          error: 'Failed to send email',
          message: emailErr.message
        });
      }
    } else {
      console.warn('⚠️ Resend not configured, skipping email');
      return res.status(500).json({
        error: 'Email service not configured',
        message: 'Unable to send results email'
      });
    }

    console.log('🎉 GDPR results processed successfully');

    return res.status(200).json({
      success: true,
      message: 'Results sent successfully',
      score
    });

  } catch (error) {
    console.error('❌ GDPR results API error:', {
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

function generateResultsHtml(score, checkedCount, totalItems, categories) {
  const getScoreColor = (score) => {
    if (score >= 80) return '#34C759';
    if (score >= 60) return '#FF9500';
    return '#FF3B30';
  };

  const getScoreDescription = (score) => {
    if (score >= 90) return "Excellent! Your GDPR compliance is very strong.";
    if (score >= 80) return "Good! You're well on your way to GDPR compliance.";
    if (score >= 60) return "Fair. There are several areas that need attention.";
    if (score >= 40) return "Needs improvement. Consider prioritizing GDPR compliance.";
    return "Critical. Immediate action required for GDPR compliance.";
  };

  const categoriesHtml = categories.map(category => {
    const categoryScore = Math.round((category.items.filter(item => item.checked).length / category.items.length) * 100);
    const categoryColor = getScoreColor(categoryScore);
    
    const itemsHtml = category.items.map(item => 
      `<tr>
        <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">
          <span style="color: ${item.checked ? '#34C759' : '#FF3B30'}; font-weight: bold; margin-right: 8px;">
            ${item.checked ? '✅' : '❌'}
          </span>
          ${item.text}
        </td>
      </tr>`
    ).join('');

    return `
      <div style="margin-bottom: 30px; background: white; border-radius: 8px; padding: 20px; border: 1px solid #f0f0f0;">
        <h3 style="margin: 0 0 15px 0; color: #222; display: flex; align-items: center; gap: 10px;">
          <span style="background: ${categoryColor}; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
            ${category.id}
          </span>
          ${category.title} (${categoryScore}%)
        </h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${itemsHtml}
        </table>
      </div>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your GDPR Compliance Results</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5;">
      <div style="max-width: 600px; margin: 0 auto; background: white; padding: 40px 30px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 40px;">
          <h1 style="color: #222; margin: 0 0 10px 0; font-size: 28px;">Your GDPR Compliance Results</h1>
          <div style="background: ${getScoreColor(score)}; color: white; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <div style="font-size: 48px; font-weight: bold; margin-bottom: 10px;">${score}%</div>
            <div style="font-size: 18px;">${getScoreDescription(score)}</div>
            <div style="font-size: 14px; margin-top: 10px; opacity: 0.9;">
              Completed ${checkedCount} out of ${totalItems} compliance items
            </div>
          </div>
        </div>

        <!-- Detailed Results -->
        <div style="margin-bottom: 40px;">
          <h2 style="color: #222; margin: 0 0 20px 0; font-size: 22px;">Detailed Breakdown</h2>
          ${categoriesHtml}
        </div>

        <!-- Next Steps -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #222; margin: 0 0 15px 0;">Next Steps</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li style="margin-bottom: 8px;">Review areas marked with ❌ - these need immediate attention</li>
            <li style="margin-bottom: 8px;">Create an action plan to address compliance gaps</li>
            <li style="margin-bottom: 8px;">Consider consulting with a GDPR specialist for complex issues</li>
            <li style="margin-bottom: 8px;">Schedule regular compliance reviews (quarterly recommended)</li>
          </ul>
        </div>

        <!-- Contact -->
        <div style="text-align: center; padding: 20px 0; border-top: 1px solid #f0f0f0;">
          <p style="margin: 0 0 10px 0; color: #666;">Need help with GDPR compliance?</p>
          <p style="margin: 0; color: #666;">
            Contact us at <a href="mailto:j@hepta.no" style="color: #34C759; text-decoration: none;">j@hepta.no</a>
          </p>
          <p style="margin: 10px 0 0 0; font-size: 12px; color: #999;">
            This checklist is for guidance only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
} 