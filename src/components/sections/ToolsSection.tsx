import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../motion/ScrollReveal'

interface ToolItem {
  name: string
  icon: (props: { className?: string }) => React.JSX.Element
}

const tools: ToolItem[] = [
  {
    name: 'Figma',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 38 57" fill="none" aria-hidden="true">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: 'React',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
        <rect width="128" height="128" rx="16" fill="#3178C6"/>
        <path d="M70.3 84.7c1.8 3.1 4.5 5.5 8.2 7.2 3.7 1.7 8 2.6 13 2.6 4.3 0 8-.7 11.2-2.1 3.2-1.4 5.6-3.4 7.3-6 1.7-2.6 2.5-5.7 2.5-9.3 0-3.3-.8-6.1-2.4-8.5-1.6-2.4-3.8-4.3-6.8-5.8-3-1.5-6.8-2.9-11.4-4.2-4.1-1.2-7.4-2.4-10-3.6-2.6-1.2-4.5-2.6-5.8-4.2-1.3-1.6-1.9-3.6-1.9-6 0-2.6.7-4.8 2.1-6.7 1.4-1.9 3.4-3.4 5.9-4.4 2.5-1 5.5-1.6 8.9-1.6 3.6 0 6.9.7 9.8 2 2.9 1.3 5.3 3.3 7.1 5.8 1.8 2.5 2.8 5.6 3.1 9.2l-15.3 3.7c-.3-2.1-.9-3.8-1.9-5.1-1-1.3-2.4-2.2-4.2-2.8-1.8-.6-3.9-.9-6.3-.9-2.5 0-4.6.4-6.3 1.2-1.7.8-3 1.9-3.9 3.3-.9 1.4-1.3 3-1.3 4.8 0 1.9.5 3.5 1.6 4.8 1.1 1.3 2.7 2.4 4.8 3.3 2.1.9 4.8 1.8 8.1 2.8 5.4 1.6 9.8 3.3 13.2 5.2 3.4 1.9 5.9 4.2 7.5 7 1.6 2.8 2.4 6.2 2.4 10.2 0 4.2-1.1 7.9-3.3 11.1-2.2 3.2-5.4 5.7-9.5 7.5-4.1 1.8-9 2.7-14.7 2.7-6.2 0-11.6-1.2-16.1-3.6-4.5-2.4-7.9-5.8-10.2-10.2l14.7-6.5zM12 43.6h51v14.1H44.1v56.7H27.9V57.7H12V43.6z" fill="#FFF"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
        <path d="M63.8 6.2c-7.4 0-14.3.7-20.2 1.9-17.1 3.5-20.2 10.6-20.2 23.8v17.5h40.4v5.1H23.4c-13.2 0-24.8 7.9-28.4 23-4.1 17.3-4.3 28.1 0 45.4 3.2 13.5 11 23 24.2 23h15.7v-20.7c0-15.1 12.8-27.7 28.3-27.7h27.8c12.7 0 22.8-10.4 22.8-23V46.9c0-12.2-10.4-21.4-22.8-23.2-5.7-.9-12.8-1.5-21.2-1.5zM49 19.3c3.8 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8-6.8-3.1-6.8-6.8 3-6.8 6.8-6.8z" fill="#3776AB"/>
        <path d="M64.2 121.8c7.4 0 14.3-.7 20.2-1.9 17.1-3.5 20.2-10.6 20.2-23.8V78.6H64.2v-5.1h40.4c13.2 0 24.8-7.9 28.4-23 4.1-17.3 4.3-28.1 0-45.4-3.2-13.5-11-23-24.2-23H93.1v20.7c0 15.1-12.8 27.7-28.3 27.7H37c-12.7 0-22.8 10.4-22.8 23v28.6c0 12.2 10.4 21.4 22.8 23.2 5.7.9 12.8 1.5 21.2 1.5zM79 108.7c-3.8 0-6.8-3.1-6.8-6.8s3.1-6.8 6.8-6.8 6.8 3.1 6.8 6.8-3.1 6.8-6.8 6.8z" fill="#FFD43B"/>
      </svg>
    ),
  },
  {
    name: 'GSAP',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="#0AE448"/>
        <path d="M42 28h16v44H42z" fill="#000"/>
        <path d="M64 42h14v30H64z" fill="#000"/>
        <path d="M22 42h14v30H22z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'Three.js',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 128 128" fill="currentColor" aria-hidden="true">
        <path d="M64 14L18 38v52l46 24 46-24V38L64 14zm0 14l32 17-32 17-32-17 32-17zM28 49l31 16v34L28 83V49zm69 34l-31 16V65l31-16v34z" fill="#FFF"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 54 33" fill="none" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    name: 'Supabase',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 109 113" fill="none" aria-hidden="true">
        <path d="M63.7 110.3c-2.3 2.9-6.9 1.5-7.3-2.2L49.3 47.7h45.2c4.4 0 6.9 4.9 4.3 8.4L63.7 110.3z" fill="#3ECF8E"/>
        <path d="M45.1 2.7c2.3-2.9 6.9-1.5 7.3 2.2l7.1 60.4H14.3c-4.4 0-6.9-4.9-4.3-8.4L45.1 2.7z" fill="#249361"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 98 96" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#FFF"/>
      </svg>
    ),
  },
  {
    name: 'Canva',
    icon: ({ className = 'h-4 w-4' }) => (
      <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="15" fill="#00C4CC"/>
        <path d="M18.8 19.5c-1.3 0-2.3-.9-2.3-2.1 0-1.8 1.6-3 3.8-3.1.2.6.4 1.3.4 1.9 0 2-1 3.3-1.9 3.3zm2.5-6.8c-.8-.7-1.9-1.1-3.2-1.1-3.6 0-6.1 2.8-6.1 6.6 0 3.3 2 5.5 5.2 5.5 2.1 0 3.8-1.2 4.7-3.2l-1.6-.7c-.6 1.3-1.8 2-3.1 2-2 0-3.3-1.3-3.5-3.3h8.3c.1-.4.1-.9.1-1.4 0-1.8-.3-3.2-.8-4.4z" fill="#FFF"/>
      </svg>
    ),
  },
]

export function ToolsSection() {
  return (
    <section className="border-t border-white/10 bg-[#141413] px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        {/* Section title */}
        <ScrollReveal>
          <div className="flex items-center gap-3">
            <span className="text-[0.68rem] font-medium uppercase tracking-[0.24em] text-silver/70">
              Tools I Work With
            </span>
            <span className="h-px w-12 bg-white/20" aria-hidden="true" />
          </div>
        </ScrollReveal>

        {/* Tools row */}
        <ScrollReveal className="flex flex-1 flex-wrap items-center justify-start lg:justify-end gap-x-7 gap-y-3">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.name}
                className="group flex items-center gap-2 text-silver/70 transition-colors duration-200 hover:text-ivory"
              >
                <Icon className="h-4 w-4 opacity-70 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="text-xs font-normal tracking-wider">{tool.name}</span>
              </div>
            )
          })}
          <Link
            to="/toolkit"
            className="group ml-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] uppercase tracking-wider text-olive transition-all hover:border-olive hover:bg-olive/10 hover:text-ivory"
          >
            <span>Explore Atlas</span>
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
