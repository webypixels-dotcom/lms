import { useEffect, useState } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiHome, FiBookOpen, FiGrid, FiInfo, FiPhoneCall } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: '/#home', icon: FiHome },
  { label: 'Courses', to: '/#courses', icon: FiBookOpen },
  { label: 'LMS', to: '/lms', icon: FiGrid },
  { label: 'About', to: '/#about', icon: FiInfo },
  { label: 'Contact', to: '/#contact', icon: FiPhoneCall },
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
      <div className="site-header-glow" aria-hidden="true" />
      <div className="container header-container">
        <Link to="/" className="brand" aria-label="Brightside Academy LMS home">
          <span className="brand-mark">Brightside</span>
          <span className="brand-sub">Academy LMS</span>
        </Link>
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-list" role="menubar">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => {
                    const isHashRoute = link.to.includes('#')
                    if (!isHashRoute) {
                      return `nav-link ${isActive ? 'active' : ''}`
                    }
                    const hash = link.to.split('#')[1]
                    const isCurrentHash =
                      location.pathname === '/' &&
                      (location.hash === `#${hash}` || (!location.hash && hash === 'home'))
                    return `nav-link ${isCurrentHash ? 'active' : ''}`
                  }}
                  onClick={(event) => handleNavClick(event, link.to)}
                  role="menuitem"
                >
                  <span className="nav-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span>{link.label}</span>
                </NavLink>
              )
            })}
          </div>
          <div className="nav-actions">
            <button className="btn-outline subtle" onClick={handleInquire}>
              Inquire Now
            </button>
            <Link to="/lms" className="btn-solid">
              Login to LMS
            </Link>
          </div>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  )
}
