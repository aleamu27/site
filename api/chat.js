const Anthropic = require('@anthropic-ai/sdk').default;

const HEPTA_CONTEXT = `
# About Hepta

You are a helpful assistant for Hepta (hepta.no / heptatech.io), a software development company in Oslo, Norway.

## Key Facts
- Hepta focuses on bringing visual identity into software — design and engineering on the same team
- The brand system and production build ship together as one coherent thing
- Senior team only, no hand-off to junior staff
- Deliberately small client list, selected based on fit

## Products & Services
- **Calar OS**: First-party website analytics, attribution, lead scoring, sales signals
- **Development**: Websites, web apps, APIs, integrations, performance, accessibility, cloud deployment
- **Visual Identity**: Brand systems, typography, colour, art direction
- **Consulting**: Assessment, planning, improvement of digital presence

## Pricing
- Engagements typically start at USD 20,000 and scale with scope
- Production-grade output: custom architecture, performance, accessibility, integrations
- Oslo/Norway cost base

## Industries
- Fintech (strong focus)
- Product companies and scale-ups
- Organizations needing first-party analytics

## Why Hepta
- Software dev company that brings visual identity into software
- Most clients have to choose between branding agency and dev shop — Hepta does both
- Long-term reputation model, every project part of portfolio
- Calar OS provides ongoing intelligence after launch

## Contact
- Norway: j@hepta.no
- International: hello@heptatech.io
- Contact form: https://hepta.no/contact

## Brands
- hepta.no — Norwegian brand
- heptatech.io — English brand (same studio, same services)

Be helpful, concise, and professional. If someone asks about pricing, explain the USD 20k starting point and that it scales with scope. If they want to discuss a project, encourage them to reach out via the contact form or email. Answer in the same language the user writes in.
`;

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

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 500,
      system: HEPTA_CONTEXT,
      messages: messages.map(m => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.text || m.content,
      })),
    });

    const assistantMessage = response.content[0]?.text || 'Sorry, I could not generate a response.';

    res.json({ message: assistantMessage });
  } catch (error) {
    console.error('Chat API error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};
