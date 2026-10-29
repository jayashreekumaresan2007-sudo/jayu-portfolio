import { Sparkles } from 'lucide-react'

const specialties = [
  'Creative Technologist',
  'UI/UX Designer',
  '3D Web Experiences',
  'AI Explorer',
  'Framed by Jayu',
  'Template Hive',
]

export function SpecialtyRibbon() {
  return (
    <section
      aria-label="Specialty disciplines"
      className="relative overflow-hidden border-y border-white/10 bg-[#171715] py-4"
    >
      {/* Edge gradient masks for smooth fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#151515] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#151515] to-transparent" />

      <div className="animate-marquee flex items-center gap-10">
        {[...specialties, ...specialties, ...specialties].map((item, idx) => (
          <div key={idx} className="flex shrink-0 items-center gap-10">
            <span className="text-xs uppercase tracking-[0.24em] text-silver/80 transition-colors duration-200 hover:text-ivory">
              {item}
            </span>
            <Sparkles className="h-2.5 w-2.5 text-olive/80" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  )
}
