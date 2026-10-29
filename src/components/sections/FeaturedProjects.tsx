import { useRef, type MouseEvent } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../../content/projects'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ScrollReveal } from '../motion/ScrollReveal'
import type { Project } from '../../content/types'

// The four featured projects from reference mockup
const featuredIds = ['medi-vision', 'skillbridgeai', 'bhoomi-x', 'assetflow']

function FeaturedProjectCard({
  project,
  indexNumber,
}: {
  project: Project
  indexNumber: string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!fine || reduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) scale3d(1.008, 1.008, 1.008)`
  }

  function onLeave() {
    if (!cardRef.current) return
    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative transition-transform duration-300 ease-out"
    >
      <Link
        to={`/work/${project.slug}`}
        data-cursor="View"
        className="block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#171715]/95 p-6 shadow-2xl transition-all duration-500 ease-out hover:border-olive/60 hover:shadow-[0_25px_60px_rgba(0,0,0,0.65)] sm:p-7 md:p-8"
      >
        <div className="grid h-full grid-cols-1 items-center gap-6 sm:grid-cols-[1.1fr_1.25fr] md:gap-7 lg:gap-8">
          {/* Left Column: Metadata & Editorial Typography */}
          <div className="flex h-full flex-col justify-between">
            <div>
              {/* Category label with horizontal line: 01 ── HEALTH TECH */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold tracking-wider text-ivory">
                  {indexNumber}
                </span>
                <span className="h-px w-6 bg-white/20" aria-hidden="true" />
                <span className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-silver/80">
                  {project.categoryLabel || project.categories[0]}
                </span>
              </div>

              {/* Display Title: e.g. Medi Vision */}
              <h3 className="display mt-4 text-3xl font-normal leading-[1.05] tracking-tight text-ivory transition-colors group-hover:text-white sm:text-3xl md:text-4xl">
                {project.title}
              </h3>

              {/* Subtitle: Touchless Medical Image Viewer */}
              <p className="mt-2 text-xs font-medium text-silver/90 sm:text-sm">
                {project.statusLabel}
              </p>

              {/* Narrative description */}
              <p className="mt-3.5 text-xs leading-relaxed text-silver/75 line-clamp-3">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom: Tech Stack Chips & Action Link */}
            <div className="mt-6 pt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[0.62rem] uppercase tracking-wider text-silver/80 transition-colors group-hover:border-white/20 group-hover:text-ivory"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Project → CTA */}
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ivory font-medium transition-colors group-hover:text-olive">
                <span>View Project</span>
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-silver transition-all duration-300 group-hover:border-olive group-hover:bg-olive group-hover:text-charcoal group-hover:translate-x-1"
                >
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Device Mockup Presentation */}
          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-white/10 bg-[#121210] shadow-inner sm:aspect-[4/3]">
            <img
              src={project.cover.src}
              alt={project.cover.alt}
              width={725}
              height={667}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
            />

            {/* Ambient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Corner registration marks */}
            <span className="pointer-events-none absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-white/20" />
            <span className="pointer-events-none absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-white/20" />
            <span className="pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-white/20" />
            <span className="pointer-events-none absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-white/20" />

            {/* Inner delicate hairline */}
            <span className="pointer-events-none absolute inset-1.5 rounded-lg border border-white/10" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export function FeaturedProjects() {
  const featured = featuredIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p))

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header matching reference mockup */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4">
              <h2 className="font-display italic text-lg uppercase tracking-[0.24em] text-ivory md:text-xl">
                Featured Projects
              </h2>
              <span className="hidden h-px w-24 bg-white/20 sm:inline-block" aria-hidden="true" />
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/work"
                className="group flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-silver/80 transition-colors hover:text-ivory"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/work"
                aria-label="View all projects in gallery"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-silver transition hover:border-olive hover:text-ivory"
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Clean 2x2 Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {featured.map((project, idx) => {
            const indexNumber = `0${idx + 1}`
            return (
              <ScrollReveal key={project.id} y={20 + idx * 8}>
                <FeaturedProjectCard project={project} indexNumber={indexNumber} />
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
