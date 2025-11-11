import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiActivity,
  FiAward,
  FiBarChart2,
  FiBell,
  FiBookOpen,
  FiCheckCircle,
  FiCheckSquare,
  FiCompass,
  FiCpu,
  FiCreditCard,
  FiFileText,
  FiLayers,
  FiMessageSquare,
  FiPlayCircle,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
  FiVideo,
  FiZap,
} from 'react-icons/fi'
import { lmsPanels } from '../data/lmsPanels'

const coreModules = [
  {
    id: 'user-management',
    title: 'User Management',
    summary: 'Onboard every role with secure authentication and personalization.',
    icon: <FiUsers />,
    items: [
      'User registration & login with role-based access',
      'Profile management (photo, bio, contact info)',
      'Password reset & email verification',
      'Role assignment (Student / Teacher / Admin)',
      'Multi-user authentication (JWT, OAuth, SSO)',
    ],
  },
  {
    id: 'course-management',
    title: 'Course Management',
    summary: 'Empower creators to build, organize, and launch curriculum in minutes.',
    icon: <FiBookOpen />,
    items: [
      'Create, edit, duplicate, or delete courses',
      'Categorize courses by subject, pathway, or skill level',
      'Add lessons, quizzes, and assignments',
      'Upload PDFs, video, docs, and external links',
      'Preview experience before publish/unpublish',
      'Set prerequisites and track course duration',
      'Configure enrollment settings (Free / Paid / Invite-only)',
    ],
  },
  {
    id: 'content-delivery',
    title: 'Content Delivery',
    summary: 'Stream interactive learning with resilient media and collaboration tools.',
    icon: <FiActivity />,
    items: [
      'Video player integration (YouTube, Vimeo, local uploads)',
      'Downloadable lecture slides, notes, and resources',
      'Interactive lessons with MCQs, drag-and-drop, and reflections',
      'Lesson and module progress tracking',
      'Embedded discussion forums or comment threads',
    ],
  },
  {
    id: 'communication',
    title: 'Communication Tools',
    summary: 'Keep every voice connected with built-in messaging and announcements.',
    icon: <FiMessageSquare />,
    items: [
      'Announcements from admins or teachers to cohorts',
      'Real-time messaging and chat channels',
      'Email and in-app notification workflows',
      'Discussion boards and moderated Q&A threads',
    ],
  },
  {
    id: 'assessment',
    title: 'Assessment & Certification',
    summary: 'Measure mastery with flexible quiz builders and credential automation.',
    icon: <FiAward />,
    items: [
      'Quiz builder (MCQ, True/False, Short Answer)',
      'Auto-grading and manual scoring options',
      'Assignment submission with rubric-based feedback',
      'Progress reports and pacing analytics',
      'Certificate generation with branded templates',
    ],
  },
  {
    id: 'payments',
    title: 'Payment & Access Control',
    summary: 'Monetize programs with secure billing and controlled access.',
    icon: <FiCreditCard />,
    items: [
      'Payment gateway integration (Stripe, PayPal, JazzCash, etc.)',
      'Subscription or one-time purchase models',
      'Access restriction for unpaid or expired users',
      'Invoice history and transaction reporting',
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Reports',
    summary: 'Translate engagement into insights with executive-ready dashboards.',
    icon: <FiBarChart2 />,
    items: [
      'Course completion and mastery statistics',
      'User engagement tracking with heatmaps',
      'Quiz and exam analytics by cohort or standard',
      'Financial reports for paid LMS programs',
    ],
  },
]

const advancedAddons = [
  {
    title: 'Gamification & Motivation',
    description: 'Spark momentum with challenge-based pathways and recognition.',
    icon: <FiZap />,
    items: [
      'Gamification (points, badges, leaderboard)',
      'Personalized badge galleries for students & teachers',
      'Seasonal challenges tied to instructional goals',
    ],
  },
  {
    title: 'Live & Collaborative Learning',
    description: 'Blend synchronous and asynchronous learning without leaving the LMS.',
    icon: <FiVideo />,
    items: [
      'Live class integration (Zoom / Google Meet API)',
      'Discussion communities and cohort groups',
      'Attendance tracking for live sessions',
    ],
  },
  {
    title: 'Intelligent & Global Reach',
    description: 'Scale globally while tailoring recommendations to every learner.',
    icon: <FiCpu />,
    items: [
      'AI-based recommendation system (suggest courses)',
      'Mobile app synchronization (iOS & Android)',
      'Multi-language support with localized content packs',
    ],
  },
]

const sectionIconMap = {
  'Dashboard Overview': FiCompass,
  'My Courses': FiLayers,
  Assessments: FiCheckSquare,
  Communication: FiMessageSquare,
  'Certificates & Achievements': FiAward,
  'Account Settings': FiSettings,
  'Course Management': FiBookOpen,
  'Assessment Tools': FiFileText,
  'Student Interaction': FiUsers,
  Reports: FiBarChart2,
  'Profile & Account': FiUserCheck,
  Overview: FiTrendingUp,
  'User Management': FiUsers,
  'Financial Management': FiCreditCard,
  'Content Moderation': FiShield,
  'Communication & Notifications': FiBell,
  'Reports & Analytics': FiBarChart2,
  'System Settings': FiSettings,
}

export function LmsPage() {
  const [activePanel, setActivePanel] = useState(lmsPanels[0].id)
  const currentPanel = lmsPanels.find((panel) => panel.id === activePanel) ?? lmsPanels[0]

  return (
    <main className="page lms-page">
      <section className="page-hero" data-animate>
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
          <div className="hero-card slim" data-animate data-animate-delay="0.12s">
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

      <section id="platform-highlights" className="section highlights" data-animate>
        <div className="container">
          <div className="section-header compact">
            <span className="eyebrow">Platform Highlights</span>
            <h2>Built for modern early learning operations</h2>
          </div>
          <div className="cards-grid three-col">
            {[
              {
                icon: <FiTrendingUp />,
                title: 'Data-rich dashboards',
                description:
                  'Visualize growth, attendance, and mastery trends across every classroom instantly.',
              },
              {
                icon: <FiShield />,
                title: 'Enterprise-grade security',
                description:
                  'SOC2-ready architecture, SSO, granular permissions, and automatic compliance logging.',
              },
              {
                icon: <FiUserCheck />,
                title: 'Role-based experiences',
                description:
                  'Students, instructors, and administrators each receive customized workflows.',
              },
            ].map((highlight, index) => (
              <article
                key={highlight.title}
                className="highlight-card"
                data-animate
                data-animate-delay={`${0.08 * index}s`}
              >
                <div className="icon-circle">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section core-modules" data-animate>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Core Platform Components</span>
            <h2>Everything you need to orchestrate a thriving learning community</h2>
            <p>
              Brightside LMS delivers the foundational modules you expect from an enterprise learning
              management system, purpose-built for early education networks.
            </p>
          </div>
          <div className="module-grid">
            {coreModules.map((module, index) => (
              <article
                key={module.id}
                className="module-card"
                data-animate
                data-animate-delay={`${0.06 * index}s`}
              >
                <header>
                  <span className="module-icon" aria-hidden="true">
                    {module.icon}
                  </span>
                  <div>
                    <h3>{module.title}</h3>
                    <p>{module.summary}</p>
                  </div>
                </header>
                <ul>
                  {module.items.map((item) => (
                    <li key={item}>
                      <FiCheckCircle aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section lms-panels" data-animate>
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
            <div className="panel-categories">
              {currentPanel.sections?.map((section) => {
                const IconComponent = sectionIconMap[section.title] ?? FiCheckSquare
                return (
                  <div key={section.title} className="panel-category">
                    <div className="panel-category-heading">
                      <span className="panel-category-icon" aria-hidden="true">
                        <IconComponent />
                      </span>
                      <h3>{section.title}</h3>
                    </div>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
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
                  <button key={action} className="btn-outline" type="button">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section implementation" data-animate>
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
            <div className="timeline-item" data-animate>
              <span>Week 1-2</span>
              <h4>Discovery & Data Prep</h4>
              <p>Integrate student information systems, HR data, and curriculum assets.</p>
            </div>
            <div className="timeline-item" data-animate data-animate-delay="0.08s">
              <span>Week 3</span>
              <h4>Pilot Cohorts</h4>
              <p>Launch with a representative set of classrooms and iterate on feedback loops.</p>
            </div>
            <div className="timeline-item" data-animate data-animate-delay="0.16s">
              <span>Week 4-5</span>
              <h4>Full Rollout & Coaching</h4>
              <p>Activate automated communications, role-based dashboards, and coaching cadences.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section addons" data-animate>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Advanced Enhancements</span>
            <h2>Optional add-ons to future-proof your LMS ecosystem</h2>
            <p>
              Extend Brightside LMS with immersive, intelligent features that elevate engagement and
              operational flexibility across every campus.
            </p>
          </div>
          <div className="addon-grid">
            {advancedAddons.map((addon, index) => (
              <article
                key={addon.title}
                className="addon-card"
                data-animate
                data-animate-delay={`${0.08 * index}s`}
              >
                <header>
                  <span className="addon-icon" aria-hidden="true">
                    {addon.icon}
                  </span>
                  <div>
                    <h3>{addon.title}</h3>
                    <p>{addon.description}</p>
                  </div>
                </header>
                <ul>
                  {addon.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
