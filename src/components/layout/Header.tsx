import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight, Sparkles, Sun, Moon, Menu, X } from 'lucide-react'
import { navigation, site } from '../../content/site'
import { cn } from '../../lib/cn'

export function Header() {
  const [open, setOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)

  function toggleTheme() {
    setLightMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('light-theme', next)
      return next
    })
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#151515]/80 px-5 py-2.5 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
        {/* Brand Mark with 4-point Star */}
        <NavLink
          to="/"
          end
          className="group flex items-center gap-2 text-ivory transition hover:text-white"
          data-cursor="Home"
        >
          <Sparkles className="h-3.5 w-3.5 text-olive transition-transform duration-300 group-hover:rotate-45" />
          <span className="display text-base font-semibold tracking-[0.2em]">{site.mark}</span>
        </NavLink>

        {/* Desktop Navigation with —•— active indicator */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative py-1 text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-200',
                  isActive ? 'font-medium text-ivory' : 'text-silver/70 hover:text-ivory',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive ? (
                    <span
                      className="absolute -bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1 text-olive"
                      aria-hidden="true"
                    >
                      <span className="h-px w-2 bg-olive/80" />
                      <span className="h-1 w-1 rounded-full bg-ivory" />
                      <span className="h-px w-2 bg-olive/80" />
                    </span>
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Let's Work CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme display"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-silver transition hover:border-olive hover:text-ivory"
          >
            {lightMode ? <Moon className="h-3.5 w-3.5 text-gold" /> : <Sun className="h-3.5 w-3.5" />}
          </button>

          <NavLink
            to="/contact"
            className="group flex items-center gap-1.5 rounded-full bg-ivory px-4 py-1.5 text-[0.72rem] font-medium tracking-[0.1em] !text-charcoal transition-all duration-300 hover:bg-ivory-dim hover:shadow-[0_0_20px_rgba(244,239,228,0.25)]"
          >
            <span>Let's Work</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </NavLink>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ivory"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open ? (
        <div
          id="mobile-nav"
          className="pointer-events-auto mx-auto mt-2 max-w-7xl md:hidden"
        >
          <div className="flex flex-col gap-1 rounded-3xl border border-white/10 bg-[#151515]/95 p-5 shadow-2xl backdrop-blur-2xl">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] transition-colors',
                    isActive ? 'bg-white/10 text-ivory font-medium' : 'text-silver/80 hover:text-ivory',
                  )
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
              <NavLink
                to="/contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ivory py-2.5 text-xs font-medium uppercase tracking-[0.12em] !text-charcoal"
                onClick={() => setOpen(false)}
              >
                <span>Let's Work</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </NavLink>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
