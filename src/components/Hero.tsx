import { useEffect, useState } from 'react'
import type { NavLink, Profile } from '../data/resume'

type HeroProps = {
  profile: Profile
  navLinks: NavLink[]
}

function Hero({ profile, navLinks }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
    document.body.style.overflow = ''
  }, [menuOpen])

  return (
    <header className="relative overflow-hidden" id="top">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 lg:px-10">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-slate-200/70 bg-white/70 px-6 py-3 text-sm shadow-lg shadow-slate-200/60 backdrop-blur">
          <a className="text-lg font-semibold text-slate-900" href="#top">
            {profile.name}
          </a>
          <div className="hidden flex-wrap gap-4 text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a
                className="transition hover:text-cyan-700"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700 md:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
        <div
          className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 border-l border-slate-200/70 bg-white/95 p-6 shadow-2xl shadow-slate-300/40 transition-transform duration-300 md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
              Menu
            </span>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700"
              type="button"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="grid gap-4 text-base text-slate-600">
            {navLinks.map((link) => (
              <a
                className="transition hover:text-cyan-700"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Quick actions</p>
            <div className="mt-3 grid gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white"
                href={profile.resumeUrl}
                download
                onClick={() => setMenuOpen(false)}
              >
                Download Resume
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-cyan-200 px-4 py-2 text-xs font-semibold text-cyan-700"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </aside>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
              {profile.role}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              {profile.headline}
            </h1>
            <p className="text-base leading-relaxed text-slate-600" id="about">
              {profile.summary}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5"
                href={profile.resumeUrl}
                download
              >
                Download Resume
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
                href="#projects"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur">
            <div className="grid gap-4 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">Location</p>
                <p className="text-base text-slate-900">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">Phone</p>
                <p className="text-base text-slate-900">{profile.phone}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">Email</p>
                <p className="text-base text-slate-900">{profile.email}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">LinkedIn</p>
                <a
                  className="text-base text-cyan-700 hover:text-cyan-600"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.linkedin.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
