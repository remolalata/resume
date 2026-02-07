import { experience, navLinks, profile, projects, references, skills } from '../resume'

describe('resume data', () => {
  it('contains required profile fields', () => {
    expect(profile.name).toBeTruthy()
    expect(profile.email).toContain('@')
    expect(profile.linkedin).toMatch(/^https:\/\//)
    expect(profile.resumeUrl).toMatch(/\.pdf$/)
  })

  it('contains non-empty collections', () => {
    expect(navLinks.length).toBeGreaterThan(0)
    expect(skills.length).toBeGreaterThan(0)
    expect(experience.length).toBeGreaterThan(0)
    expect(projects.length).toBeGreaterThan(0)
    expect(references.length).toBeGreaterThan(0)
  })

  it('ensures project links use https', () => {
    for (const project of projects) {
      expect(project.name).toBeTruthy()
      expect(project.tags.length).toBeGreaterThan(0)
      for (const link of project.links) {
        expect(link.href.startsWith('https://')).toBe(true)
      }
    }
  })
})
