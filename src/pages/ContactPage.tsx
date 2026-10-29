import { EnquiryForm } from '../components/sections/EnquiryForm'
import { GlassPanel } from '../components/ui/GlassPanel'
import { Seo } from '../components/ui/Seo'
import { site } from '../content/site'
import { externalRel } from '../lib/links'

export function ContactPage() {
  return (
    <main id="main" className="px-6 pb-24 pt-28">
      <Seo
        title="Contact"
        description="Contact Jayashree K for internships, design collaborations, and project enquiries."
        path="/contact"
      />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-4 text-[clamp(3rem,7vw,5.5rem)] leading-[0.9]">
            A letter to the atelier.
          </h1>
          <p className="mt-6 max-w-md text-silver">
            I read enquiries about internships, UI/UX and branding work, websites, and collaboration. Use
            the form or write directly.
          </p>
          <ul className="mt-10 space-y-3 text-ivory">
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.links.linkedin} target="_blank" rel={externalRel}>
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.links.github} target="_blank" rel={externalRel}>
                GitHub
              </a>
            </li>
            <li>
              <a href={site.links.playbookStudio} target="_blank" rel={externalRel}>
                Playbook Studio
              </a>
            </li>
            <li>
              <a href={site.links.templateHive} target="_blank" rel={externalRel}>
                Template Hive
              </a>
            </li>
          </ul>
        </div>
        <GlassPanel className="p-6 md:p-10">
          <EnquiryForm />
        </GlassPanel>
      </div>
    </main>
  )
}
