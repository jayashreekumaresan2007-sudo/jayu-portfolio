import { Link } from 'react-router-dom'
import { navigation, site } from '../../content/site'
import { externalRel } from '../../lib/links'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-4xl text-ivory">{site.mark}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-silver">{site.intro}</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Index</p>
          <ul className="space-y-2 text-sm text-ivory">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2 text-sm text-ivory">
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
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs uppercase tracking-[0.18em] text-silver">
        {site.location} · Student work, 2025–2030
      </p>
    </footer>
  )
}
