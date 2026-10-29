import { useEffect, useRef, useState } from 'react'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function CustomCursor() {
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const label = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')
  const enabled = fine && !reduced

  useEffect(() => {
    document.body.classList.toggle('has-custom-cursor', enabled)
    return () => document.body.classList.remove('has-custom-cursor')
  }, [enabled])

  useEffect(() => {
    if (!enabled) return

    let x = 0
    let y = 0
    let rx = 0
    let ry = 0
    let frame = 0

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`
      }
    }

    const onOver = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest('[data-cursor]')
      setText(target?.getAttribute('data-cursor') ?? '')
    }

    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      }
      if (label.current) {
        label.current.style.transform = `translate(${rx + 22}px, ${ry - 10}px)`
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerover', onOver)
    frame = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      cancelAnimationFrame(frame)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden lg:block" aria-hidden="true">
      <div ref={dot} className="absolute h-1.5 w-1.5 rounded-full bg-ivory" />
      <div
        ref={ring}
        className="absolute h-9 w-9 rounded-full border border-ivory/50"
        style={{ transform: text ? 'scale(1.15)' : undefined }}
      />
      <div ref={label} className="absolute text-[0.62rem] uppercase tracking-[0.22em] text-olive">
        {text}
      </div>
    </div>
  )
}
