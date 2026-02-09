import { Link } from 'react-router-dom'
import '../styles/Header.css'

/**
 * Header component with navigation
 * Displays logo and navigation links to Home and About pages
 */
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">GUVI × KEC</span>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
