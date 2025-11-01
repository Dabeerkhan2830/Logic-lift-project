import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>LogicLift</h3>
          <p>Empowering beginners to become confident problem solvers through structured logic and programming practice.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/v_s_g123/" target="_blank" rel="noopener noreferrer">
              Shiva
            </a>
            <a href="https://www.instagram.com/khanzz__dabeer_razvi/" target="_blank" rel="noopener noreferrer">
              Dabeer
            </a>
            <a href="https://www.instagram.com/karan_rk03/" target="_blank" rel="noopener noreferrer">
              Karan
            </a>
          </div>
        </div>
        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Practice</a></li>
            <li><a href="#">Challenges</a></li>
            <li><a href="#">Leaderboard</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Data Processing</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2023 LogicLift. All rights reserved.
      </div>
    </footer>
  )
}
