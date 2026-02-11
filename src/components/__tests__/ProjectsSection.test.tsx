import { render, screen } from '@testing-library/react'
import ProjectsSection from '../ProjectsSection'
import { projects } from '../../data/resume'

describe('ProjectsSection', () => {
  it('renders project slider with all projects', () => {
    render(<ProjectsSection projects={projects} />)

    expect(screen.getByRole('heading', { name: 'Personal Projects' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous projects' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next projects' })).toBeInTheDocument()
    for (const project of projects) {
      expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument()
    }
  })
})
