'use client'

import styles from './FloatingElements.module.css'

export default function FloatingElements() {
  return (
    <div className={styles.floatingElements}>
      {/* Nebula clouds */}
      <div
        className={styles.nebula}
        style={{
          width: '200px',
          height: '200px',
          top: '10%',
          left: '5%',
          animationDuration: '25s',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.3), transparent 70%)',
        }}
      />
      <div
        className={styles.nebula}
        style={{
          width: '250px',
          height: '250px',
          top: '60%',
          left: '80%',
          animationDuration: '30s',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.25), transparent 70%)',
        }}
      />
      <div
        className={styles.nebula}
        style={{
          width: '180px',
          height: '180px',
          top: '80%',
          left: '10%',
          animationDuration: '22s',
          background: 'radial-gradient(circle, rgba(255, 20, 147, 0.2), transparent 70%)',
        }}
      />
      <div
        className={styles.nebula}
        style={{
          width: '220px',
          height: '220px',
          top: '30%',
          left: '70%',
          animationDuration: '28s',
          background: 'radial-gradient(circle, rgba(142, 84, 233, 0.3), transparent 70%)',
        }}
      />
      
      {/* Floating orbs/planets */}
      <div
        className={styles.planet}
        style={{
          width: '60px',
          height: '60px',
          top: '20%',
          left: '15%',
          animationDuration: '20s',
        }}
      />
      <div
        className={styles.planet}
        style={{
          width: '80px',
          height: '80px',
          top: '70%',
          left: '85%',
          animationDuration: '24s',
        }}
      />
    </div>
  )
}
