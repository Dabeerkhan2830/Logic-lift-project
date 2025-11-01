'use client'

import { useState } from 'react'
import styles from './Modal.module.css'

interface AIGuidanceModalProps {
  onClose: () => void
}

export default function AIGuidanceModal({ onClose }: AIGuidanceModalProps) {
  const [question, setQuestion] = useState('')
  const [response, setResponse] = useState('')

  const handleAsk = () => {
    if (!question.trim()) {
      setResponse('Please enter a question!')
      return
    }
    setResponse(`AI says: To solve "${question}", focus on logic breakdown and syntax validation.`)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>AI-Powered Guidance</h2>
        <p>Ask AI for instant hints, debugging tips, and explanations tailored to your coding level.</p>
        <div className={styles.aiActions}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask AI something..."
            className={styles.input}
          />
          <button onClick={handleAsk} className={styles.btn}>
            Ask
          </button>
          {response && <div className={styles.response}>{response}</div>}
        </div>
      </div>
    </div>
  )
}
