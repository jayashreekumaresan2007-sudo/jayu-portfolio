import { credentials } from '../../content/credentials'
import { ScrollReveal } from '../motion/ScrollReveal'
import { ButtonLink } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function CredentialsPreview() {
  const preview = credentials.slice(0, 4)

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Index 04" title="Verified study, not invented trophies." />
        <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {preview.map((item) => (
            <ScrollReveal key={item.id}>
              <li className="grid gap-3 py-6 md:grid-cols-[1fr_1fr_auto]">
                <p className="text-ivory">{item.title}</p>
                <p className="text-silver">{item.provider}</p>
                <p className="eyebrow">{item.category}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
        <div className="mt-8">
          <ButtonLink to="/credentials" variant="line">
            All credentials
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
