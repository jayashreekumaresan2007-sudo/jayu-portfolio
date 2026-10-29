import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CinematicIntro } from '../motion/CinematicIntro'
import { CustomCursor } from '../motion/CustomCursor'
import { PageTransition } from '../motion/PageTransition'
import { Footer } from './Footer'
import { Header } from './Header'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-charcoal text-ivory">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <CinematicIntro />
      <CustomCursor />
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  )
}
