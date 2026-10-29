import { useState, useMemo, useRef, type MouseEvent } from 'react'
import { Search, X, Sparkles, Code2, Palette, Globe, Box, Database, Terminal, Compass, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  toolkitCategories,
  toolkitItems,
  type ToolCategory,
  type ExperienceLevel,
  type ToolItem,
} from '../../content/toolkit'
import { projects } from '../../content/projects'
import { useFinePointer } from '../../hooks/useFinePointer'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/cn'

const categoryIcons: Record<ToolCategory, typeof Sparkles> = {
  'ai-assistants': Sparkles,
  'ai-coding': Code2,
  design: Palette,
  frontend: Globe,
  'animation-3d': Box,
  backend: Database,
  deployment: Terminal,
  specialties: Compass,
}

const levelColors: Record<ExperienceLevel, string> = {
  Used: 'border-olive/60 bg-olive/15 text-olive font-medium',
  Exploring: 'border-gold/50 bg-gold/10 text-gold font-medium',
  Learning: 'border-silver/40 bg-white/5 text-silver font-medium',
}

function ToolCard({ tool }: { tool: ToolItem }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const fine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const Icon = categoryIcons[tool.category] || Sparkles

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (!fine || reduced || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 7}deg) scale3d(1.01, 1.01, 1.01)`
  }

  function onLeave() {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#171715]/95 p-5 shadow-lg transition-all duration-300 ease-out hover:border-olive/60 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
    >
      <div>
        {/* Top: Icon + Name + Experience Level */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-silver transition-colors group-hover:border-olive/50 group-hover:text-ivory">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-wide text-ivory transition-colors group-hover:text-white">
                {tool.name}
              </h3>
              <p className="text-[0.62rem] uppercase tracking-[0.18em] text-silver/60">
                {toolkitCategories.find((c) => c.id === tool.category)?.label}
              </p>
            </div>
          </div>

          {/* Level Pill */}
          <span
            className={cn(
              'rounded-full border px-2.5 py-0.5 text-[0.6rem] uppercase tracking-wider',
              levelColors[tool.level],
            )}
          >
            {tool.level}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3.5 text-xs leading-relaxed text-silver/80">
          {tool.description}
        </p>

        {/* Use Case Callout */}
        <div className="mt-3 rounded-lg border border-white/5 bg-white/[0.03] p-2.5 text-[0.7rem] text-silver/70">
          <span className="font-semibold uppercase tracking-wider text-ivory/80">Application: </span>
          {tool.useCase}
        </div>
      </div>

      {/* Bottom: Tags & Related Project */}
      <div className="mt-4 pt-3 border-t border-white/5">
        <div className="flex flex-wrap items-center gap-1.5">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[0.58rem] tracking-wider text-silver/65"
            >
              #{tag}
            </span>
          ))}
        </div>

        {tool.relatedProjects && tool.relatedProjects.length > 0 ? (
          <div className="mt-2.5 flex items-center gap-1.5 text-[0.66rem] text-silver/60">
            <span>Applied in:</span>
            {tool.relatedProjects.map((slug) => {
              const proj = projects.find((p) => p.slug === slug || p.id === slug)
              if (!proj) return null
              return (
                <Link
                  key={slug}
                  to={`/work/${proj.slug}`}
                  className="inline-flex items-center gap-0.5 font-medium text-olive hover:text-ivory transition-colors"
                >
                  <span>{proj.title}</span>
                  <ArrowUpRight className="h-2.5 w-2.5" />
                </Link>
              )
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function ToolkitAtlas() {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all')
  const [selectedLevel, setSelectedLevel] = useState<ExperienceLevel | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    return toolkitItems.filter((tool) => {
      const matchCategory = selectedCategory === 'all' || tool.category === selectedCategory
      const matchLevel = selectedLevel === 'all' || tool.level === selectedLevel
      const query = searchQuery.toLowerCase().trim()
      const matchSearch =
        query === '' ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.useCase.toLowerCase().includes(query) ||
        tool.tags.some((t) => t.toLowerCase().includes(query))
      return matchCategory && matchLevel && matchSearch
    })
  }, [selectedCategory, selectedLevel, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search input with search icon and clear button */}
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-silver/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 48 tools by name, tag, or use case..."
            className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-10 pr-10 text-xs text-ivory placeholder-silver/50 backdrop-blur-md outline-none transition focus:border-olive focus:bg-white/10"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-silver hover:text-ivory"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>

        {/* Experience Level Quick Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[0.66rem] uppercase tracking-[0.16em] text-silver/60 mr-1">Experience:</span>
          {(['all', 'Used', 'Exploring', 'Learning'] as const).map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setSelectedLevel(lvl)}
              className={cn(
                'rounded-full px-3 py-1 text-xs transition-all duration-200',
                selectedLevel === lvl
                  ? 'border border-olive bg-olive text-charcoal font-semibold shadow-sm'
                  : 'border border-white/10 bg-white/5 text-silver/80 hover:border-white/20 hover:text-ivory',
              )}
            >
              {lvl === 'all' ? 'All' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-5">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={cn(
            'rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300',
            selectedCategory === 'all'
              ? 'bg-ivory !text-charcoal font-semibold shadow-md'
              : 'border border-white/10 bg-white/5 text-silver hover:border-olive/50 hover:text-ivory',
          )}
        >
          All Categories ({toolkitItems.length})
        </button>

        {toolkitCategories.map((cat) => {
          const count = toolkitItems.filter((t) => t.category === cat.id).length
          const active = selectedCategory === cat.id
          const Icon = categoryIcons[cat.id]

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                'flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs tracking-wider transition-all duration-300',
                active
                  ? 'bg-ivory !text-charcoal font-semibold shadow-md'
                  : 'border border-white/10 bg-white/5 text-silver hover:border-olive/50 hover:text-ivory',
              )}
            >
              <Icon className="h-3.5 w-3.5 opacity-80" />
              <span>{cat.label}</span>
              <span className="text-[0.62rem] opacity-60">({count})</span>
            </button>
          )
        })}
      </div>

      {/* Results Count & Active Status Summary */}
      <div className="flex items-center justify-between text-xs text-silver/70">
        <p>
          Displaying <span className="text-ivory font-medium">{filteredItems.length}</span> of {toolkitItems.length} curated tools and technologies
        </p>
        {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all') ? (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedLevel('all')
            }}
            className="text-olive hover:underline"
          >
            Reset all filters
          </button>
        ) : null}
      </div>

      {/* Dynamic Grid of Cards */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <p className="eyebrow">Zero matches</p>
          <h3 className="display mt-2 text-2xl text-ivory">No tools found matching your search.</h3>
          <p className="mt-2 text-xs text-silver">
            Try adjusting your query or resetting category filters.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('all')
              setSelectedLevel('all')
            }}
            className="mt-5 rounded-full border border-olive px-4 py-2 text-xs uppercase tracking-wider text-ivory hover:bg-olive/20"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  )
}
