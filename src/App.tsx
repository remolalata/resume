import { useEffect, useState } from 'react'

type ExperienceItem = {
  company: string
  role: string
  dates: string
  bullets: string[]
}

type ProjectItem = {
  name: string
  description: string
  tags: string[]
}

type ReferenceItem = {
  name: string
  company: string
  role: string
  contact: string
}

const experience: ExperienceItem[] = [
  {
    company: 'Wink Reports',
    role: 'Frontend Developer',
    dates: 'Feb 2025 - Present',
    bullets: [
      'Led full-cycle development as the sole developer, owning feature design, implementation, and deployment.',
      'Designed and implemented new UX/UI strategies to improve user experience and interface consistency.',
      'Developed and maintained scalable front-end features using React, TypeScript, and Ant Design.',
    ],
  },
  {
    company: 'Cloud Employee - Travelex',
    role: 'Senior Front-End Engineer',
    dates: 'Jun 2022 - Jan 2025',
    bullets: [
      'Integrated Apple Pay into the client checkout funnel, streamlining the payment process and enhancing the user experience.',
      'Led integration of Monetate across multi-region applications to track and analyze page performance.',
      'Built key pages using React, TypeScript, and Tailwind CSS with dynamic REST API data.',
      'Led the team to achieve WCAG 2.1 certification through accessibility improvements across new and legacy pages.',
      'Supported production releases, resolving frontend issues including analytics and third-party library conflicts.',
    ],
  },
  {
    company: 'Accenture - Marriott',
    role: 'Advanced App Engineering Sr Analyst',
    dates: 'Jun 2021 - Apr 2022',
    bullets: [
      'Redesigned and rebuilt the client dashboard from a legacy app to React.js for better performance and scalability.',
      'Developed unit tests to improve reliability and reduce production bugs.',
      'Contributed to rotational code reviews and managed Git workflows for consistent quality.',
    ],
  },
  {
    company: 'NCH Customer Support Service',
    role: 'Mid-Weight Web Developer',
    dates: 'Dec 2017 - Jun 2021',
    bullets: [
      'Developed promotional pages and site enhancements for a gaming website to meet brand requirements.',
      'Built an internal React + Node.js task management app similar to Jira for daily operations.',
      'Created an A/B test experience powered by Graphite AI REST API, contributing to an EGR Award win.',
    ],
  },
  {
    company: 'Goldridge Web Design',
    role: 'Web Developer',
    dates: 'Mar 2017 - Nov 2017',
    bullets: [
      'Built a client gaming website using HTML, CSS, and Bootstrap with a responsive UI.',
      'Converted PSDs into responsive HTML layouts and handled ongoing frontend updates.',
      'Collaborated with international clients to deliver globally aligned projects.',
    ],
  },
]

const projects: ProjectItem[] = [
  {
    name: 'Apple Pay Checkout Integration',
    description:
      'Integrated Apple Pay to streamline checkout flows and improve conversion for a multi-region e-commerce platform.',
    tags: ['React', 'TypeScript', 'Payments'],
  },
  {
    name: 'Task Management Internal App',
    description:
      'Built a React + Node.js internal tool for task management and team collaboration, similar to Jira.',
    tags: ['React', 'Node.js', 'Workflow'],
  },
  {
    name: 'A/B Testing Experience (EGR Award)',
    description:
      'Developed a personalized A/B testing experience powered by Graphite AI data, contributing to an award-winning campaign.',
    tags: ['A/B Testing', 'REST API', 'Personalization'],
  },
]

const references: ReferenceItem[] = [
  {
    name: 'Jonas Diego',
    company: 'NCH Customer Support Service',
    role: 'Studio Manager',
    contact: '+63 917 827 2489',
  },
  {
    name: 'Maria Grigorova',
    company: 'NCH Customer Support Service',
    role: 'CX Manager',
    contact: 'margrigorova@gmail.com',
  },
  {
    name: 'Anthony Mapes',
    company: 'Travelex',
    role: 'Product Manager',
    contact: '+44 7545 328931',
  },
]

const skills = [
  {
    title: 'Markup & Styling',
    items: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'jQuery'],
  },
  {
    title: 'Build Tools',
    items: ['Vite', 'Webpack'],
  },
  {
    title: 'APIs & Testing',
    items: ['REST API', 'A/B Testing', 'Jest', 'React Testing Library', 'Vitest'],
  },
  {
    title: 'Version Control',
    items: ['Git', 'Bitbucket'],
  },
]

function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-white text-slate-900">
      <header className="relative overflow-hidden" id="top">
        <div className="absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
        </div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-10 lg:px-10">
          <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-slate-200/70 bg-white/70 px-6 py-3 text-sm shadow-lg shadow-slate-200/60 backdrop-blur">
            <a className="text-lg font-semibold text-slate-900" href="#top">
              Remo Antonio Lalata
            </a>
            <div className="hidden flex-wrap gap-4 text-slate-600 md:flex">
              <a className="transition hover:text-cyan-700" href="#about">
                About
              </a>
              <a className="transition hover:text-cyan-700" href="#skills">
                Skills
              </a>
              <a className="transition hover:text-cyan-700" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-cyan-700" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-cyan-700" href="#references">
                References
              </a>
              <a className="transition hover:text-cyan-700" href="#contact">
                Contact
              </a>
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
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
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
              <a className="transition hover:text-cyan-700" href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a className="transition hover:text-cyan-700" href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a className="transition hover:text-cyan-700" href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>
              <a className="transition hover:text-cyan-700" href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a className="transition hover:text-cyan-700" href="#references" onClick={() => setMenuOpen(false)}>
                References
              </a>
              <a className="transition hover:text-cyan-700" href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </nav>
            <div className="mt-auto rounded-2xl border border-cyan-100 bg-cyan-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Quick actions</p>
              <div className="mt-3 grid gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white"
                  href="/remo-antonio-lalata.pdf"
                  download
                  onClick={() => setMenuOpen(false)}
                >
                  Download Resume
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-cyan-200 px-4 py-2 text-xs font-semibold text-cyan-700"
                  href="https://linkedin.com/in/remolalata/"
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
                Frontend Developer
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Building scalable, accessible, and high-performing web experiences for modern teams.
              </h1>
              <p className="text-base leading-relaxed text-slate-600" id="about">
                Frontend Developer with 8+ years of experience creating scalable, high-performing, and
                accessible web applications. Proficient in React, JavaScript, and A/B testing, with a
                demonstrated ability to optimize performance and ensure compliance with accessibility
                standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5"
                  href="/remo-antonio-lalata.pdf"
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
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
                  <p className="text-base text-slate-900">Manaoag, Pangasinan</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Phone</p>
                  <p className="text-base text-slate-900">+63 906 356 2650</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</p>
                  <p className="text-base text-slate-900">lalata.remo@gmail.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">LinkedIn</p>
                  <a
                    className="text-base text-cyan-700 hover:text-cyan-600"
                    href="https://linkedin.com/in/remolalata/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/remolalata/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-10">
        <section className="py-16" id="skills">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Core Tools & Technologies
            </h2>
            <p className="text-slate-600">
              Focused on modern UI engineering, accessibility, and experimentation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill) => (
              <div
                className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70"
                key={skill.title}
              >
                <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                  {skill.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16" id="experience">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Professional Career
            </h2>
            <p className="text-slate-600">
              Leadership, delivery, and engineering impact across fintech and SaaS.
            </p>
          </div>
          <div className="space-y-5">
            {experience.map((item) => (
              <article
                className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/70"
                key={`${item.company}-${item.dates}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-sm text-cyan-700">{item.company}</p>
                  </div>
                  <span className="text-sm text-slate-500">{item.dates}</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16" id="projects">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">Selected Projects</h2>
            <p className="text-slate-600">Project highlights and outcomes tied to production impact.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70"
                key={project.name}
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-cyan-300/50 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16" id="references">
          <div className="mb-8 space-y-2">
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">References</h2>
            <p className="text-slate-600">Available upon request or contact directly.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {references.map((ref) => (
              <article
                className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70"
                key={ref.name}
              >
                <h3 className="text-lg font-semibold text-slate-900">{ref.name}</h3>
                <p className="text-sm text-cyan-700">{ref.company}</p>
                <p className="text-sm text-slate-600">{ref.role}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">{ref.contact}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-10" id="contact">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Let’s build something together.</h2>
            <p className="text-sm text-slate-600">Reach me at lalata.remo@gmail.com or connect on LinkedIn.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20"
              href="/remo-antonio-lalata.pdf"
              download
            >
              Download Resume
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
              href="https://linkedin.com/in/remolalata/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
