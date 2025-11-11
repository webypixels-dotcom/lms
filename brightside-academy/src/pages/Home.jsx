import { Link } from 'react-router-dom'
import {
  FiActivity,
  FiArrowRight,
  FiBarChart2,
  FiCalendar,
  FiCheckCircle,
  FiPhoneCall,
  FiPlay,
  FiTrendingUp,
  FiUsers,
} from 'react-icons/fi'
import { courseCategories } from '../data/courses'

export function HomePage() {
  const featuredCourses = courseCategories.slice(0, 3)
  const heroFeed = [
    {
      time: '08:24',
      title: 'New course published',
      detail: 'Toddler STEAM Adventures is now live',
    },
    {
      time: '09:05',
      title: 'Live class starting',
      detail: 'Circle Time Coaching · Room 3',
    },
    {
      time: '09:42',
      title: 'Certificate earned',
      detail: 'Instructor J. Patel · SEL Foundations',
    },
  ]
  const heroProgress = [
    { label: 'Family engagement campaign', value: 72 },
    { label: 'Teacher coaching loops', value: 58 },
    { label: 'Compliance checklist', value: 91 },
  ]

  return (
    <main className="home-page">
      <section id="home" className="hero" data-animate>
        <div className="hero-pattern" aria-hidden="true">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="hero-grid" />
        </div>
        <div className="container hero-content">
          <div className="hero-text" data-animate data-animate-delay="0s">
            <div className="status-pill">
              <span className="pulse-dot" />
              Platform update · v3.7 Phoenix
            </div>
            <h1>
              Ignite joyful learning with a connected{' '}
              <span className="highlight">Brightside LMS campus</span>
            </h1>
            <p>
              Centralize curriculum, coaching, and communication in one immersive platform.
              Brightside LMS keeps students inspired, teachers orchestrated, and administrators ready
              to scale excellence across every center.
            </p>
            <div className="hero-actions">
              <Link className="btn-solid" to="/#contact">
                Inquire Now
              </Link>
              <Link className="btn-outline" to="/courses">
                Explore Courses
              </Link>
              <Link className="btn-outline-light hero-demo" to="/lms">
                <FiPlay /> Watch LMS tour
              </Link>
            </div>
            <div className="hero-signal">
              <FiActivity />
              <div>
                <strong>Live activity: 128 campuses online</strong>
                <span>Ms. Ava logged a STEAM observation 2 minutes ago</span>
              </div>
            </div>
            <div className="hero-mini-metrics">
              <div>
                <FiUsers />
                <span>4,800+ learners thriving this week</span>
              </div>
              <div>
                <FiBarChart2 />
                <span>94% on-time course completion</span>
              </div>
            </div>
            <ul className="hero-benefits">
              <li>
                <FiCheckCircle /> Modern, responsive digital campus
              </li>
              <li>
                <FiCheckCircle /> Unified dashboards for families and staff
              </li>
              <li>
                <FiCheckCircle /> Compliance-ready workflows
              </li>
            </ul>
          </div>
          <div className="hero-showcase" data-animate data-animate-delay="0.12s">
            <article className="showcase-card live-feed">
              <header>
                <span className="badge soft">Live feed</span>
                <strong>Today at Brightside</strong>
              </header>
              <ul className="live-feed-list">
                {heroFeed.map((event) => (
                  <li key={event.time}>
                    <span className="feed-time">{event.time}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <small>{event.detail}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <article className="showcase-card progress">
              <header>
                <span className="badge">Momentum</span>
                <strong>Team progress pulse</strong>
              </header>
              <div className="progress-list">
                {heroProgress.map((item) => (
                  <div key={item.label} className="progress-row">
                    <span>{item.label}</span>
                    <div className="progress-track" role="presentation">
                      <span style={{ '--progress-value': `${item.value}%` }} />
                    </div>
                    <strong>{item.value}%</strong>
                  </div>
                ))}
              </div>
              <div className="sparkline">
                <FiTrendingUp />
                <div>
                  <strong>+18%</strong>
                  <span>Week-over-week engagement</span>
                </div>
              </div>
            </article>
            <div className="showcase-kpis">
              <div className="kpi-card">
                <span>Parent satisfaction</span>
                <strong>4.8 ★</strong>
                <small>Across 42 regional centers</small>
              </div>
              <div className="kpi-card alt">
                <span>Prep time saved</span>
                <strong>38%</strong>
                <small>Automated lesson design</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses-preview" data-animate>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Courses</span>
            <h2>Role-based learning paths for every Brightside educator</h2>
            <p>
              Discover curated course collections that blend compliance, instructional excellence,
              and leadership pathways. Each track is aligned to Brightside competencies and state
              standards.
            </p>
          </div>
          <div className="cards-grid">
            {featuredCourses.map((category, index) => (
              <article
                key={category.id}
                className="course-card"
                data-animate
                data-animate-delay={`${0.08 * index}s`}
              >
                <div className="card-header">
                  <span className={`badge badge-${category.badge.toLowerCase()}`}>
                    {category.badge}
                  </span>
                  <h3>{category.name}</h3>
                  <p>{category.summary}</p>
                </div>
                <ul className="course-outcomes">
                  {category.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <FiCheckCircle />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className="card-footer">
                  <Link to={`/courses#${category.id}`} className="btn-inline">
                    View track details <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/courses" className="btn-solid">
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section about" data-animate>
        <div className="container about-grid">
          <div className="about-summary">
            <span className="eyebrow">About Brightside Academy</span>
            <h2>Centered on joyful learning, grounded in measurable impact</h2>
            <p>
              Brightside Academy operates a network of licensed early learning centers serving
              infants through pre-kindergarten across multiple states. Our learning management system
              keeps teams aligned, data transparent, and every child&apos;s experience personalized.
            </p>
            <ul className="about-pillars">
              <li data-animate data-animate-delay="0s">
                <span>01</span>
                <div>
                  <h4>Whole-child Framework</h4>
                  <p>Social-emotional, cognitive, and physical development tracked in one place.</p>
                </div>
              </li>
              <li data-animate data-animate-delay="0.08s">
                <span>02</span>
                <div>
                  <h4>Empowered Educators</h4>
                  <p>Professional learning paths and coaching loops that spark classroom innovation.</p>
                </div>
              </li>
              <li data-animate data-animate-delay="0.16s">
                <span>03</span>
                <div>
                  <h4>Family Partnership</h4>
                  <p>Real-time updates, bilingual resources, and home learning extensions.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-stats">
            {[
              { label: 'Centers sharing best practices through the LMS', value: '42' },
              { label: 'Learning moments documented annually', value: '1.2M' },
              { label: 'Average family satisfaction rating', value: '4.8★' },
              { label: 'Staff credential compliance rate', value: '98%' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card"
                data-animate
                data-animate-delay={`${0.06 * index}s`}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="section partnership" data-animate>
        <div className="container partnership-content">
          <div>
            <span className="eyebrow">Partner With Us</span>
            <h2>Implementation playbooks tailored to your campuses</h2>
            <p>
              From white-glove onboarding to data migrations and regional compliance consultancy, our
              launch teams guide you every step of the way.
            </p>
          </div>
          <div className="partnership-steps">
            {[
              {
                step: 'Step 1',
                title: 'Discovery & Visioning',
                copy: 'Collaborative workshops to map current state, goals, and change-management needs.',
              },
              {
                step: 'Step 2',
                title: 'Configuration & Training',
                copy: 'Configure pathways, permissions, and integrations with hands-on educator bootcamps.',
              },
              {
                step: 'Step 3',
                title: 'Launch & Continuous Coaching',
                copy: 'Quarterly impact reviews to keep your teams inspired and on track.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="step"
                data-animate
                data-animate-delay={`${0.08 * index}s`}
              >
                <span>{item.step}</span>
                <h4>{item.title}</h4>
                <p>{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact" data-animate>
        <div className="container contact-grid">
          <div className="contact-summary">
            <span className="eyebrow">Contact Us</span>
            <h2>Let’s design your Brightside learning journey</h2>
            <p>
              Share a few details and our partnership team will schedule a tailored walkthrough of the
              LMS and course catalog.
            </p>
            <div className="contact-details">
              <div>
                <FiPhoneCall />
                <div>
                  <span>Call us</span>
                  <strong>(800) 555-0123</strong>
                </div>
              </div>
              <div>
                <FiCalendar />
                <div>
                  <span>Book a demo</span>
                  <a href="https://cal.com" target="_blank" rel="noreferrer">
                    Find a timeslot
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" data-animate data-animate-delay="0.12s">
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Alex Johnson" required />
              </div>
              <div className="form-field">
                <label htmlFor="organization">Organization</label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="Brightside Center #12"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@domain.com" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="interest">Area of Interest</label>
              <select id="interest" name="interest" defaultValue="courses">
                <option value="courses">Courses & Certifications</option>
                <option value="lms">Learning Management System</option>
                <option value="partnership">Implementation Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell us about your goals..."
              ></textarea>
            </div>
            <button type="submit" className="btn-solid">
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
