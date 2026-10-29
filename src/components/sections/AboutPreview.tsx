import { site } from '../../content/site'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ButtonLink } from '../ui/Button'
import { PortraitFrame } from '../ui/PortraitFrame'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutPreview() {
  return (
    <section className="bg-ivory px-6 py-24 text-charcoal">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <PortraitFrame size="about" tone="light" />
        </ScrollReveal>
        <ScrollReveal>
          <SectionHeading
            inverted
            eyebrow="Index 02"
            title="A student atelier, not a finished studio."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80 [&_h2]:text-charcoal">
            <p>
              {site.name} is currently studying {site.education.program} at{' '}
              {site.education.institution}. The work here is a record of designing, prototyping, and
              learning in public.
            </p>
            <p>
              Design is the practiced craft. Software engineering is the parallel path — built through
              prototypes, coursework, and honest iteration.
            </p>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-olive">
            CGPA {site.education.cgpa}
          </p>
          <div className="mt-8">
            <ButtonLink to="/about" variant="ghost" className="border-charcoal/20 text-charcoal hover:border-olive">
              Read the about page
            </ButtonLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
