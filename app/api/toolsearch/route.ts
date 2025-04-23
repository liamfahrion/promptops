import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { agents } from '@/app/searchagents/full_mock_agents';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { query } = await req.json();

  const agentDescriptions = agents
    .map((a) => `- ${a.name}: ${a.description}`)
    .join('\n');

  const systemPrompt = `
You are an expert assistant helping users find the best AI agent tools from a known list. Based on the user's natural language request, return a JSON array (wrapped in triple backticks) with the best matches and a short explanation why.

The output must look like:
\`\`\`
[
  {
    "name": "AgentName",
    "description": "What it does",
    "why": "Why it's a match"
  }
]
\`\`\`

Only use agents from the list below:
${agentDescriptions}
`;

  const chat = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: query },
    ],
  });

  const raw = chat.choices?.[0]?.message?.content ?? '';
  let parsed = [];

  try {
    const match = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    const json = match ? match[1] : raw;
    parsed = JSON.parse(json);
  } catch (err) {
    console.error('❌ Failed to parse AI response:', raw);
  }

  return NextResponse.json({ content: parsed });
}
