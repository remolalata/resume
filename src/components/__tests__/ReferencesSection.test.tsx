import { render, screen } from '@testing-library/react'
import ReferencesSection from '../ReferencesSection'
import { references } from '../../data/resume'

describe('ReferencesSection', () => {
  it('renders all references', () => {
    render(<ReferencesSection references={references} />)

    expect(screen.getByRole('heading', { name: 'References' })).toBeInTheDocument()
    for (const reference of references) {
      expect(screen.getByRole('heading', { name: reference.name })).toBeInTheDocument()
      expect(screen.getByText(reference.role)).toBeInTheDocument()
      expect(screen.getByText(reference.contact)).toBeInTheDocument()
    }

    for (const company of [...new Set(references.map((item) => item.company))]) {
      expect(screen.getAllByText(company).length).toBeGreaterThan(0)
    }
  })
})
