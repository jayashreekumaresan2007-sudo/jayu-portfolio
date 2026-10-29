import { AboutPreview } from '../components/sections/AboutPreview'
import { ContactCTA } from '../components/sections/ContactCTA'
import { CredentialsPreview } from '../components/sections/CredentialsPreview'
import { FeaturedProjects } from '../components/sections/FeaturedProjects'
import { Hero } from '../components/sections/Hero'
import { SkillsPreview } from '../components/sections/SkillsPreview'
import { SpecialtyRibbon } from '../components/sections/SpecialtyRibbon'
import { ToolsSection } from '../components/sections/ToolsSection'
import { Seo } from '../components/ui/Seo'

export function HomePage() {
  return (
    <main id="main">
      <Seo
        title="Home"
        description="JAYU® — The Specimen Book. The Immersive Digital Atelier of Jayashree K, Creative Technologist and UI/UX Designer."
        path="/"
      />
      {/* 1. Cinematic Hero inspired by reference mockup */}
      <Hero />

      {/* 2. Featured Projects directly under Hero */}
      <FeaturedProjects />

      {/* 3. Scrolling Specialty Ribbon */}
      <SpecialtyRibbon />

      {/* 4. Tools I Work With Bar */}
      <ToolsSection />

      {/* 5. Editorial About Me Preview */}
      <AboutPreview />

      {/* 6. Skills & Creative Capabilities */}
      <SkillsPreview />

      {/* 7. Verified Credentials */}
      <CredentialsPreview />

      {/* 8. Contact Call to Action */}
      <ContactCTA />
    </main>
  )
}
