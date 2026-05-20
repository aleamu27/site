const Anthropic = require('@anthropic-ai/sdk').default;
const knowledgeBase = require('./knowledge-base');

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
    const { messages } = req.body;

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

    res.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error.message);
    res.status(500).json({
      error: 'Failed to generate response',
      details: error.message,
    });
  }
};
