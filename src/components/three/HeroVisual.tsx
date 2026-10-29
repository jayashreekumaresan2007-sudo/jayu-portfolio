import { lazy, Suspense, useState } from 'react'
import { hasWebGL } from '../../lib/webgl'
import { ErrorBoundary } from '../ui/ErrorBoundary'
import { SceneFallback } from './SceneFallback'
import { ThreeLoader } from './ThreeLoader'

const HeroScene = lazy(() => import('./HeroScene'))

export function HeroVisual({ className = 'h-full w-full' }: { className?: string }) {
  const [canRender3D] = useState(() => {
    if (typeof window === 'undefined') return false
    const small = window.matchMedia('(max-width: 767px)').matches
    return !small && hasWebGL()
  })

  if (!canRender3D) return null

  return (
    <ErrorBoundary fallback={<SceneFallback />}>
      <Suspense fallback={<ThreeLoader />}>
        <div className={className}>
          <HeroScene />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
