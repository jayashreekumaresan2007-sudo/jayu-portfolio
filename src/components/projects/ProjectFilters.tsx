import type { ProjectCategory } from '../../content/types'
import { cn } from '../../lib/cn'

export function ProjectFilters({
  categories,
  active,
  onChange,
}: {
  categories: ProjectCategory[]
  active: ProjectCategory | 'All'
  onChange: (value: ProjectCategory | 'All') => void
}) {
  const options: Array<ProjectCategory | 'All'> = ['All', ...categories]

  return (
    <div role="toolbar" aria-label="Filter projects" className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={active === option}
          className={cn(
            'rounded-full border px-4 py-2 text-[0.7rem] uppercase tracking-[0.16em] transition',
            active === option
              ? 'border-olive bg-olive/20 text-ivory'
              : 'border-white/15 text-silver hover:border-olive hover:text-ivory',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
