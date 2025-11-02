'use client'

import styles from './Modal.module.css'
import { communityMembers } from '@/lib/communityLinks'

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
          <h3 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#9333EA' }}>
            Connect with Our Team Members
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {communityMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
                style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
              >
                <i className="fab fa-linkedin" style={{ marginRight: '0.5rem' }}></i>
                Connect with {member.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
