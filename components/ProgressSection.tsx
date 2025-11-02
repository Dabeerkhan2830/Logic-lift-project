'use client'

import { useEffect, useRef } from 'react'
import styles from './ProgressSection.module.css'

const progressStats = [
  { label: 'Course Completion', value: 85, suffix: '%' },
  { label: 'Day Streak', value: 14, suffix: '' },
  { label: 'Badges Earned', value: 23, suffix: '' },
  { label: 'Problems Solved', value: 156, suffix: '' },
]

export default function ProgressSection() {
  const circlesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = []
    
    circlesRef.current.forEach((circle, index) => {
      if (!circle) return
      const stat = progressStats[index]
      const value = stat.value
      let progress = 0
      const interval = setInterval(() => {
        if (progress >= value) {
          clearInterval(interval)
          return
        }
        progress++
        circle.style.setProperty('--progress', progress.toString())
        const valueSpan = circle.querySelector('.progress-value')
        if (valueSpan) {
          valueSpan.textContent = stat.suffix === '%' ? `${progress}%` : progress.toString()
        }
      }, 20)
      intervals.push(interval)
    })
    
    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])

  return (
    <section className={styles.progressSection}>
      <h2 className="section-title">Track Your Progress</h2>
      <p className={styles.description}>
        Stay motivated with real-time analytics that visualize your learning streaks, achievements,
        and overall growth.
      </p>

      <div className={styles.dashboard}>
        {progressStats.map((stat, index) => (
          <div key={index} className={styles.stat}>
            <div
              ref={(el) => {
                circlesRef.current[index] = el
              }}
              className={styles.circularProgress}
              data-progress={stat.value}
            >
              <span className="progress-value">
                {stat.suffix === '%' ? '0%' : '0'}
              </span>
            </div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
