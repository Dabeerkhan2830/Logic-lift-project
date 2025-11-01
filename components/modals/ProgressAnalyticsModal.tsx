'use client'

import { useEffect, useRef } from 'react'
import styles from './Modal.module.css'

interface ProgressAnalyticsModalProps {
  onClose: () => void
}

export default function ProgressAnalyticsModal({ onClose }: ProgressAnalyticsModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Simple bar chart
    ctx.fillStyle = '#00e6ff'
    ctx.fillRect(50, 150, 50, -100)
    ctx.fillRect(150, 150, 50, -80)
    ctx.fillRect(250, 150, 50, -120)
    ctx.fillRect(350, 150, 50, -60)
  }, [])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Progress Analytics</h2>
        <p>Analyze your performance metrics with detailed visualizations.</p>
        <canvas ref={canvasRef} width={400} height={200} className={styles.chart} />
      </div>
    </div>
  )
}
