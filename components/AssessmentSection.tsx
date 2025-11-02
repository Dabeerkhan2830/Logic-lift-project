'use client'

import { useState } from 'react'
import styles from './AssessmentSection.module.css'
import LanguageSelection from './LanguageSelection'
import RoadmapOverlay from './RoadmapOverlay'
import QuestionAnswer from './QuestionAnswer'
import PracticeProblemsModal from './modals/PracticeProblemsModal'
import IntermediateProblemsModal from './modals/IntermediateProblemsModal'
import AdvancedProblemsModal from './modals/AdvancedProblemsModal'
import NotesModal from './modals/NotesModal'

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
  const [showPracticeModal, setShowPracticeModal] = useState(false)
  const [showIntermediateModal, setShowIntermediateModal] = useState(false)
  const [showAdvancedModal, setShowAdvancedModal] = useState(false)
  const [showNotesModal, setShowNotesModal] = useState(false)

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

        {selectedLevel === 'Advanced' && (
          <div className={styles.levelQuestions}>
            <h3>Advanced Questions</h3>
            <ol>
              <li>
                What is the time complexity of Kadane's Algorithm for finding maximum subarray sum?
                <br />
                <em>a) O(n²) b) O(n log n) c) O(n) d) O(1)</em>
                <QuestionAnswer question="What is the time complexity of Kadane's Algorithm for finding maximum subarray sum? Explain how the algorithm works." questionNumber={1} />
              </li>
              <li>
                Which algorithm is most efficient for finding the majority element in an array?
                <br />
                <em>a) Sorting approach b) Boyer-Moore Voting Algorithm c) Hash map d) Brute force</em>
                <QuestionAnswer question="Which algorithm is most efficient for finding the majority element in an array? Explain the Boyer-Moore Voting Algorithm." questionNumber={2} />
              </li>
              <li>
                What is the optimal approach to find the longest substring without repeating characters?
                <br />
                <em>a) Brute force O(n³) b) Sliding window with hash map O(n) c) Two nested loops O(n²) d) Recursive approach</em>
                <QuestionAnswer question="What is the optimal approach to find the longest substring without repeating characters? Explain the sliding window technique." questionNumber={3} />
              </li>
              <li>
                What data structure is essential for checking valid parentheses sequences?
                <br />
                <em>a) Queue b) Stack c) Array d) Hash map</em>
                <QuestionAnswer question="What data structure is essential for checking valid parentheses sequences? Explain how to use it for this problem." questionNumber={4} />
              </li>
              <li>
                What is the best time complexity for matrix multiplication of two n×n matrices?
                <br />
                <em>a) O(n²) b) O(n³) c) O(n log n) d) O(n⁴)</em>
                <QuestionAnswer question="What is the best time complexity for matrix multiplication of two n×n matrices? Explain the standard algorithm and any optimization techniques." questionNumber={5} />
              </li>
              <li>
                How would you efficiently rotate an array by K positions?
                <QuestionAnswer question="How would you efficiently rotate an array by K positions? Explain different approaches and their time/space complexities." questionNumber={6} />
              </li>
              <li>
                Explain the two-pointer technique and when to use it.
                <QuestionAnswer question="Explain the two-pointer technique and when to use it. Provide examples of problems that benefit from this approach." questionNumber={7} />
              </li>
              <li>
                What are the different approaches to generate all permutations of a string?
                <QuestionAnswer question="What are the different approaches to generate all permutations of a string? Compare recursive backtracking with iterative methods." questionNumber={8} />
              </li>
              <li>
                How do you traverse a binary search tree in different orders?
                <QuestionAnswer question="How do you traverse a binary search tree in different orders? Explain inorder, preorder, and postorder traversals with their use cases." questionNumber={9} />
              </li>
            </ol>
          </div>
        )}

        <div className={styles.actionButtons}>
          <button 
            className={`btn ${styles.navBtn}`} 
            type="button"
            onClick={() => setShowNotesModal(true)}
          >
            Notes
          </button>
          <button 
            className={`btn ${styles.navBtn}`} 
            type="button"
            onClick={() => setShowPracticeModal(true)}
          >
            Practice Questions
          </button>
          <button className={`btn ${styles.navBtn}`} type="button">
            Revision
          </button>
          <button 
            className={`btn ${styles.navBtn}`} 
            type="button"
            onClick={() => setShowIntermediateModal(true)}
          >
            Intermediate
          </button>
          <button 
            className={`btn ${styles.navBtn}`} 
            type="button"
            onClick={() => setShowAdvancedModal(true)}
          >
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

      {showPracticeModal && (
        <PracticeProblemsModal onClose={() => setShowPracticeModal(false)} />
      )}

      {showIntermediateModal && (
        <IntermediateProblemsModal onClose={() => setShowIntermediateModal(false)} />
      )}

      {showAdvancedModal && (
        <AdvancedProblemsModal onClose={() => setShowAdvancedModal(false)} />
      )}

      {showNotesModal && (
        <NotesModal onClose={() => setShowNotesModal(false)} />
      )}
    </>
  )
}
