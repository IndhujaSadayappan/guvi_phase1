import { Link } from 'react-router-dom'
import '../styles/HeroSection.css'

/**
 * Hero section component
 * Eye-catching introduction with gradient background and CTA button
 */
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bridging <span className="gradient-text">Academia</span> and <span className="gradient-text">Industry</span>
          </h1>
          <p className="hero-subtitle">
            A transformative partnership between GUVI and Kongu Engineering College to empower students with industry-ready skills
          </p>
          <Link to="/about" className="cta-button">
            Learn More About Partnership
          </Link>
        </div>
        <div className="hero-visual">
          <div className="gradient-shape shape-1"></div>
          <div className="gradient-shape shape-2"></div>
          <div className="hero-image-placeholder">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <circle cx="150" cy="150" r="120" fill="url(#grad1)" opacity="0.3" />
              <circle cx="150" cy="150" r="90" fill="none" stroke="url(#grad1)" strokeWidth="2" />
              <circle cx="150" cy="150" r="60" fill="url(#grad1)" opacity="0.5" />
              <text x="150" y="160" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1e40af" fontFamily="'Playfair Display'">
                GUVI
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
