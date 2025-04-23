import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { query } = await req.json();

  const systemPrompt = `
You are an expert AI assistant that recommends the best agent tools from a known list based on a user query.

Return only a JSON array like this:
[
  { "name": "AgentName", "description": "What it does", "why": "Why it's a match" }
]

Agent tools:
- Trendai: Trend analysis for data workflows.
- Ticketai: Ticket tagging for support workflows.
- Storyai: Story brainstorming for writing workflows.
`;

  const chat = await openai.chat.completions.create({
    model: 'gpt-4',
    temperature: 0.3,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: query },
    ],
  });

  const raw = chat.choices?.[0]?.message?.content ?? '';

  let parsed = [];
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    console.error('❌ Failed to parse AI response as JSON:', raw);
  }

  return NextResponse.json({ content: parsed });
}
