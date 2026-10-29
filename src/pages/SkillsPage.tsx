import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Seo } from '../components/ui/Seo'
import { projects } from '../content/projects'
import { exploredTools, skillGroups, stageCopy } from '../content/skills'

export function SkillsPage() {
  return (
    <main id="main" className="px-6 pb-24 pt-28">
      <Seo
        title="Skills"
        description="Capability map for Jayashree K spanning branding, UI/UX, frontend, and AI-assisted workflows."
        path="/skills"
      />
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          eyebrow="Skills"
          title="Practiced, exploring, learning."
          description="These groups describe current work, not measured professional proficiency. No skill bars."
        />

        {/* Banner linking to full interactive Toolkit Atlas */}
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-[#171715] p-6 shadow-xl sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-olive">Interactive Inventory</p>
            <h3 className="display mt-1 text-2xl text-ivory">Looking for specific software & tools?</h3>
            <p className="mt-1 text-xs text-silver/80">
              Explore the searchable atlas of 48 AI assistants, design apps, 3D engines, and backend platforms.
            </p>
          </div>
          <Link
            to="/toolkit"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-xs font-semibold uppercase tracking-wider !text-charcoal transition hover:bg-white"
          >
            <span>Open Tool Atlas</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-10">
          {skillGroups.map((group) => (
            <section key={group.id} className="border-t border-white/10 pt-8">
              <p className="eyebrow">{stageCopy[group.stage]}</p>
              <h2 className="display mt-2 text-4xl text-ivory">{group.title}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full border border-white/15 px-3 py-1 text-sm text-silver">
                    {item}
                  </li>
                ))}
              </ul>
              {group.relatedProjects && group.relatedProjects.length > 0 ? (
                <p className="mt-4 text-sm text-silver">
                  Seen in{' '}
                  {group.relatedProjects.map((id, index, list) => {
                    const project = projects.find((item) => item.id === id)
                    if (!project) return null
                    return (
                      <span key={id}>
                        <Link to={`/work/${project.slug}`} className="text-ivory underline-offset-4 hover:underline">
                          {project.title}
                        </Link>
                        {index < list.length - 1 ? ', ' : ''}
                      </span>
                    )
                  })}
                </p>
              ) : null}
            </section>
          ))}
        </div>
        <section>
          <h2 className="eyebrow">Tools explored</h2>
          <p className="mt-3 max-w-2xl text-sm text-silver">
            These have been tried or sampled. They are not listed as areas of expertise.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">{exploredTools.join(' · ')}</p>
        </section>
      </div>
    </main>
  )
}
