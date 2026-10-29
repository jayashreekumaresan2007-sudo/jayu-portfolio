import { useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation()
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (reduced) {
      node.style.opacity = '1'
      return
    }
    node.style.opacity = '0'
    node.style.transform = 'translateY(10px)'
    const frame = requestAnimationFrame(() => {
      node.style.transition = 'opacity 420ms ease, transform 420ms ease'
      node.style.opacity = '1'
      node.style.transform = 'none'
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, reduced])

  return (
    <div ref={ref} className="flex-1">
      {children}
    </div>
  )
}
