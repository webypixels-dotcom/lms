import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiBookOpen, FiSliders } from 'react-icons/fi'
import { useMemo, useState } from 'react'
import { courseCategories } from '../data/courses'

export function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = useMemo(() => {
    return [
      { id: 'all', label: 'All Programs' },
      ...courseCategories.map(({ id, name }) => ({ id, label: name })),
    ]
  }, [courseCategories])

  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return courseCategories
    return courseCategories.filter((category) => category.id === activeFilter)
  }, [activeFilter])

  return (
    <main className="page courses-page">
      <section className="page-hero">
        <div className="container hero-stack">
          <div>
            <span className="eyebrow">Course Catalog</span>
            <h1>Flexible certifications and pathways for Brightside educators</h1>
            <p>
              Mix-and-match micro-credentials, deep-dive certifications, and leadership accelerators
              across Brightside Academy. Every course is aligned to licensing requirements and mapped
              to professional growth journeys.
            </p>
          </div>
          <div className="hero-card slim">
            <div className="hero-card-header">
              <span className="badge">Path Builder</span>
              <h3>Design a learning path</h3>
              <p>Average completion time: 6–12 weeks, self-paced with live coaching check-ins.</p>
            </div>
            <Link className="btn-inline" to="/#contact">
              Meet with a learning advisor <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters-bar">
            <div className="filters-label">
              <FiSliders />
              <span>Filter by pathway</span>
            </div>
            <div className="filters-group">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`chip ${activeFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="catalog-grid">
            {filteredCategories.map((category) => (
              <section key={category.id} id={category.id} className="catalog-section">
                <header className="catalog-header">
                  <div>
                    <span className="badge soft">{category.badge}</span>
                    <h2>{category.name}</h2>
                    <p>{category.summary}</p>
                  </div>
                  <Link to="/#contact" className="btn-outline">
                    Inquire Now
                  </Link>
                </header>
                <div className="subcourses-grid">
                  {category.subcategories.map((course) => (
                    <article key={course.id} className="subcourse-card">
                      <div className="subcourse-icon">
                        <FiBookOpen />
                      </div>
                      <div className="subcourse-content">
                        <h3>{course.name}</h3>
                        <p>{course.description}</p>
                        <ul className="course-meta">
                          <li>{course.duration}</li>
                          <li>{course.format}</li>
                        </ul>
                      </div>
                      <div className="subcourse-actions">
                        <Link className="btn-inline" to="/#contact">
                          Inquire Now <FiArrowUpRight />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
