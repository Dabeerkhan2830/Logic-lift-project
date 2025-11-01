'use client'

import styles from './Modal.module.css'

interface CommunitySupportModalProps {
  onClose: () => void
}

export default function CommunitySupportModal({ onClose }: CommunitySupportModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Community Support</h2>
        <p>Collaborate, discuss problems, and share knowledge with fellow learners to grow together.</p>
        <div className={styles.communityContent}>
          <p>Join our community forums, participate in discussions, and get help from experienced developers!</p>
          <button className={styles.btn}>Join Community</button>
        </div>
      </div>
    </div>
  )
}
