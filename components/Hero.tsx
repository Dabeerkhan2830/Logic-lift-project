'use client'

import { useRef, useEffect } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleStartJourney = () => {
    const learningSection = document.querySelector('.section-title')
    if (learningSection) {
      learningSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    const handleRipple = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const ripple = document.createElement('span')
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        pointer-events: none;
        background: rgba(255,255,255,0.25);
        transform: scale(0);
        opacity: 1;
        animation: rippleExpand 0.6s ease-out;
      `

      button.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove())
    }

    button.addEventListener('click', handleRipple)
    return () => button.removeEventListener('click', handleRipple)
  }, [])

  return (
    <section className={styles.hero}>
      <h1>Welcome to LogicLift</h1>
      <p>
        An interactive platform designed to help beginners build strong logic and programming
        foundations, develop problem-solving skills, and track their progress with gamified learning.
      </p>
      <button
        ref={buttonRef}
        id="startJourneyBtn"
        className={`${styles.btn} ${styles.btnPrimary}`}
        onClick={handleStartJourney}
      >
        Start Your Journey
      </button>
    </section>
  )
}
