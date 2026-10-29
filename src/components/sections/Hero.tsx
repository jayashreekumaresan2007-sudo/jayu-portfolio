import { ArrowUpRight, FileText, Mouse } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '../../content/site'
import { ScrollReveal } from '../motion/ScrollReveal'
import { HeroVisual } from '../three/HeroVisual'

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-4 pt-24 pb-12 md:px-8 md:pt-28 lg:pt-32">
      {/* Ambient 3D kinetic sculpture in background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-30"
        aria-hidden="true"
      >
        <HeroVisual className="h-full w-full max-w-4xl" />
      </div>

      {/* Background ambient lighting and subtle radial glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-olive/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-10 h-[450px] w-[450px] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_1.15fr] lg:gap-12">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="z-10 flex flex-col justify-center">
          {/* Eyebrow with accent line and 01 */}
          <ScrollReveal y={12}>
            <div className="flex items-center gap-3">
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-silver/70">
                {site.atelier}
              </span>
              <span className="h-px w-16 bg-white/20" aria-hidden="true" />
              <span className="text-[0.68rem] font-mono tracking-widest text-silver/50">01</span>
            </div>
          </ScrollReveal>

          {/* Main Display Headline: Designs Ideas into Real Products. */}
          <ScrollReveal y={20} className="mt-6">
            <h1 className="display text-[clamp(2.8rem,7vw,5.5rem)] font-normal leading-[1.02] tracking-tight text-ivory">
              Designs <br />
              Ideas into <br />
              <span className="font-display italic text-white underline-offset-8">Real Products.</span>
            </h1>
          </ScrollReveal>

          {/* Supporting Narrative */}
          <ScrollReveal y={24} className="mt-6 max-w-lg">
            <p className="text-sm leading-relaxed text-silver/80 md:text-base md:leading-relaxed">
              I'm <span className="text-ivory font-medium">{site.name}</span>, a creative technologist
              and UI/UX designer exploring the intersection of design, technology and immersive
              experiences.
            </p>
          </ScrollReveal>

          {/* CTAs: View My Work & Download Resume */}
          <ScrollReveal y={28} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              data-cursor="Explore"
              className="group flex items-center gap-2 rounded-full bg-ivory px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] !text-charcoal transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(244,239,228,0.3)]"
            >
              <span>View My Work</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.14em] text-ivory backdrop-blur-md transition-all duration-300 hover:border-olive hover:bg-white/10"
            >
              <span>Download Resume</span>
              <FileText className="h-3.5 w-3.5 text-silver/70 transition-colors group-hover:text-ivory" />
            </a>
          </ScrollReveal>

          {/* Statistics Strip */}
          <ScrollReveal y={32} className="mt-12 border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center gap-8 md:gap-12 text-silver">
              <div>
                <p className="display text-2xl font-light text-ivory md:text-3xl">4+</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-silver/60">Projects</p>
              </div>
              <div className="h-8 w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="display text-2xl font-light text-ivory md:text-3xl">2</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-silver/60">Certifications</p>
              </div>
              <div className="h-8 w-px bg-white/10" aria-hidden="true" />
              <div>
                <p className="display text-2xl font-light text-ivory md:text-3xl">3+</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-silver/60">Tools & Frameworks</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Composition: Authentic Portrait & Editorial Atelier System */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative flex w-full max-w-[620px] flex-col gap-4 sm:flex-row sm:items-stretch">
            {/* The Authentic Portrait in Luxury Atelier Frame */}
            <div className="group relative aspect-[4/5] w-full sm:w-[58%] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a18] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              <img
                src={site.portrait.newSrc || site.portrait.src}
                alt={site.portrait.alt}
                width={819}
                height={1024}
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover object-[50%_15%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151515]/70 via-transparent to-transparent" />
              
              {/* Corner marks */}
              <span className="pointer-events-none absolute left-2.5 top-2.5 h-3 w-3 border-l-2 border-t-2 border-olive/70" />
              <span className="pointer-events-none absolute right-2.5 top-2.5 h-3 w-3 border-r-2 border-t-2 border-olive/70" />
              <span className="pointer-events-none absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-olive/70" />
              <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-olive/70" />
              
              {/* Inner hairline */}
              <span className="pointer-events-none absolute inset-3 rounded-xl border border-white/10" />

              {/* Bottom tag inside portrait */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-silver">
                <span>Plate · Studio</span>
                <span className="text-ivory font-medium">{site.displayName}</span>
              </div>
            </div>

            {/* Right Editorial Annotations Panel */}
            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-[#181816]/90 p-5 backdrop-blur-xl shadow-xl sm:p-6">
              {/* Top: Signature & Roles */}
              <div>
                <p className="font-signature text-3xl sm:text-4xl text-ivory/95">Jayashree K</p>
                <div className="mt-2 space-y-1 text-[0.68rem] uppercase tracking-[0.18em] text-silver/80">
                  <p>Creative Technologist</p>
                  <p>UI/UX Designer</p>
                  <p className="text-olive">Aspiring Software Engineer</p>
                </div>
                <div className="my-3.5 h-px w-10 bg-gold/70" />
              </div>

              {/* Middle: Available Status Badge */}
              <div className="rounded-xl border border-white/10 bg-[#151515]/80 p-3 shadow-md">
                <div className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-olive" />
                  </span>
                  <span>AVAILABLE</span>
                </div>
                <p className="mt-1 text-[0.66rem] leading-tight text-silver/90">
                  for freelance &<br />collaborations
                </p>
              </div>

              {/* Bottom: Vertical / Horizontal Discipline List */}
              <div className="mt-4 border-t border-white/10 pt-3">
                <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.22em] text-silver/60">
                  <span className="hover:text-ivory transition">Design</span>
                  <span>·</span>
                  <span className="hover:text-ivory transition">Develop</span>
                  <span>·</span>
                  <span className="hover:text-ivory transition">Create</span>
                  <span>·</span>
                  <span className="hover:text-ivory transition">Impact</span>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Scroll to Explore */}
          <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
            <span className="writing-vertical text-[0.6rem] uppercase tracking-[0.28em] text-silver/50">
              Scroll to explore
            </span>
            <div className="flex flex-col items-center">
              <Mouse className="h-4 w-4 text-silver/60" />
              <span className="mt-1 h-6 w-px animate-pulse bg-gradient-to-b from-olive to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
