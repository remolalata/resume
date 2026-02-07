import { render, screen } from '@testing-library/react'
import App from './App'
import { experience, projects, references } from './data/resume'

describe('App', () => {
  it('renders all major resume sections', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /building scalable, accessible/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Core Tools & Technologies' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Professional Career' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Personal Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'References' })).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Download Resume' }).length).toBeGreaterThanOrEqual(2)

    expect(screen.getAllByRole('article').length).toBe(
      experience.length + projects.length + references.length,
    )
  })
})
