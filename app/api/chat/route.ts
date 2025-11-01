import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      // Fallback to a helpful response if API key is not set
      return NextResponse.json({
        response: `I'd love to help you with "${message}"! To enable full AI responses, please set up your OPENAI_API_KEY in the environment variables. For now, here's a helpful tip: This question relates to programming concepts. Would you like me to provide a detailed explanation once the API is configured?`,
      })
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are LogicLift AI, a friendly and helpful programming mentor. Explain programming concepts clearly, provide examples, and help students learn. Be concise but thorough, and use simple language when appropriate.',
          },
          {
            role: 'user',
            content: message,
          },
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || 'Failed to get AI response')
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.'

    return NextResponse.json({ response: aiResponse })
  } catch (error: any) {
    console.error('AI API Error:', error)
    return NextResponse.json(
      {
        error: error.message || 'Failed to get AI response',
        response: 'I apologize, but I encountered an error. Please try again or check your API configuration.',
      },
      { status: 500 }
    )
  }
}
