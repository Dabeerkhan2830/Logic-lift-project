'use client'

import styles from './Modal.module.css'
import { intermediateProblems } from '@/lib/practiceProblems'

interface IntermediateProblemsModalProps {
  onClose: () => void
}

export default function IntermediateProblemsModal({ onClose }: IntermediateProblemsModalProps) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '800px' }}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>Intermediate Problems</h2>
        <p>Level up your skills with these intermediate-level challenges.</p>
        
        <div style={{ maxHeight: '60vh', overflowY: 'auto', marginTop: '1.5rem' }}>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {intermediateProblems.map((problem) => (
              <div
                key={problem.id}
                style={{
                  background: 'rgba(168, 85, 247, 0.1)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  padding: '1.2rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.2)'
                  e.currentTarget.style.transform = 'translateX(5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #A855F7 0%, #C471ED 100%)',
                      color: 'white',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}
                  >
                    {problem.id}
                  </span>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', color: '#FFFFFF', fontSize: '1.1rem' }}>
                      {problem.title}
                    </h3>
                    <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                      💡 <strong>Hint:</strong> {problem.hint}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

