import { useEffect, useState } from 'react'
import { site } from '../../content/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const STORAGE_KEY = 'jayu-intro-seen'

export function CinematicIntro() {
  const reduced = usePrefersReducedMotion()
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return sessionStorage.getItem(STORAGE_KEY) !== '1'
  })

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  useEffect(() => {
    if (!visible || reduced) return
    const timer = window.setTimeout(dismiss, 2400)
    return () => window.clearTimeout(timer)
  }, [visible, reduced])

  if (!visible || reduced) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-charcoal px-6 text-center"
      role="dialog"
      aria-label="Introduction"
    >
      <p className="eyebrow mb-6">{site.atelier}</p>
      <p className="display text-[clamp(3rem,12vw,8rem)] leading-none text-ivory">{site.mark}</p>
      <span className="mt-8 h-px w-24 bg-olive" />
      <button
        type="button"
        onClick={dismiss}
        className="absolute bottom-8 text-xs uppercase tracking-[0.24em] text-silver"
      >
        Skip intro
      </button>
    </div>
  )
}
