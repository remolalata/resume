import { render, screen } from '@testing-library/react'
import ExperienceSection from '../ExperienceSection'
import { experience } from '../../data/resume'

describe('ExperienceSection', () => {
  it('renders all experience entries', () => {
    render(<ExperienceSection items={experience} />)

    expect(screen.getByRole('heading', { name: 'Professional Career' })).toBeInTheDocument()
    for (const item of experience) {
      expect(screen.getByRole('heading', { name: item.role })).toBeInTheDocument()
      expect(screen.getByText(item.company)).toBeInTheDocument()
      expect(screen.getByText(item.dates)).toBeInTheDocument()
      for (const bullet of item.bullets) {
        expect(screen.getByText(bullet)).toBeInTheDocument()
      }
    }
  })
})
