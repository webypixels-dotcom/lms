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
