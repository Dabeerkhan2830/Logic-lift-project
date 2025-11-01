'use client'

import { useState } from 'react'
import styles from './Modal.module.css'

interface DynamicRoadmapsModalProps {
  onClose: () => void
}

export default function DynamicRoadmapsModal({ onClose }: DynamicRoadmapsModalProps) {
  const [roadmap, setRoadmap] = useState('')

  const handleGenerate = () => {
    setRoadmap('🚀 Your roadmap: Basics → Functions → OOP → DSA → Mini Project → Advanced Concepts!')
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Dynamic Roadmaps</h2>
        <p>Your personalized roadmap updates based on your performance and completed modules.</p>
        <button onClick={handleGenerate} className={styles.btn}>
          Generate Roadmap
        </button>
        {roadmap && <div className={styles.roadmapDisplay}>{roadmap}</div>}
      </div>
    </div>
  )
}
