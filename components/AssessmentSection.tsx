'use client'

import { useState } from 'react'
import styles from './AssessmentSection.module.css'
import LanguageSelection from './LanguageSelection'
import RoadmapOverlay from './RoadmapOverlay'
import QuestionAnswer from './QuestionAnswer'

const languages = ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'Go']

const languageConcepts: Record<string, string[]> = {
  Python: [
    'Variables and Data Types',
    'Indentation and Syntax',
    'Functions and Modules',
    'Lists, Tuples, and Dictionaries',
    'File Handling and Exceptions',
  ],
  JavaScript: [
    'Variables and Scope (var, let, const)',
    'Functions and Arrow Functions',
    'DOM Manipulation',
    'Promises and Async/Await',
    'Objects and JSON',
  ],
  Java: [
    'Classes and Objects',
    'Inheritance and Polymorphism',
    'Interfaces and Abstract Classes',
    'Collections Framework',
    'Exception Handling',
  ],
  'C++': [
    'Input/Output and Data Types',
    'Functions and Overloading',
    'Classes and Inheritance',
    'Pointers and References',
    'STL (Standard Template Library)',
  ],
  'C#': [
    'Variables and Data Types',
    'OOP Concepts (Encapsulation, Inheritance, Polymorphism)',
    'LINQ (Language Integrated Query)',
    'Delegates and Events',
    'Exception Handling',
  ],
  Go: [
    'Basic Syntax and Packages',
    'Functions and Error Handling',
    'Structs and Interfaces',
    'Concurrency with Goroutines',
    'Channels and Go Routines',
  ],
}

export default function AssessmentSection() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const [showRoadmap, setShowRoadmap] = useState(false)
  const [roadmapLanguage, setRoadmapLanguage] = useState<string>('')

  const handleLevelSelection = (level: string) => {
    setSelectedLevel(level)
    // Update color palette based on level
    const root = document.documentElement
    if (level.toLowerCase().includes('beginner')) {
      root.style.setProperty('--primary-calm', '#4a90e2')
      root.style.setProperty('--primary-creativity', '#1452a0')
      root.style.setProperty('--primary-growth', '#43e97b')
    } else if (level.toLowerCase().includes('intermediate')) {
      root.style.setProperty('--primary-calm', '#8e54e9')
      root.style.setProperty('--primary-creativity', '#b721ff')
      root.style.setProperty('--primary-growth', '#43e97b')
    } else {
      root.style.setProperty('--primary-calm', '#43e97b')
      root.style.setProperty('--primary-creativity', '#38f9d7')
      root.style.setProperty('--primary-growth', '#4a90e2')
    }
  }

  const handleLanguageClick = (lang: string) => {
    setSelectedLanguage(lang)
  }

  const handleRoadmapClick = (lang: string) => {
    setRoadmapLanguage(lang)
    setShowRoadmap(true)
  }

  return (
    <>
      <section className={styles.assessmentSection} id="learn-section">
        <h2 className="section-title">Assess Your Current Level</h2>
        <p className={styles.subtitle}>
          Tell us about your experience so we can personalize your learning path
        </p>

        <div className={styles.assessmentOptions}>
          {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
            <div
              key={level}
              className={`${styles.levelOption} ${
                selectedLevel === level ? styles.selected : ''
              }`}
              onClick={() => handleLevelSelection(level)}
            >
              <h4>{level}</h4>
              <p>
                {level === 'Beginner' && 'Just starting with programming'}
                {level === 'Intermediate' && 'Know basics but want to improve'}
                {level === 'Advanced' && 'Comfortable with programming concepts'}
              </p>
            </div>
          ))}
        </div>

        {selectedLevel === 'Beginner' && (
          <div className={styles.levelQuestions}>
            <h3>Beginner Questions</h3>
            <ol>
              <li>
                What is a variable in programming?
                <QuestionAnswer question="What is a variable in programming? Explain with examples." questionNumber={1} />
              </li>
              <li>
                Which of the following is a looping statement?
                <br />
                <em>a) if b) for c) break d) return</em>
                <QuestionAnswer question="Which of the following is a looping statement? Explain the difference between loops and conditional statements." questionNumber={2} />
              </li>
              <li>
                What is the correct syntax to print in Python?
                <br />
                <em>a) echo('Hello') b) print('Hello') c) printf('Hello')</em>
                <QuestionAnswer question="What is the correct syntax to print in Python? Show examples of print statements." questionNumber={3} />
              </li>
              <li>
                Which data type is used to store True or False values?
                <QuestionAnswer question="Which data type is used to store True or False values in programming? Explain boolean data type." questionNumber={4} />
              </li>
              <li>
                What does IDE stand for in programming?
                <QuestionAnswer question="What does IDE stand for in programming? Explain what an IDE is and its benefits." questionNumber={5} />
              </li>
            </ol>
          </div>
        )}

        {selectedLevel === 'Intermediate' && (
          <div className={styles.levelQuestions}>
            <h3>Intermediate Questions</h3>
            <ol>
              <li>
                What is the time complexity of binary search?
                <br />
                <em>a) O(n) b) O(log n) c) O(n²) d) O(1)</em>
                <QuestionAnswer question="What is the time complexity of binary search? Explain why and provide examples." questionNumber={1} />
              </li>
              <li>
                What is the difference between a stack and a queue?
                <br />
                <em>a) Stack is LIFO, Queue is FIFO b) Stack is FIFO, Queue is LIFO c) Both are the same d) Neither uses order</em>
                <QuestionAnswer question="What is the difference between a stack and a queue? Explain LIFO and FIFO with examples." questionNumber={2} />
              </li>
              <li>
                What does a hash map provide for average-case operations?
                <br />
                <em>a) O(n) b) O(log n) c) O(1) d) O(n log n)</em>
                <QuestionAnswer question="What does a hash map provide for average-case operations? Explain hash map data structure and time complexity." questionNumber={3} />
              </li>
              <li>
                Which algorithm is used to find the shortest path in a weighted graph?
                <br />
                <em>a) DFS b) BFS c) Dijkstra's Algorithm d) Binary Search</em>
                <QuestionAnswer question="Which algorithm is used to find the shortest path in a weighted graph? Explain Dijkstra's algorithm." questionNumber={4} />
              </li>
              <li>
                What is the space complexity of merge sort?
                <br />
                <em>a) O(1) b) O(n) c) O(log n) d) O(n²)</em>
                <QuestionAnswer question="What is the space complexity of merge sort? Explain merge sort algorithm and its space requirements." questionNumber={5} />
              </li>
              <li>
                What is recursion and when should you use it?
                <QuestionAnswer question="What is recursion and when should you use it? Provide examples and explain base cases." questionNumber={6} />
              </li>
              <li>
                Explain the difference between pass-by-value and pass-by-reference.
                <QuestionAnswer question="Explain the difference between pass-by-value and pass-by-reference in programming. Provide examples." questionNumber={7} />
              </li>
              <li>
                What is the purpose of a binary tree and what are its key operations?
                <QuestionAnswer question="What is the purpose of a binary tree and what are its key operations? Explain tree traversal methods." questionNumber={8} />
              </li>
            </ol>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button className={`btn ${styles.navBtn}`} type="button">
            Notes
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Practice Questions
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Revision
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Intermediate
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Advanced
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Progress
          </button>
        </div>

        <h3 className={styles.languageTitle}>Choose Your Language</h3>
        <LanguageSelection
          languages={languages}
          selectedLanguage={selectedLanguage}
          onLanguageClick={handleLanguageClick}
          onRoadmapClick={handleRoadmapClick}
          concepts={languageConcepts}
        />
      </section>

      {showRoadmap && (
        <RoadmapOverlay
          language={roadmapLanguage}
          onClose={() => setShowRoadmap(false)}
        />
      )}
    </>
  )
}
