import { useRef } from 'react'
import type { ProjectItem } from '../data/resume'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

type ProjectsSectionProps = {
  projects: ProjectItem[]
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return

    const offset = Math.max(sliderRef.current.clientWidth * 0.7, 280)
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    })
  }

  return (
    <section className="py-16" id="projects">
      <SectionHeader
        title="Personal Projects"
        subtitle="A collection of side projects built to explore product ideas, UI craftsmanship, and modern web tooling."
      />
      <div className="mb-4 hidden justify-end gap-3 md:flex">
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          type="button"
          aria-label="Previous projects"
          onClick={() => handleScroll('left')}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
          type="button"
          aria-label="Next projects"
          onClick={() => handleScroll('right')}
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div
        ref={sliderRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-1 sm:pb-6 lg:snap-none"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
