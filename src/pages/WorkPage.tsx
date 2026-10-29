import { ProjectGallery } from '../components/projects/ProjectGallery'
import { Seo } from '../components/ui/Seo'
import { ScrollReveal } from '../components/motion/ScrollReveal'

export function WorkPage() {
  return (
    <main id="main" className="px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <Seo
        title="Work"
        description="Selected design and software projects by Jayashree K — Medi Vision, SkillBridgeAI, BHOOMI-X, AssetFlow, and more."
        path="/work"
      />
      <div className="mx-auto max-w-7xl space-y-12">
        <ScrollReveal>
          <div className="border-b border-white/10 pb-8">
            <div className="flex items-center gap-3">
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-silver/70">
                Index 01 · Archive
              </span>
              <span className="h-px w-16 bg-white/20" aria-hidden="true" />
            </div>

            <h1 className="display mt-4 text-[clamp(2.6rem,7vw,5.5rem)] font-normal leading-[0.98] tracking-tight text-ivory">
              Selected Works & <br />
              <span className="font-display italic text-white">Digital Exhibits.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-silver/80 md:text-base">
              A curated collection of interface designs, computer vision prototypes, civic
              intelligence concepts, and studio brands developed across coursework, hackathons, and
              self-directed exploration.
            </p>
          </div>
        </ScrollReveal>

        <ProjectGallery />
      </div>
    </main>
  )
}
