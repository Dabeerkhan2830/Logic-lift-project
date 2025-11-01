'use client'

import { useEffect } from 'react'
import styles from './RoadmapOverlay.module.css'

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

interface RoadmapOverlayProps {
  language: string
  onClose: () => void
}

export default function RoadmapOverlay({ language, onClose }: RoadmapOverlayProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const roadmap = flowRoadmaps[language] || ['No roadmap available yet']

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✖
        </button>
        <h2>{language} Beginner Roadmap</h2>
        <div className={styles.flow}>
          {roadmap.map((step, index) => (
            <div key={index} className={styles.step}>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
