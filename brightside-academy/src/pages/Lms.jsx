import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlayCircle, FiTrendingUp, FiShield, FiUserCheck } from 'react-icons/fi'
import { lmsPanels } from '../data/lmsPanels'

const lmsHighlights = [
  {
    icon: <FiTrendingUp />,
    title: 'Data-rich dashboards',
    description: 'Visualize growth, attendance, and mastery trends across every classroom instantly.',
  },
  {
    icon: <FiShield />,
    title: 'Enterprise-grade security',
    description: 'SOC2-ready architecture, SSO, granular permissions, and automatic compliance logging.',
  },
  {
    icon: <FiUserCheck />,
    title: 'Role-based experiences',
    description: 'Students, instructors, and administrators each receive customized workflows.',
  },
]

export function LmsPage() {
  const [activePanel, setActivePanel] = useState(lmsPanels[0].id)
  const currentPanel = lmsPanels.find((panel) => panel.id === activePanel) ?? lmsPanels[0]

  return (
    <main className="page lms-page">
      <section className="page-hero">
        <div className="container hero-stack">
          <div>
            <span className="eyebrow">Brightside LMS</span>
            <h1>One platform, three empowered experiences</h1>
            <p>
              Students stay motivated, instructors stay orchestrated, and administrators steer with
              clarity. Brightside LMS seamlessly connects people, curriculum, and data.
            </p>
            <div className="hero-actions">
              <Link className="btn-solid" to="/#contact">
                Request LMS Demo
              </Link>
              <a className="btn-outline" href="#platform-highlights">
                View platform highlights
              </a>
            </div>
          </div>
          <div className="hero-card slim">
            <div className="hero-card-header">
              <span className="badge">Service Level</span>
              <h3>99.95% uptime</h3>
              <p>Brightside LMS is cloud-native with automated nightly backups and disaster recovery.</p>
            </div>
            <button className="btn-inline" type="button">
              <FiPlayCircle /> Watch platform overview
            </button>
          </div>
        </div>
      </section>

      <section id="platform-highlights" className="section highlights">
        <div className="container">
          <div className="section-header compact">
            <span className="eyebrow">Platform Highlights</span>
            <h2>Built for modern early learning operations</h2>
          </div>
          <div className="cards-grid three-col">
            {lmsHighlights.map((highlight) => (
              <article key={highlight.title} className="highlight-card">
                <div className="icon-circle">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lms-panels">
        <div className="container panels-container">
          <div className="panels-tabs" role="tablist">
            {lmsPanels.map((panel) => (
              <button
                key={panel.id}
                className={`panel-tab ${panel.id === activePanel ? 'active' : ''}`}
                onClick={() => setActivePanel(panel.id)}
                role="tab"
                aria-selected={panel.id === activePanel}
              >
                {panel.title}
              </button>
            ))}
          </div>
          <article className={`panel-card theme-${currentPanel.theme}`} role="tabpanel">
            <div className="panel-content">
              <h2>{currentPanel.title}</h2>
              <p>{currentPanel.description}</p>
              <ul className="panel-highlights">
                {currentPanel.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="panel-meta">
              <div className="panel-metrics">
                {currentPanel.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                    <small>{metric.trend}</small>
                  </div>
                ))}
              </div>
              <div className="panel-actions">
                {currentPanel.actions.map((action) => (
                  <button key={action} className="btn-outline-light" type="button">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section implementation">
        <div className="container implementation-grid">
          <div>
            <span className="eyebrow">Implementation Blueprint</span>
            <h2>Launch in 45 days with dedicated success partners</h2>
            <p>
              Guided migrations, stakeholder training, and adoption campaigns ensure your teams are
              confident from day one.
            </p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <span>Week 1-2</span>
              <h4>Discovery & Data Prep</h4>
              <p>Integrate student information systems, HR data, and curriculum assets.</p>
            </div>
            <div className="timeline-item">
              <span>Week 3</span>
              <h4>Pilot Cohorts</h4>
              <p>Launch with a representative set of classrooms and iterate on feedback loops.</p>
            </div>
            <div className="timeline-item">
              <span>Week 4-5</span>
              <h4>Full Rollout & Coaching</h4>
              <p>Activate automated communications, role-based dashboards, and coaching cadences.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
