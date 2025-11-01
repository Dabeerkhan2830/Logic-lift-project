export interface AIResponse {
  response?: string
  error?: string
}

export async function getAIAnswer(question: string): Promise<AIResponse> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: question }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Failed to get AI response')
    }

    const data = await response.json()
    return { response: data.response }
  } catch (error: any) {
    console.error('Error calling AI service:', error)
    return {
      error: error.message || 'Failed to get AI response. Please try again.',
    }
  }
}
