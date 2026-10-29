import { ScrollReveal } from '../components/motion/ScrollReveal'
import { ToolkitAtlas } from '../components/toolkit/ToolkitAtlas'
import { Seo } from '../components/ui/Seo'

export function ToolkitPage() {
  return (
    <main id="main" className="px-4 pb-24 pt-28 md:px-8">
      <Seo
        title="AI Tools & Technology Toolkit"
        description="Searchable inventory of AI assistants, coding environments, UI/UX software, frontend frameworks, 3D engines, and backend platforms explored by Jayashree K."
        path="/toolkit"
      />
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <ScrollReveal>
          <div className="border-b border-white/10 pb-8">
            <p className="eyebrow">Index 04 · Technological Specimen</p>
            <h1 className="display mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-none text-ivory">
              AI Tools & <br />
              <span className="italic text-white">Technology Toolkit.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-silver/80 md:text-base">
              A comprehensive, searchable inventory of AI assistants, agentic builders, design applications,
              modern frontend frameworks, 3D renderers, and backend platforms utilized in my creative engineering workflows.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Atlas */}
        <div className="mt-10">
          <ToolkitAtlas />
        </div>
      </div>
    </main>
  )
}
