import { render, screen } from '@testing-library/react'
import Footer from '../Footer'
import { profile } from '../../data/resume'

describe('Footer', () => {
  it('renders contact call-to-action and links', () => {
    render(<Footer profile={profile} />)

    expect(screen.getByRole('heading', { name: 'Let’s build something together.' })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(profile.email, 'i'))).toBeInTheDocument()

    const download = screen.getByRole('link', { name: 'Download Resume' })
    expect(download).toHaveAttribute('href', profile.resumeUrl)
    expect(download).toHaveAttribute('download')

    const linkedin = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedin).toHaveAttribute('href', profile.linkedin)
    expect(linkedin).toHaveAttribute('target', '_blank')
  })
})
