import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function ScrollReveal({
  children,
  className,
  y = 28,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (reduced) {
      node.classList.add('is-visible')
      return
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        node,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: node,
            start: 'top 86%',
            once: true,
          },
        },
      )
    }, node)

    return () => context.revert()
  }, [reduced, y])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
