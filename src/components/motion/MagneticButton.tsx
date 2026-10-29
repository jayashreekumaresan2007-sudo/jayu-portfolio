import { useRef, type MouseEvent, type ReactNode } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/cn'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!fine || reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
  }

  function onLeave() {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <div
      ref={ref}
      className={cn('inline-flex will-change-transform transition-transform duration-200 ease-out', className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
