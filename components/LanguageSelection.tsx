'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './LanguageSelection.module.css'

interface LanguageSelectionProps {
  languages: string[]
  selectedLanguage: string | null
  onLanguageClick: (lang: string) => void
  onRoadmapClick: (lang: string) => void
  concepts: Record<string, string[]>
}

const flowRoadmaps: Record<string, string[]> = {
  Python: [
    'Learn syntax, variables, and data types',
    'Master loops, conditionals, and functions',
    'Learn data structures: lists, sets, dictionaries',
    'Understand OOP concepts (class, object, inheritance)',
    'Explore libraries: NumPy, Pandas, Matplotlib',
    'Build small projects: calculator, quiz, file automation',
    'Start DSA with Python',
    'Learn frameworks: Flask, Django',
  ],
  'C++': [
    'Setup compiler and IDE',
    'Understand syntax, loops, arrays, and pointers',
    'Learn OOP: classes, constructors, inheritance',
    'Study memory management and dynamic allocation',
    'Explore STL: vectors, sets, maps',
    'Practice problems on arrays, linked lists, stacks',
    'Build small projects and mini-games',
  ],
  Java: [
    'Understand Java syntax and data types',
    'Dive into OOP: classes, interfaces, inheritance',
    'Learn exception handling and I/O',
    'Explore Collections and Generics',
    'Understand multithreading',
    'Practice DSA in Java',
    'Learn frameworks: Spring Boot, Android basics',
  ],
  JavaScript: [
    'Learn syntax, variables, loops, and functions',
    'Understand DOM manipulation',
    'Master ES6+ features (arrow functions, modules)',
    'Learn async JS: promises, async/await',
    'Explore frameworks: React or Vue',
    'Build mini projects: to-do, weather app, etc.',
    'Learn Node.js and Express for backend',
  ],
  'C#': [
    'Learn C# syntax and basics',
    'Understand OOP principles',
    'Explore .NET framework',
    'Learn LINQ and async/await',
    'Practice problem-solving',
    'Build desktop and web applications',
  ],
  Go: [
    'Learn Go syntax and basics',
    'Understand goroutines and channels',
    'Learn package management',
    'Explore web development with Go',
    'Practice concurrency patterns',
    'Build CLI and web applications',
  ],
}

export default function LanguageSelection({
  languages,
  selectedLanguage,
  onLanguageClick,
  onRoadmapClick,
  concepts,
}: LanguageSelectionProps) {
  const [showConcepts, setShowConcepts] = useState(false)
  const [hoveredLanguage, setHoveredLanguage] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleLanguageSelect = (lang: string) => {
    onLanguageClick(lang)
    setShowConcepts(true)
  }

  const handleMouseEnter = (lang: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    // Set roadmap to show after a short delay
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLanguage(lang)
    }, 300) // 300ms delay
  }

  const handleMouseLeave = () => {
    // Clear timeout if mouse leaves before delay
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredLanguage(null)
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.languageSelection}>
      {languages.map((lang) => (
        <div
          key={lang}
          className={styles.languageGroup}
          onMouseEnter={() => handleMouseEnter(lang)}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={`${styles.languageBtn} ${
              selectedLanguage === lang ? styles.active : ''
            }`}
            onClick={() => handleLanguageSelect(lang)}
          >
            {lang}
          </button>
          <button
            className={`btn btn-secondary ${styles.roadmapBtn}`}
            data-lang={lang}
            onClick={() => onRoadmapClick(lang)}
          >
            {lang} Beginner Roadmap
          </button>
          {hoveredLanguage === lang && (
            <div
              className={styles.roadmapPreview}
              onMouseEnter={() => handleMouseEnter(lang)}
              onMouseLeave={handleMouseLeave}
            >
              <h4>{lang} Beginner Roadmap</h4>
              <div className={styles.roadmapSteps}>
                {flowRoadmaps[lang]?.slice(0, 5).map((step, index) => (
                  <div key={index} className={styles.roadmapStep}>
                    <span className={styles.stepNumber}>{index + 1}</span>
                    <span className={styles.stepText}>{step}</span>
                  </div>
                ))}
                {flowRoadmaps[lang] && flowRoadmaps[lang].length > 5 && (
                  <div className={styles.moreSteps}>
                    +{flowRoadmaps[lang].length - 5} more steps
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {selectedLanguage && concepts[selectedLanguage] && showConcepts && (
        <div className={styles.languageConcepts}>
          <h3>Language Concepts</h3>
          <ul>
            {concepts[selectedLanguage].map((concept, index) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
