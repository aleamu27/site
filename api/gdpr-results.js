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
      checkedCount,
      totalItems,
      categories
    } = req.body;

    console.log('📊 Processing GDPR results submission:', {
      email,
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
    const resultsHtml = generateResultsHtml(checkedCount, totalItems, categories);

    // Send results email
    if (resend) {
      try {
        console.log('📤 Sending GDPR results email...');
        
        const { data: emailData, error: emailError } = await resend.emails.send({
          from: 'Hepta <noreply@hepta.no>',
          to: [email],
          subject: `Your Personalized GDPR Compliance Analysis`,
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
      message: 'Analysis sent successfully'
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

function generateResultsHtml(checkedCount, totalItems, categories) {
  const getComplianceLevel = (checkedCount, totalItems) => {
    const ratio = checkedCount / totalItems;
    if (ratio >= 0.9) return { level: 'strong', color: '#34C759' };
    if (ratio >= 0.7) return { level: 'developing', color: '#FF9500' };
    if (ratio >= 0.5) return { level: 'basic', color: '#FF9500' };
    return { level: 'needs-attention', color: '#FF3B30' };
  };

  const compliance = getComplianceLevel(checkedCount, totalItems);
  
  const getOverallAnalysis = (compliance, checkedCount, totalItems) => {
    const gaps = totalItems - checkedCount;
    
    if (compliance.level === 'strong') {
      return `Your organization demonstrates strong GDPR compliance practices with ${checkedCount} out of ${totalItems} areas well-managed. The ${gaps} remaining areas represent opportunities for further strengthening your data protection framework.`;
    } else if (compliance.level === 'developing') {
      return `Your organization has a solid foundation with ${checkedCount} out of ${totalItems} compliance areas in place. However, ${gaps} critical areas need attention to ensure full GDPR compliance and avoid potential regulatory risks.`;
    } else if (compliance.level === 'basic') {
      return `Your organization has basic compliance measures with ${checkedCount} out of ${totalItems} areas addressed. The ${gaps} missing areas represent significant compliance gaps that require immediate attention to meet GDPR requirements.`;
    } else {
      return `Your organization has significant GDPR compliance gaps with only ${checkedCount} out of ${totalItems} areas properly addressed. The ${gaps} missing areas pose serious regulatory risks and require urgent action to avoid potential fines and legal issues.`;
    }
  };

  const getPriorityRecommendations = (categories) => {
    const criticalAreas = categories.filter(category => {
      const yesAnswers = category.items.filter(item => item.answer === true).length;
      const categoryScore = yesAnswers / category.items.length;
      return categoryScore < 0.5;
    });

    if (criticalAreas.length === 0) {
      return [
        "Continue regular compliance reviews and updates",
        "Document all processes for audit readiness", 
        "Train staff on latest GDPR developments",
        "Consider advanced privacy-by-design implementations"
      ];
    }

    const recommendations = [];
    criticalAreas.forEach(area => {
      switch(area.id) {
        case 1:
          recommendations.push("Conduct comprehensive data audit and mapping exercise");
          break;
        case 2:
          recommendations.push("Document legal basis for all data processing activities");
          break;
        case 3:
          recommendations.push("Implement clear consent mechanisms and privacy notices");
          break;
        case 4:
          recommendations.push("Establish data subject rights fulfillment procedures");
          break;
        case 5:
          recommendations.push("Implement robust data security measures and encryption");
          break;
        case 6:
          recommendations.push("Develop comprehensive data breach response plan");
          break;
        case 7:
          recommendations.push("Review and update all vendor data processing agreements");
          break;
        case 8:
          recommendations.push("Create proper documentation and record-keeping systems");
          break;
        case 9:
          recommendations.push("Assign GDPR responsibilities and provide staff training");
          break;
        case 10:
          recommendations.push("Establish regular compliance review and update processes");
          break;
      }
    });

    return recommendations.slice(0, 4); // Top 4 priorities
  };

  const overallAnalysis = getOverallAnalysis(compliance, checkedCount, totalItems);
  const priorityRecommendations = getPriorityRecommendations(categories);

  const categoriesHtml = categories.map(category => {
    const categoryYesItems = category.items.filter(item => item.answer === true).length;
    const categoryTotalItems = category.items.length;
    const categoryRatio = categoryYesItems / categoryTotalItems;
    
    let categoryStatus, categoryColor, categoryAdvice;
    if (categoryRatio >= 0.8) {
      categoryStatus = "Strong";
      categoryColor = "#34C759";
      categoryAdvice = "Well managed - continue current practices";
    } else if (categoryRatio >= 0.5) {
      categoryStatus = "Developing";
      categoryColor = "#FF9500";
      categoryAdvice = "Good foundation - focus on completing remaining items";
    } else {
      categoryStatus = "Needs Attention";
      categoryColor = "#FF3B30";
      categoryAdvice = "Priority area - requires immediate action";
    }
    
    const itemsHtml = category.items.map(item => {
      let icon, color, answer;
      if (item.answer === true) {
        icon = '✅';
        color = '#34C759';
        answer = 'Yes';
      } else if (item.answer === false) {
        icon = '❌';
        color = '#FF3B30';
        answer = 'No';
      } else {
        icon = '❓';
        color = '#FF9500';
        answer = 'Not Answered';
      }
      
      return `<tr>
        <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">
          <span style="color: ${color}; font-weight: bold; margin-right: 8px;">
            ${icon}
          </span>
          ${item.text}
          <span style="float: right; color: ${color}; font-weight: bold; font-size: 12px;">
            ${answer}
          </span>
        </td>
      </tr>`;
    }).join('');

    return `
      <div style="margin-bottom: 30px; background: white; border-radius: 8px; padding: 20px; border: 1px solid #f0f0f0;">
        <h3 style="margin: 0 0 5px 0; color: #222; display: flex; align-items: center; gap: 10px;">
          <span style="background: ${categoryColor}; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
            ${category.id}
          </span>
          ${category.title}
        </h3>
        <div style="margin-bottom: 15px;">
          <span style="background: ${categoryColor}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
            ${categoryStatus}
          </span>
          <span style="margin-left: 10px; color: #666; font-style: italic;">
            ${categoryAdvice}
          </span>
        </div>
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
          <h1 style="color: #222; margin: 0 0 20px 0; font-size: 28px;">Your Personalized GDPR Compliance Analysis</h1>
          <div style="background: ${compliance.color}; color: white; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: left;">
            <h2 style="margin: 0 0 15px 0; font-size: 20px;">Executive Summary</h2>
            <p style="margin: 0; font-size: 16px; line-height: 1.5;">${overallAnalysis}</p>
          </div>
        </div>

        <!-- Detailed Results -->
        <div style="margin-bottom: 40px;">
          <h2 style="color: #222; margin: 0 0 20px 0; font-size: 22px;">Detailed Breakdown</h2>
          ${categoriesHtml}
        </div>

        <!-- Priority Recommendations -->
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
          <h3 style="color: #222; margin: 0 0 15px 0;">Priority Action Items</h3>
          <ul style="margin: 0; padding-left: 20px;">
            ${priorityRecommendations.map(rec => `<li style="margin-bottom: 8px;">${rec}</li>`).join('')}
          </ul>
        </div>

        <!-- Consulting Offer -->
        <div style="background: linear-gradient(135deg, #34C759, #2a8a3a); color: white; padding: 25px; border-radius: 12px; margin-bottom: 30px; text-align: center;">
          <h3 style="margin: 0 0 15px 0; font-size: 22px;">Ready to Strengthen Your GDPR Compliance?</h3>
          <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">
            Our GDPR experts can help you address these compliance gaps with a personalized consultation session. 
            We'll create a tailored action plan and guide you through implementation.
          </p>
          <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 10px 0; font-size: 18px;">What's Included:</h4>
            <ul style="margin: 0; padding-left: 20px; text-align: left;">
              <li style="margin-bottom: 5px;">Detailed review of your current compliance status</li>
              <li style="margin-bottom: 5px;">Customized action plan with priorities and timelines</li>
              <li style="margin-bottom: 5px;">Templates and documentation to support implementation</li>
              <li style="margin-bottom: 5px;">Ongoing support during implementation phase</li>
            </ul>
          </div>
          <p style="margin: 0; font-size: 14px;">
            <strong>Book your consultation:</strong> Reply to this email or contact us at 
            <a href="mailto:j@hepta.no" style="color: white; text-decoration: underline;">j@hepta.no</a>
          </p>
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