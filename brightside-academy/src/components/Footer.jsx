import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark">Brightside</span>
            <span className="brand-sub">Academy</span>
          </Link>
          <p>
            Brightside Academy empowers educators, families, and learners with a connected learning
            management experience tailored for early childhood excellence.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#courses">Courses</Link>
            </li>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Programs</h4>
          <ul>
            <li>
              <Link to="/courses">Course Catalog</Link>
            </li>
            <li>
              <Link to="/lms">LMS Experience</Link>
            </li>
            <li>
              <Link to="/#partnerships">Partnerships</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Connect</h4>
          <ul className="social-links">
            <li>
              <a href="mailto:lms@brightsideacademy.com">
                <FiMail /> lms@brightsideacademy.com
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FiFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FiInstagram /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FiLinkedin /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Brightside Academy Learning Management System</small>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}
