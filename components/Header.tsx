'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      setIsAuthenticated(true)
      // Load user data if needed
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    setIsAuthenticated(false)
    setUser(null)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fas fa-code"></i>
        <span>LogicLift</span>
      </div>
      <div className={styles.userActions}>
        {isAuthenticated ? (
          <>
            <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleLogout}>
              Logout
            </button>
            {user && (
              <div className={styles.userMenu}>
                <span>{user.username}</span>
                <span>{user.level}</span>
              </div>
            )}
          </>
        ) : (
          <div className={styles.userMenu} style={{ display: 'none' }}>
            {/* Login/Register buttons can be added here */}
          </div>
        )}
      </div>
    </header>
  )
}
