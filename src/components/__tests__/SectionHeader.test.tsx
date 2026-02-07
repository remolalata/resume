import { render, screen } from '@testing-library/react'
import SectionHeader from '../SectionHeader'

describe('SectionHeader', () => {
  it('renders title and subtitle', () => {
    render(<SectionHeader title="My Title" subtitle="My subtitle" />)

    expect(screen.getByRole('heading', { name: 'My Title' })).toBeInTheDocument()
    expect(screen.getByText('My subtitle')).toBeInTheDocument()
  })
})
