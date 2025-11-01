'use client'

import { useState } from 'react'
import { getAIAnswer } from '@/lib/aiService'
import styles from './QuestionAnswer.module.css'

interface QuestionAnswerProps {
  question: string
  questionNumber?: number
}

export default function QuestionAnswer({ question, questionNumber }: QuestionAnswerProps) {
  const [answer, setAnswer] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleGetAnswer = async () => {
    if (answer) {
      setShowAnswer(!showAnswer)
      return
    }

    setIsLoading(true)
    try {
      const response = await getAIAnswer(question)
      if (response.response) {
        setAnswer(response.response)
        setShowAnswer(true)
      } else if (response.error) {
        setAnswer(`Error: ${response.error}`)
        setShowAnswer(true)
      }
    } catch (error) {
      setAnswer('Failed to get answer. Please try again.')
      setShowAnswer(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.questionAnswer}>
      <button
        onClick={handleGetAnswer}
        disabled={isLoading}
        className={styles.answerBtn}
        title="Get AI-powered answer"
      >
        {isLoading ? (
          <>
            <span className={styles.spinner}></span>
            Asking AI...
          </>
        ) : showAnswer ? (
          <>
            <i className="fas fa-eye-slash"></i>
            {showAnswer ? 'Hide Answer' : 'Show AI Answer'}
          </>
        ) : (
          <>
            <i className="fas fa-robot"></i>
            Get AI Answer
          </>
        )}
      </button>
      {showAnswer && answer && (
        <div className={styles.answerContainer}>
          <div className={styles.answerHeader}>
            <i className="fas fa-lightbulb"></i>
            <strong>AI Explanation:</strong>
          </div>
          <div className={styles.answerText}>{answer}</div>
        </div>
      )}
    </div>
  )
}
