import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'
import { projects } from '../../data/resume'

describe('ProjectCard', () => {
  it('renders project details with image and links', () => {
    const project = projects[0]
    render(<ProjectCard project={project} />)

    expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
    expect(screen.getByAltText(project.image!.alt)).toBeInTheDocument()

    for (const tag of project.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }

    for (const link of project.links) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders without image when image is not provided', () => {
    render(
      <ProjectCard
        project={{
          name: 'No Image Project',
          description: 'description',
          tags: ['React'],
          links: [{ label: 'GitHub Repo', href: 'https://example.com' }],
        }}
      />,
    )

    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
