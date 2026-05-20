const Anthropic = require('@anthropic-ai/sdk').default;
const { Resend } = require('resend');
const knowledgeBase = require('./knowledge-base');

// Email detection regex
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

// Get Resend client based on domain
const getResendClient = (isHeptatech) => {
  const apiKey = isHeptatech
    ? process.env.RESEND_API_KEY_HEPTATECH
    : process.env.RESEND_API_KEY_HEPTA;
  return apiKey ? new Resend(apiKey) : null;
};

// Extract emails from messages
const extractEmails = (messages) => {
  const emails = new Set();
  messages.forEach(m => {
    const content = m.text || m.content || '';
    const found = content.match(EMAIL_REGEX);
    if (found) {
      found.forEach(email => emails.add(email.toLowerCase()));
    }
  });
  return Array.from(emails);
};

// Build conversation summary for lead notification
const buildConversationSummary = (messages) => {
  return messages
    .map(m => {
      const role = m.role === 'assistant' ? 'Hepta' : 'Kunde';
      const content = m.text || m.content || '';
      return `${role}: ${content}`;
    })
    .join('\n\n');
};

const SYSTEM_PROMPT = `You are a sales assistant for Hepta, a software development company in Oslo.

YOUR MAIN GOAL:
1. Answer questions briefly and helpfully
2. Get the customer's email and understand what they need
3. Don't drag on - be efficient

IMPORTANT RULES:
- Answer ONLY based on information in the KNOWLEDGE BASE below
- If something is NOT in the knowledge base, respond:
  - Norwegian: "Det kan jeg dessverre ikke hjelpe deg med, men om du legger igjen e-posten din kan jeg fa noen til a komme tilbake til deg."
  - English: "I can't help with that specifically, but if you leave your email I can have someone get back to you."
- NEVER use emojis
- Keep answers short (2-4 sentences max)
- Match the user's language: Norwegian users get Norwegian answers, English users get English answers
- The knowledge base has both "no" (Norwegian) and "en" (English) versions - use the appropriate one
- After 2-3 exchanges, ask for email:
  - Norwegian: "Kan jeg fa e-posten din sa vi kan folge opp?"
  - English: "Can I get your email so we can follow up?"
- When the user provides an email, confirm it and let them know the team will be in touch:
  - Norwegian: "Takk! Teamet vart tar kontakt pa [email]. Hva slags prosjekt har du i tankene?"
  - English: "Thanks! Our team will reach out to [email]. What kind of project do you have in mind?"
- Use simple formatting: only line breaks and hyphens (-) for lists

KNOWLEDGE BASE:
${JSON.stringify(knowledgeBase, null, 2)}

EXAMPLE GOOD DIALOG (Norwegian):
User: "Hva koster en nettside?"
You: "Det varierer basert pa omfang og kompleksitet. Hva slags nettside ser du for deg?"

User: "En markedsforingsside for bedriften min"
You: "Det hores ut som noe vi kan hjelpe med. Kan jeg fa e-posten din sa en fra teamet kan ta kontakt for a diskutere prosjektet narmere?"

EXAMPLE GOOD DIALOG (English):
User: "How much does a website cost?"
You: "It varies based on scope and complexity. What kind of website are you looking for?"

User: "A marketing site for my company"
You: "That sounds like something we can help with. Can I get your email so someone from the team can reach out to discuss your project?"`;

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { messages, sourceDomain, leadCaptured } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array required' });
    }

    const anthropic = new Anthropic({ apiKey });

    // Filter out the initial assistant greeting and ensure first message is from user
    const apiMessages = messages
      .filter((m, i) => !(i === 0 && m.role === 'assistant'))
      .map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text || m.content || '',
      }))
      .filter(m => m.content);

    if (apiMessages.length === 0) {
      return res.status(400).json({ error: 'No valid messages to process' });
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: apiMessages,
    });

    const assistantMessage = response.content[0]?.text || 'Beklager, noe gikk galt. Prov igjen.';

    // Check for emails in user messages (only if not already captured)
    let newLeadCaptured = false;
    if (!leadCaptured) {
      const userMessages = messages.filter(m => m.role === 'user' || m.role !== 'assistant');
      const emails = extractEmails(userMessages);

      if (emails.length > 0) {
        // Found email(s) - send lead notification
        const customerEmail = emails[0]; // Use first email found
        const isHeptatech = sourceDomain === 'heptatech.io';
        const targetEmail = isHeptatech ? 'hello@heptatech.io' : 'j@hepta.no';
        const brandName = isHeptatech ? 'Heptatech' : 'Hepta';

        const resend = getResendClient(isHeptatech);

        if (resend) {
          const conversationSummary = buildConversationSummary(messages);

          // Send lead notification to team
          try {
            await resend.emails.send({
              from: `${brandName} Chat <${targetEmail}>`,
              to: [targetEmail],
              subject: `New chat lead: ${customerEmail}`,
              html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                  <h2 style="color: #184B54;">New Lead from Chat Widget</h2>

                  <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Contact</h3>
                    <p><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
                  </div>

                  <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Conversation</h3>
                    <pre style="white-space: pre-wrap; font-family: inherit; line-height: 1.6; margin: 0;">${conversationSummary}</pre>
                  </div>

                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
                    <p>This lead was captured via the chat widget on ${sourceDomain || 'hepta.no'}.</p>
                  </div>
                </div>
              `,
            });

            // Send personal alert to Alex
            await resend.emails.send({
              from: `${brandName} Alert <${targetEmail}>`,
              to: ['alexbolgenamundsen@gmail.com'],
              subject: `Chat lead: ${customerEmail}`,
              html: `
                <div style="font-family: Arial, sans-serif; padding: 20px;">
                  <h2 style="color: #184B54;">New chat lead</h2>
                  <p><strong>Email:</strong> ${customerEmail}</p>
                  <p><strong>Source:</strong> Chat widget on ${sourceDomain || 'hepta.no'}</p>
                  <p style="margin-top: 16px;"><strong>Last messages:</strong></p>
                  <p style="background: #f5f5f5; padding: 12px; border-radius: 4px;">${messages.slice(-3).map(m => `${m.role}: ${(m.text || m.content || '').substring(0, 100)}`).join('<br>')}</p>
                </div>
              `,
            });

            newLeadCaptured = true;
            console.log('Lead captured and sent:', customerEmail);
          } catch (emailError) {
            console.error('Failed to send lead email:', emailError.message);
          }
        }
      }
    }

    res.json({
      message: assistantMessage,
      leadCaptured: leadCaptured || newLeadCaptured
    });
  } catch (error) {
    console.error('Chat API error:', error.message);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message,
    });
  }
};
