'use client'

import { useState, useRef, useEffect } from 'react'
import { getAIAnswer } from '@/lib/aiService'
import styles from './AIChatSection.module.css'

const presetQuestions = [
  'What is Python and why is it popular?',
  'What are variables and data types?',
  'Explain the concept of loops.',
  'What are functions and why do we use them?',
  'What is the difference between list and tuple?',
  'Explain Object Oriented Programming in simple terms.',
  'What is recursion?',
  'What is DSA and how do I start learning it?',
  'How to improve problem-solving skills in coding?',
  'What are time and space complexity?',
  'What is an algorithm?',
  'How can I start learning Artificial Intelligence?',
  'What is machine learning in simple words?',
  'Difference between supervised and unsupervised learning.',
  'What is an API and how does it work?',
]

interface Message {
  sender: 'user' | 'bot'
  text: string
}

export default function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatHistoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim()
    if (!messageText) return

    const userMessage: Message = { sender: 'user', text: messageText }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await getAIAnswer(messageText)
      const botMessage: Message = {
        sender: 'bot',
        text: response.response || response.error || 'Sorry, I could not generate a response. Please try again.',
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const botMessage: Message = {
        sender: 'bot',
        text: 'Sorry, I encountered an error. Please try again.',
      }
      setMessages((prev) => [...prev, botMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handlePresetClick = (question: string) => {
    sendMessage(question)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <section className={styles.section}>
      <h2 className="section-title">LogicLift AI Assistant</h2>
      <p className={styles.intro}>Chat with LogicLift AI — your personal coding mentor and guide.</p>

      <div className={styles.chatContainer}>
        <div ref={chatHistoryRef} className={styles.chatHistory}>
          {messages.length === 0 && (
            <div className={styles.welcomeMessage}>
              👋 Hi! I'm LogicLift AI. Ask me anything about programming!
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.bot}`}>
              <span className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </span>
              AI is thinking...
            </div>
          )}
        </div>
        <div className={styles.chatInputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your question here..."
            className={styles.input}
          />
          <button onClick={() => sendMessage()} className={styles.sendBtn}>
            Send
          </button>
        </div>
        <div className={styles.presetQuestions}>
          {presetQuestions.map((question, index) => (
            <button
              key={index}
              className={styles.presetBtn}
              onClick={() => handlePresetClick(question)}
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
