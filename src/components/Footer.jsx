import '../styles/Footer.css'

/**
 * Footer component with copyright and links
 * Displays company information and footer navigation
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>GUVI</h4>
            <p>Industry Skill Training Platform</p>
          </div>
          <div className="footer-section">
            <h4>Kongu Engineering College</h4>
            <p>Premier Technical Institution</p>
          </div>
          <div className="footer-section">
            <h4>Partnership</h4>
            <p>Bridging Academia and Industry</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} GUVI & Kongu Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
