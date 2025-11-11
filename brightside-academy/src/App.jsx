import { useCallback, useEffect } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/Home'
import { CoursesPage } from './pages/Courses'
import { LmsPage } from './pages/Lms'

function AppLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToHash = useCallback((hash) => {
    if (!hash) return
    const targetId = hash.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    if (location.hash) {
      const attemptScroll = () => scrollToHash(location.hash)
      attemptScroll()
      const timeout = setTimeout(attemptScroll, 120)
      return () => clearTimeout(timeout)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash, scrollToHash])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-animate]'))
    if (!elements.length) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target
          const delay = target.getAttribute('data-animate-delay')
          if (delay) {
            target.style.setProperty('--reveal-delay', delay)
          }
          target.classList.add('is-visible')
          obs.unobserve(target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12,
      },
    )

    elements.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        element.style.setProperty('--reveal-delay', element.getAttribute('data-animate-delay') || '0s')
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const handleInquire = useCallback(() => {
    if (location.pathname !== '/') {
      navigate('/#contact')
    } else {
      scrollToHash('#contact')
    }
  }, [location.pathname, navigate, scrollToHash])

  return (
    <>
      <Header onInquire={handleInquire} />
      <Outlet />
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <main className="page not-found">
      <section className="page-hero">
        <div className="container hero-stack">
          <div>
            <span className="eyebrow">404</span>
            <h1>We couldn&apos;t find that page.</h1>
            <p>Please use the navigation menu to return to the Brightside Academy experiences.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="lms" element={<LmsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
