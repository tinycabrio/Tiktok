import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const reply = completion.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate response' },
      { status: 500 }
    );
  }
}
