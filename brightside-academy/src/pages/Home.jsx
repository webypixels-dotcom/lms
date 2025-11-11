import { Link } from 'react-router-dom'
import { FiCheckCircle, FiPhoneCall, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { courseCategories } from '../data/courses'

export function HomePage() {
  const featuredCourses = courseCategories.slice(0, 3)

  return (
    <main className="home-page">
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="eyebrow">Brightside Academy LMS</span>
            <h1>
              Ignite Early Learning with a Connected{' '}
              <span className="highlight">Learning Management System</span>
            </h1>
            <p>
              Deliver joyful, data-informed experiences for students, instructors, and administrators
              across every Brightside campus. Centralize curriculum, track progress in real time, and
              empower educators with AI-assisted insights.
            </p>
            <div className="hero-actions">
              <Link className="btn-solid" to="/#contact">
                Inquire Now
              </Link>
              <Link className="btn-outline" to="/courses">
                Explore Courses
              </Link>
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
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="badge">Live Peek</span>
              <h3>Today at Brightside</h3>
              <p>7 new families toured, 18 observations logged, 3 centers reached 100% mastery.</p>
            </div>
            <div className="hero-metrics">
              <div>
                <h4>4,800+</h4>
                <p>Active Learners</p>
              </div>
              <div>
                <h4>94%</h4>
                <p>Course Completion</p>
              </div>
              <div>
                <h4>38%</h4>
                <p>Prep Time Saved</p>
              </div>
            </div>
            <div className="hero-card-footer">
              <FiCalendar />
              <span>Parent-teacher conferences kick off next week — all scheduled in the LMS.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section courses-preview">
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
            {featuredCourses.map((category) => (
              <article key={category.id} className="course-card">
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

      <section id="about" className="section about">
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
              <li>
                <span>01</span>
                <div>
                  <h4>Whole-child Framework</h4>
                  <p>Social-emotional, cognitive, and physical development tracked in one place.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h4>Empowered Educators</h4>
                  <p>Professional learning paths and coaching loops that spark classroom innovation.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h4>Family Partnership</h4>
                  <p>Real-time updates, bilingual resources, and home learning extensions.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <h3>42</h3>
              <p>Centers sharing best practices through the LMS</p>
            </div>
            <div className="stat-card">
              <h3>1.2M</h3>
              <p>Learning moments documented annually</p>
            </div>
            <div className="stat-card">
              <h3>4.8★</h3>
              <p>Average family satisfaction rating</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Staff credential compliance rate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partnerships" className="section partnership">
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
            <div className="step">
              <span>Step 1</span>
              <h4>Discovery & Visioning</h4>
              <p>Collaborative workshops to map current state, goals, and change-management needs.</p>
            </div>
            <div className="step">
              <span>Step 2</span>
              <h4>Configuration & Training</h4>
              <p>Configure pathways, permissions, and integrations with hands-on educator bootcamps.</p>
            </div>
            <div className="step">
              <span>Step 3</span>
              <h4>Launch & Continuous Coaching</h4>
              <p>Quarterly impact reviews to keep your teams inspired and on track.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
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
          <form className="contact-form">
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
