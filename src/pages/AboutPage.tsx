import { ScrollReveal } from '../components/motion/ScrollReveal'
import { PortraitFrame } from '../components/ui/PortraitFrame'
import { Seo } from '../components/ui/Seo'
import { site } from '../content/site'

export function AboutPage() {
  return (
    <main id="main" className="px-6 pb-24 pt-28">
      <Seo
        title="About"
        description="About Jayashree K — Creative Technologist, UI/UX Designer, and Computer Science student at SKCET."
        path="/about"
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        {/* Sticky portrait column for luxury editorial presentation */}
        <div className="lg:sticky lg:top-28">
          <ScrollReveal>
            <PortraitFrame size="about" />
          </ScrollReveal>
          <ScrollReveal y={16} className="mt-6 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-[0.72rem] uppercase tracking-[0.2em] text-silver/70">
              <span>{site.location}</span>
              <span className="text-olive">{site.education.period}</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Narrative and credentials details */}
        <div>
          <ScrollReveal>
            <p className="eyebrow">Plate 01 · Identity</p>
            <h1 className="display mt-4 text-[clamp(3rem,8vw,5.5rem)] leading-[0.92] text-ivory">
              {site.name}
            </h1>
            <p className="mt-4 text-base font-normal tracking-wide text-olive">{site.headline}</p>
          </ScrollReveal>

          <ScrollReveal y={24} className="mt-10 space-y-5 text-base leading-relaxed text-silver">
            <p className="text-lg leading-relaxed text-ivory/90">{site.intro}</p>
            <p>
              I am a Computer Science student at {site.education.institution} in {site.education.location},
              enrolled in an {site.education.program} from {site.education.period}. The reported CGPA is{' '}
              <span className="text-ivory font-medium">{site.education.cgpa}</span>.
            </p>
            <p>
              The work splits across two honest tracks: branding and interface design, which I practice
              regularly; and software engineering, which I am building through coursework, prototypes, and
              tools like Python, Java, and React.
            </p>
            <p>
              I am interested in internships in UI/UX and software engineering, freelance design, and
              collaborations that treat craft and code as one practice. This site is a student atelier —
              not a claim of senior industry experience.
            </p>
          </ScrollReveal>

          <ScrollReveal y={32} className="mt-12">
            <dl className="grid gap-6 border-t border-white/10 pt-8 text-sm sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Education</dt>
                <dd className="mt-2 text-ivory">{site.education.program}</dd>
              </div>
              <div>
                <dt className="eyebrow">Institution</dt>
                <dd className="mt-2 text-ivory">{site.education.institution}</dd>
              </div>
              <div>
                <dt className="eyebrow">Program Period</dt>
                <dd className="mt-2 text-ivory">{site.education.period}</dd>
              </div>
              <div>
                <dt className="eyebrow">Academic Standing</dt>
                <dd className="mt-2 text-ivory">CGPA {site.education.cgpa}</dd>
              </div>
            </dl>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
