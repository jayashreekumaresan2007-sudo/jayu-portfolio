import { site } from '../../content/site'
import { cn } from '../../lib/cn'

interface PortraitFrameProps {
  size?: 'hero' | 'about'
  className?: string
  loading?: 'lazy' | 'eager'
  tone?: 'dark' | 'light'
}

export function PortraitFrame({
  size = 'about',
  className,
  loading,
  tone = 'dark',
}: PortraitFrameProps) {
  const isHero = size === 'hero'

  return (
    <figure className={cn('group relative select-none', className)}>
      <div
        className={cn(
          'relative overflow-hidden transition-all duration-500 ease-out',
          tone === 'light'
            ? 'border border-charcoal/15 bg-ivory-dim/40 shadow-[0_12px_40px_rgba(30,31,28,0.08)] group-hover:border-olive/60'
            : 'border border-olive/40 bg-surface/90 shadow-[0_20px_50px_rgba(0,0,0,0.45)] group-hover:border-olive group-hover:shadow-[0_25px_60px_rgba(138,140,104,0.12)]',
          isHero ? 'aspect-[4/5] w-full max-w-[220px]' : 'aspect-[4/5] w-full',
        )}
      >
        {/* Subtle corner registration accents for specimen atelier aesthetic */}
        <span
          className={cn(
            'pointer-events-none absolute left-1 top-1 z-10 h-2 w-2 border-l border-t transition-colors duration-500',
            tone === 'light'
              ? 'border-charcoal/40 group-hover:border-olive'
              : 'border-olive/70 group-hover:border-ivory',
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            'pointer-events-none absolute right-1 top-1 z-10 h-2 w-2 border-r border-t transition-colors duration-500',
            tone === 'light'
              ? 'border-charcoal/40 group-hover:border-olive'
              : 'border-olive/70 group-hover:border-ivory',
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            'pointer-events-none absolute bottom-1 left-1 z-10 h-2 w-2 border-b border-l transition-colors duration-500',
            tone === 'light'
              ? 'border-charcoal/40 group-hover:border-olive'
              : 'border-olive/70 group-hover:border-ivory',
          )}
          aria-hidden="true"
        />
        <span
          className={cn(
            'pointer-events-none absolute bottom-1 right-1 z-10 h-2 w-2 border-b border-r transition-colors duration-500',
            tone === 'light'
              ? 'border-charcoal/40 group-hover:border-olive'
              : 'border-olive/70 group-hover:border-ivory',
          )}
          aria-hidden="true"
        />

        {/* Real professional attire photograph - 100% authentic, no AI alteration */}
        <img
          src={site.portrait.src}
          alt={site.portrait.alt}
          width={isHero ? 360 : 853}
          height={isHero ? 432 : 1024}
          loading={loading ?? (isHero ? 'eager' : 'lazy')}
          decoding="async"
          className="h-full w-full object-cover object-[48%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />

        {/* Inner delicate hairline passe-partout */}
        <span
          className={cn(
            'pointer-events-none absolute inset-2.5 sm:inset-3 border transition-colors duration-500',
            tone === 'light'
              ? 'border-charcoal/10 group-hover:border-olive/30'
              : 'border-ivory/15 group-hover:border-olive/40',
          )}
          aria-hidden="true"
        />
      </div>

      {isHero ? (
        <figcaption className="mt-2 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.16em] text-silver/80">
          <span className="flex items-center gap-1">
            <span className="inline-block h-1 w-1 rounded-full bg-olive" aria-hidden="true" />
            <span>Plate · Hero</span>
          </span>
          <span className="text-ivory font-medium">{site.displayName}</span>
        </figcaption>
      ) : (
        <figcaption
          className={cn(
            'mt-3.5 flex items-baseline justify-between gap-4 text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-300',
            tone === 'light' ? 'text-charcoal/70' : 'text-silver/80',
          )}
        >
          <span className="flex items-center gap-1.5">
            <span
              className={cn(
                'inline-block h-1.5 w-1.5 rounded-full',
                tone === 'light' ? 'bg-olive' : 'bg-olive/80',
              )}
              aria-hidden="true"
            />
            <span>Plate 01 · Studio Portrait</span>
          </span>
          <span className={tone === 'light' ? 'text-charcoal/90 font-medium' : 'text-ivory'}>
            {site.name}
          </span>
        </figcaption>
      )}
    </figure>
  )
}
