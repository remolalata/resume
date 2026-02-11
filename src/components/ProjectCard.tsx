import { useMemo, useState } from 'react'
import type { ProjectItem } from '../data/resume'

type ProjectCardProps = {
  project: ProjectItem
}

function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)
  const canToggleDescription = useMemo(() => project.description.length > 170, [project.description])

  return (
    <article className="flex min-w-[300px] flex-1 snap-start shrink-0 flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70 sm:min-w-[380px] lg:min-w-[420px]">
      {project.image ? (
        <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200/70">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="h-40 w-full object-cover object-top sm:h-48"
            loading="lazy"
          />
        </div>
      ) : null}
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
        <div className="mt-2 min-h-[5rem]">
          <p
            className="text-sm leading-6 text-slate-600"
            style={
              !expanded
                ? {
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }
                : undefined
            }
          >
            {project.description}
          </p>
          {canToggleDescription ? (
            <button
              className="mt-2 text-xs font-semibold text-cyan-700 transition hover:text-cyan-900"
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'See less' : 'See more'}
            </button>
          ) : null}
        </div>
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
      <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold">
        {project.links.map((link) => (
          <a
            className="inline-flex items-center justify-center rounded-full border border-cyan-200 px-4 py-2 text-cyan-700 transition hover:border-cyan-400 hover:bg-cyan-50"
            href={link.href}
            key={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard
