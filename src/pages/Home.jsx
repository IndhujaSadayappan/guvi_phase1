import HeroSection from '../components/HeroSection'
import GUVISection from '../components/GUVISection'
import KongSection from '../components/KongSection'
import CollaborationSection from '../components/CollaborationSection'
import '../styles/Home.css'

/**
 * Home page with multiple sections
 * Includes hero, GUVI info, Kongu info, and collaboration details
 * Features smooth scrolling and animations
 */
export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <GUVISection />
      <KongSection />
      <CollaborationSection />
    </div>
  )
}
