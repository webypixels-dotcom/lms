import { useEffect, useState } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'Courses', to: '/#courses' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
]

export function Header({ onInquire }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleInquire = () => {
    if (onInquire) onInquire()
    setMenuOpen(false)
  }

  const handleNavClick = (event, target) => {
    setMenuOpen(false)
    if (location.pathname === '/' && target.startsWith('/#')) {
      const hash = target.slice(2)
      if (location.hash === `#${hash}`) {
        event.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
    }
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="brand">
          <span className="brand-mark">Brightside</span>
          <span className="brand-sub">Academy LMS</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-list">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={(event) => handleNavClick(event, link.to)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-actions">
            <button className="btn-outline" onClick={handleInquire}>
              Inquire Now
            </button>
            <Link to="/lms" className="btn-solid">
              Login to LMS
            </Link>
          </div>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
