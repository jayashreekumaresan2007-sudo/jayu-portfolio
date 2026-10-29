import { skillGroups } from '../../content/skills'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ButtonLink } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function SkillsPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Index 03"
          title="A capability map, not a scoreboard."
          description="Skills are grouped by how they are actually used — practiced, exploring, or still being learned."
        />
        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
          {skillGroups.slice(0, 6).map((group) => (
            <ScrollReveal key={group.id} className="bg-charcoal p-6">
              <p className="eyebrow">{group.stage}</p>
              <h3 className="mt-3 display text-2xl text-ivory">{group.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">{group.items.slice(0, 4).join(' · ')}</p>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink to="/skills" variant="line">
            Full capability map
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
