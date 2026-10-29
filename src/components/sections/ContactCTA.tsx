import { site } from '../../content/site'
import { MagneticButton } from '../motion/MagneticButton'
import { ButtonLink } from '../ui/Button'
import { GlassPanel } from '../ui/GlassPanel'

export function ContactCTA() {
  return (
    <section className="px-6 py-16">
      <GlassPanel className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center md:p-12">
        <div>
          <p className="eyebrow">Open for internships and collaborations</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,4rem)] leading-[0.95]">
            Write to {site.displayName}.
          </h2>
        </div>
        <MagneticButton>
          <ButtonLink to="/contact">Open contact</ButtonLink>
        </MagneticButton>
      </GlassPanel>
    </section>
  )
}
