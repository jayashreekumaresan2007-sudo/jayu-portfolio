import { projects } from '../../content/projects'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ProjectCard } from '../projects/ProjectCard'
import { ButtonLink } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function SelectedWork() {
  const selected = projects.slice(0, 4)

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <SectionHeading
          eyebrow="Index 01"
          title="Selected specimens"
          description="Six projects live in the atelier. Four are previewed here; the full index is on Work."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {selected.map((project, index) => (
            <ScrollReveal key={project.id}>
              <ProjectCard project={project} featured={index === 0} />
            </ScrollReveal>
          ))}
        </div>
        <ButtonLink to="/work" variant="line">
          Open the full gallery
        </ButtonLink>
      </div>
    </section>
  )
}
