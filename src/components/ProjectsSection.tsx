import type { ProjectItem } from '../data/resume'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'

type ProjectsSectionProps = {
  projects: ProjectItem[]
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16" id="projects">
      <SectionHeader
        title="Personal Projects"
        subtitle="A collection of side projects built to explore product ideas, UI craftsmanship, and modern web tooling."
      />
      <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-4 pt-1 sm:pb-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
