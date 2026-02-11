import { fireEvent, render, screen } from '@testing-library/react'
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

  it('supports see more and see less for long descriptions', () => {
    const longProject = {
      name: 'Long Description Project',
      description:
        'This is a long description for a project that is intentionally verbose so the component can show the see more toggle and then expand the content when requested by the user interaction in the slider card layout.',
      tags: ['React'],
      links: [{ label: 'GitHub Repo', href: 'https://example.com' }],
    }

    render(<ProjectCard project={longProject} />)

    const toggle = screen.getByRole('button', { name: 'See more' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'See less' })).toHaveAttribute('aria-expanded', 'true')
  })
})
