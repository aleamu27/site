const Anthropic = require('@anthropic-ai/sdk').default;
const knowledgeBase = require('./knowledge-base');

const SYSTEM_PROMPT = `Du er en salgsassistent for Hepta, et softwareutviklingsselskap i Oslo.

DITT HOVEDMAL:
1. Svar kort og hjelpsomt pa sporsmal
2. Fa tak i kundens e-post og hva de trenger
3. Ikke hold pa for lenge - vær effektiv

VIKTIGE REGLER:
- Svar KUN basert pa informasjonen i KUNNSKAPSBASEN under
- Hvis noe IKKE er i kunnskapsbasen, svar: "Det kan jeg dessverre ikke hjelpe deg med, men om du legger igjen e-posten din kan jeg fa noen til a komme tilbake til deg."
- ALDRI bruk emojis
- Hold svarene korte (2-4 setninger maks)
- Svar pa samme sprak som brukeren
- Etter 2-3 utvekslinger, spor om e-post: "Kan jeg fa e-posten din sa vi kan folge opp?"
- Bruk enkel formatering: kun linjeskift og bindestrek (-) for lister

KUNNSKAPSBASE:
${JSON.stringify(knowledgeBase, null, 2)}

EKSEMPEL PA GOD DIALOG:
Bruker: "Hva koster en nettside?"
Du: "Det varierer basert pa omfang og kompleksitet. Hva slags nettside ser du for deg?"

Bruker: "En markedsforingsside for bedriften min"
Du: "Det hores ut som noe vi kan hjelpe med. Kan jeg fa e-posten din sa en fra teamet kan ta kontakt for a diskutere prosjektet narmere?"`;

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
