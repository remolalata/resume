import { fireEvent, render, screen, within } from '@testing-library/react'
import Hero from '../Hero'
import { navLinks, profile } from '../../data/resume'

describe('Hero', () => {
  it('renders hero content and contact metadata', () => {
    render(<Hero profile={profile} navLinks={navLinks} />)

    expect(screen.getByRole('heading', { name: profile.headline })).toBeInTheDocument()
    expect(screen.getByText(profile.summary)).toBeInTheDocument()
    expect(screen.getByText(profile.location)).toBeInTheDocument()
    expect(screen.getByText(profile.phone)).toBeInTheDocument()
    expect(screen.getByText(profile.email)).toBeInTheDocument()
  })

  it('opens and closes mobile menu', () => {
    const { container } = render(<Hero profile={profile} navLinks={navLinks} />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)

    const drawer = screen.getByLabelText('Mobile navigation')
    expect(drawer.className).toContain('translate-x-0')
    expect(document.body.style.overflow).toBe('hidden')

    const overlay = container.querySelector('[aria-hidden="true"]')
    expect(overlay).not.toBeNull()
    if (!overlay) {
      throw new Error('Expected mobile overlay to exist')
    }

    fireEvent.click(overlay)
    expect(drawer.className).toContain('translate-x-full')
    expect(document.body.style.overflow).toBe('')
  })

  it('closes mobile menu from close button', () => {
    render(<Hero profile={profile} navLinks={navLinks} />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const drawer = screen.getByLabelText('Mobile navigation')
    expect(drawer.className).toContain('translate-x-0')

    fireEvent.click(screen.getByRole('button', { name: 'Close navigation' }))
    expect(drawer.className).toContain('translate-x-full')
    expect(document.body.style.overflow).toBe('')
  })

  it('closes mobile menu when navigation and quick action links are clicked', () => {
    render(<Hero profile={profile} navLinks={navLinks} />)

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const drawer = screen.getByLabelText('Mobile navigation')
    fireEvent.click(within(drawer).getByRole('link', { name: 'About' }))
    expect(drawer.className).toContain('translate-x-full')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    fireEvent.click(within(drawer).getByRole('link', { name: 'Projects' }))
    expect(drawer.className).toContain('translate-x-full')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const downloadLink = within(drawer).getByRole('link', { name: 'Download Resume' })
    downloadLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(downloadLink)
    expect(drawer.className).toContain('translate-x-full')

    fireEvent.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    const linkedinLink = within(drawer).getByRole('link', { name: 'LinkedIn' })
    linkedinLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(linkedinLink)
    expect(drawer.className).toContain('translate-x-full')
  })
})
