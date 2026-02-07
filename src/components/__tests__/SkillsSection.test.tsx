import { render, screen } from '@testing-library/react'
import SkillsSection from '../SkillsSection'
import { skills } from '../../data/resume'

describe('SkillsSection', () => {
  it('renders all skill groups and items', () => {
    render(<SkillsSection skills={skills} />)

    expect(screen.getByRole('heading', { name: 'Core Tools & Technologies' })).toBeInTheDocument()
    for (const group of skills) {
      expect(screen.getByRole('heading', { name: group.title })).toBeInTheDocument()
      for (const item of group.items) {
        expect(screen.getByText(item)).toBeInTheDocument()
      }
    }
  })
})
