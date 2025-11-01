'use client'

import { useState } from 'react'
import styles from './Modal.module.css'

interface GamifiedLearningModalProps {
  onClose: () => void
}

export default function GamifiedLearningModal({ onClose }: GamifiedLearningModalProps) {
  const [xp, setXp] = useState(1200)
  const [badges, setBadges] = useState(8)
  const [streak, setStreak] = useState(5)

  const handleGainXP = () => {
    setXp((prev) => prev + 50)
    alert(`+50 XP Earned! Total XP: ${xp + 50}`)
  }

  const handleUnlockBadge = () => {
    setBadges((prev) => prev + 1)
    alert(`🎖️ New Badge Unlocked! Total Badges: ${badges + 1}`)
  }

  const handleIncreaseStreak = () => {
    setStreak((prev) => prev + 1)
    alert(`🔥 Streak Continued! ${streak + 1} Days Strong!`)
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Gamified Learning Dashboard</h2>
        <p>Earn XP, maintain streaks, and collect badges as you learn!</p>
        <div className={styles.gamifiedStats}>
          <div className={styles.statCard}>
            <h3>XP Earned</h3>
            <p>{xp}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Badges Unlocked</h3>
            <p>{badges}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Daily Streak</h3>
            <p>{streak} Days</p>
          </div>
        </div>
        <div className={styles.gamifiedActions}>
          <button onClick={handleGainXP} className={styles.btn}>
            Gain XP
          </button>
          <button onClick={handleUnlockBadge} className={styles.btn}>
            Unlock Badge
          </button>
          <button onClick={handleIncreaseStreak} className={styles.btn}>
            Continue Streak
          </button>
        </div>
      </div>
    </div>
  )
}
