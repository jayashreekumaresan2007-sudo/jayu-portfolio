import { useMemo, useState } from 'react'
import { getUsedCategories, projects } from '../../content/projects'
import type { ProjectCategory } from '../../content/types'
import { ProjectCard } from './ProjectCard'
import { ProjectFilters } from './ProjectFilters'

export function ProjectGallery() {
  const categories = useMemo(() => getUsedCategories(), [])
  const [active, setActive] = useState<ProjectCategory | 'All'>('All')

  const visible =
    active === 'All' ? projects : projects.filter((project) => project.categories.includes(active))

  return (
    <div className="space-y-10">
      <ProjectFilters categories={categories} active={active} onChange={setActive} />
      {visible.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-[#161614] p-12 text-center text-silver">
          <p className="display text-xl text-ivory">Archive Entry Pending</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-silver/60">
            No documented exhibits in this category at this moment.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0 && active === 'All'}
            />
          ))}
        </div>
      )}
    </div>
  )
}
