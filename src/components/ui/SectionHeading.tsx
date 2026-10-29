import { cn } from '../../lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
}: SectionHeadingProps) {
  return (
    <header className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2
        className={cn(
          'display text-[clamp(2rem,5vw,4.2rem)] leading-[0.95]',
          inverted ? 'text-charcoal' : 'text-ivory',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 max-w-xl text-base leading-relaxed',
            inverted ? 'text-charcoal/70' : 'text-silver',
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  )
}
