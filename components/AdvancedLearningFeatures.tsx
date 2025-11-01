'use client'

import { useState } from 'react'
import styles from './AdvancedLearningFeatures.module.css'
import AIGuidanceModal from './modals/AIGuidanceModal'
import CodeEditorModal from './modals/CodeEditorModal'
import DynamicRoadmapsModal from './modals/DynamicRoadmapsModal'
import GamifiedLearningModal from './modals/GamifiedLearningModal'
import ProgressAnalyticsModal from './modals/ProgressAnalyticsModal'
import CommunitySupportModal from './modals/CommunitySupportModal'
import QuestionAnswer from './QuestionAnswer'

const features = [
  {
    id: 'ai-guidance',
    title: 'AI-Powered Guidance',
    description: 'Get smart hints and explanations powered by AI to help you debug, learn concepts, and improve problem-solving efficiency.',
    icon: '🤖',
  },
  {
    id: 'code-editor',
    title: 'Interactive Code Editor',
    description: 'Write and run code directly within the platform using our built-in interactive editor supporting multiple languages.',
    icon: '💻',
  },
  {
    id: 'roadmaps',
    title: 'Dynamic Roadmaps',
    description: 'Personalized learning roadmaps that adapt to your progress and suggest what to learn next for faster growth.',
    icon: '🗺️',
  },
  {
    id: 'gamified',
    title: 'Gamified Learning',
    description: 'Earn XP, streaks, and badges for completing lessons and solving challenges. Learning feels like playing a game!',
    icon: '🎮',
  },
  {
    id: 'analytics',
    title: 'Progress Analytics',
    description: 'Track your improvement with data-driven insights showing accuracy, speed, and time spent per topic.',
    icon: '📊',
  },
  {
    id: 'community',
    title: 'Community Support',
    description: 'Collaborate, discuss problems, and share knowledge with fellow learners to grow together.',
    icon: '👥',
  },
]

export default function AdvancedLearningFeatures() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const handleFeatureClick = (featureId: string) => {
    setOpenModal(featureId)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  return (
    <>
      <section className={styles.section}>
        <h2 className="section-title">Advanced Learning Features</h2>
        <p className={styles.intro}>
          Experience next-generation learning tools designed to enhance your coding journey with AI,
          interactivity, and analytics.
        </p>

        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <button
              key={feature.id}
              type="button"
              className={styles.featureCard}
              onClick={() => handleFeatureClick(feature.id)}
            >
              <h3>{feature.icon} {feature.title}</h3>
              <p>{feature.description}</p>
            </button>
          ))}
        </div>

        <div className={styles.advancedQuestions}>
          <h3 className={styles.questionsTitle}>🚀 Advanced Challenge Questions</h3>
          <p className={styles.questionsIntro}>
            Test your expertise with these extremely difficult questions covering advanced algorithms, system design, and complex problem-solving.
          </p>
          <ol className={styles.questionsList}>
            <li>
              <strong>Explain the difference between red-black trees and AVL trees. When would you choose one over the other, and what are their respective time complexities for insertion, deletion, and lookup operations?</strong>
              <QuestionAnswer question="Explain the difference between red-black trees and AVL trees. Compare their time complexities, rotation operations, and use cases. When would you choose one over the other?" questionNumber={1} />
            </li>
            <li>
              <strong>Design a distributed system that can handle 1 billion requests per day with 99.9% uptime. What are the key components, how would you handle load balancing, data consistency, and fault tolerance?</strong>
              <QuestionAnswer question="Design a distributed system architecture for handling 1 billion requests per day with 99.9% uptime. Explain load balancing strategies, data consistency models (CAP theorem), fault tolerance mechanisms, and scalability patterns." questionNumber={2} />
            </li>
            <li>
              <strong>Explain how garbage collection works in modern programming languages. Compare mark-and-sweep, generational, and incremental garbage collection algorithms. What are the trade-offs?</strong>
              <QuestionAnswer question="Explain garbage collection algorithms: mark-and-sweep, generational, and incremental GC. Compare their performance characteristics, memory overhead, pause times, and when each is most suitable." questionNumber={3} />
            </li>
            <li>
              <strong>What is the P vs NP problem and why is it significant? Explain polynomial-time reductions and give examples of NP-complete problems. What would solving P=NP mean for computer science?</strong>
              <QuestionAnswer question="Explain the P vs NP problem, its significance in computer science, polynomial-time reductions, NP-complete problems, and the implications if P equals NP. Provide concrete examples of NP-complete problems." questionNumber={4} />
            </li>
            <li>
              <strong>Design an algorithm to find the longest common subsequence (LCS) of three strings efficiently. What is the time and space complexity? How would you optimize it for memory?</strong>
              <QuestionAnswer question="Design an efficient algorithm to find the longest common subsequence of three strings. Explain the dynamic programming approach, time complexity O(n*m*p), space optimization techniques, and alternative approaches." questionNumber={5} />
            </li>
            <li>
              <strong>Explain the Byzantine Generals Problem and how consensus algorithms like Raft and Paxos solve it. What are the differences between these algorithms and their failure modes?</strong>
              <QuestionAnswer question="Explain the Byzantine Generals Problem, how Raft and Paxos consensus algorithms solve it, their differences in leader election, log replication, failure handling, and when to use each algorithm." questionNumber={6} />
            </li>
            <li>
              <strong>Implement a lock-free concurrent data structure (e.g., a lock-free queue or stack). Explain compare-and-swap operations, memory ordering, and how to prevent the ABA problem.</strong>
              <QuestionAnswer question="Design a lock-free concurrent data structure using compare-and-swap operations. Explain memory ordering (acquire-release semantics), ABA problem prevention, hazard pointers, and performance trade-offs compared to locking." questionNumber={7} />
            </li>
            <li>
              <strong>Explain how modern CPUs use out-of-order execution, branch prediction, and speculative execution. What are security implications like Spectre and Meltdown? How do mitigations work?</strong>
              <QuestionAnswer question="Explain CPU microarchitecture: out-of-order execution, branch prediction, speculative execution. Discuss Spectre and Meltdown vulnerabilities, how they exploit these features, and modern mitigation techniques like retpoline and SSB." questionNumber={8} />
            </li>
            <li>
              <strong>Design a Bloom filter with configurable false positive rates. Explain the mathematical foundation, hash functions, optimal number of hash functions, and compare to other probabilistic data structures.</strong>
              <QuestionAnswer question="Design a Bloom filter with configurable false positive rate. Explain the mathematical foundation, optimal hash function count calculation (k = (m/n) * ln(2)), space-time trade-offs, and comparison with cuckoo filters and quotient filters." questionNumber={9} />
            </li>
            <li>
              <strong>Explain the Fast Fourier Transform (FFT) algorithm. How does it reduce the complexity of polynomial multiplication from O(n²) to O(n log n)? Provide applications in signal processing and cryptography.</strong>
              <QuestionAnswer question="Explain the Fast Fourier Transform algorithm, how it reduces polynomial multiplication complexity from O(n²) to O(n log n), divide-and-conquer approach, applications in signal processing, convolution, and cryptographic algorithms." questionNumber={10} />
            </li>
            <li>
              <strong>Design a distributed transaction system using the two-phase commit (2PC) protocol. What are its limitations? How does the three-phase commit improve upon it? Explain the CAP theorem implications.</strong>
              <QuestionAnswer question="Design a distributed transaction system using 2PC. Explain blocking behavior, coordinator failure scenarios, how 3PC improves fault tolerance, and implications of the CAP theorem (consistency vs availability trade-offs)." questionNumber={11} />
            </li>
            <li>
              <strong>Implement a self-balancing B-tree for database indexing. Explain the insertion and deletion algorithms, minimum degree calculations, and how it differs from B+ trees. What are the I/O complexity advantages?</strong>
              <QuestionAnswer question="Design a B-tree for database indexing. Explain insertion/deletion algorithms, minimum degree (t) calculations, splitting/merging operations, differences from B+ trees, and I/O complexity advantages for disk-based storage." questionNumber={12} />
            </li>
          </ol>
        </div>
      </section>

      {openModal === 'ai-guidance' && <AIGuidanceModal onClose={handleCloseModal} />}
      {openModal === 'code-editor' && <CodeEditorModal onClose={handleCloseModal} />}
      {openModal === 'roadmaps' && <DynamicRoadmapsModal onClose={handleCloseModal} />}
      {openModal === 'gamified' && <GamifiedLearningModal onClose={handleCloseModal} />}
      {openModal === 'analytics' && <ProgressAnalyticsModal onClose={handleCloseModal} />}
      {openModal === 'community' && <CommunitySupportModal onClose={handleCloseModal} />}
    </>
  )
}
