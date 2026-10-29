import { useRef, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../content/types'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/cn'

export function ProjectCard({
  project,
  featured = false,
  index = 0,
}: {
  project: Project
  featured?: boolean
  index?: number
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const indexFormatted = String(index + 1).padStart(2, '0')

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    if (!fine || reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    ref.current.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 8}deg) scale3d(1.01, 1.01, 1.01)`
  }

  function onLeave() {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      data-cursor="View"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'group block origin-center transition-all duration-300 ease-out',
        featured ? 'lg:col-span-2' : '',
      )}
    >
      <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#171715] p-3 shadow-xl transition-all duration-500 ease-out group-hover:border-olive/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        {/* Card Thumbnail Container */}
        <div
          className={cn(
            'relative w-full overflow-hidden rounded-xl bg-black/40',
            featured ? 'aspect-[16/9] md:aspect-[21/9]' : 'aspect-[16/10]',
          )}
        >
          <img
            src={project.cover.src}
            alt={project.cover.alt}
            width={800}
            height={500}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          />

          {/* Top Overlays: Index Badge and Status */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="rounded-md border border-white/10 bg-black/70 px-2 py-0.5 font-mono text-[0.62rem] font-medium tracking-wider text-ivory backdrop-blur-md">
              {indexFormatted}
            </span>
            <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-wider text-silver backdrop-blur-md">
              {project.statusLabel}
            </span>
          </div>

          {/* Inner hairline frame */}
          <span
            className="pointer-events-none absolute inset-1.5 rounded-lg border border-white/10"
            aria-hidden="true"
          />
        </div>

        {/* Card Content */}
        <div className="mt-4 px-2 pb-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-[0.64rem]">{project.categories[0]}</p>
              <h3 className="display mt-1 text-2xl font-normal tracking-tight text-ivory transition-colors group-hover:text-white md:text-3xl">
                {project.title}
              </h3>
            </div>

            {/* Circular Action Button */}
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-silver transition-all duration-300 group-hover:border-ivory group-hover:bg-ivory group-hover:text-charcoal"
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-silver/80 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-white/5 pt-3">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[0.58rem] uppercase tracking-wider text-silver/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
