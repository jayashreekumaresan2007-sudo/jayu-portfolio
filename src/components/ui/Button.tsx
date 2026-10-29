import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

interface Shared {
  children: ReactNode
  className?: string
  variant?: 'solid' | 'ghost' | 'line'
}

type ButtonProps = Shared & ButtonHTMLAttributes<HTMLButtonElement>

const styles = {
  solid:
    'inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-5 py-2.5 text-sm font-medium tracking-[0.08em] !text-charcoal transition hover:bg-ivory-dim',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm tracking-[0.08em] text-ivory transition hover:border-olive hover:text-olive',
  line: 'inline-flex items-center gap-2 border-b border-olive pb-1 text-sm tracking-[0.12em] uppercase text-ivory transition hover:text-olive',
}

export function Button({ children, className, variant = 'solid', ...props }: ButtonProps) {
  return (
    <button className={cn(styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  className,
  variant = 'solid',
  external,
  cursorLabel,
}: Shared & { to: string; external?: boolean; cursorLabel?: string }) {
  const classNames = cn(styles[variant], className)
  if (external) {
    return (
      <a href={to} className={classNames} target="_blank" rel="noreferrer noopener" data-cursor={cursorLabel}>
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={classNames} data-cursor={cursorLabel}>
      {children}
    </Link>
  )
}
