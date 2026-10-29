import { Seo } from '../components/ui/Seo'
import { SectionHeading } from '../components/ui/SectionHeading'
import { credentials } from '../content/credentials'
import type { Credential } from '../content/types'

const order: Credential['category'][] = [
  'Internship',
  'Internship recognition',
  'Hackathon participation',
  'Course certificate',
  'Educational achievement',
]

export function CredentialsPage() {
  return (
    <main id="main" className="px-6 pb-24 pt-28">
      <Seo
        title="Credentials"
        description="Course certificates, internship experience, and hackathon participation for Jayashree K."
        path="/credentials"
      />
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          eyebrow="Credentials"
          title="A study record."
          description="Course certificates are not professional qualifications. Participation is not an award."
        />
        {order.map((category) => {
          const items = credentials.filter((item) => item.category === category)
          if (items.length === 0) return null
          return (
            <section key={category}>
              <h2 className="eyebrow mb-6">{category}</h2>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {items.map((item) => (
                  <li key={item.id} className="grid gap-2 py-6 md:grid-cols-[1.4fr_1fr_0.8fr]">
                    <p className="text-lg text-ivory">{item.title}</p>
                    <p className="text-silver">{item.provider}</p>
                    <p className="text-sm text-olive">{item.date ?? item.period ?? 'Date not listed'}</p>
                    {item.description ? (
                      <p className="md:col-span-3 text-sm text-silver">{item.description}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </main>
  )
}
