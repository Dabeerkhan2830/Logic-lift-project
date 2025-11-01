import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AssessmentSection from '@/components/AssessmentSection'
import AdvancedLearningFeatures from '@/components/AdvancedLearningFeatures'
import ProgressSection from '@/components/ProgressSection'
import AIChatSection from '@/components/AIChatSection'
import Footer from '@/components/Footer'
import SpaceBackground from '@/components/SpaceBackground'
import FloatingElements from '@/components/FloatingElements'

const DynamicModals = dynamic(() => import('@/components/Modals'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <AssessmentSection />
        <AdvancedLearningFeatures />
        <ProgressSection />
        <AIChatSection />
      </main>
      <Footer />
      <DynamicModals />
    </>
  )
}
