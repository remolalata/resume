import Hero from './components/Hero'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ReferencesSection from './components/ReferencesSection'
import Footer from './components/Footer'
import { experience, navLinks, profile, projects, references, skills } from './data/resume'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-white text-slate-900">
      <Hero profile={profile} navLinks={navLinks} />
      <main className="mx-auto w-full max-w-6xl px-6 pb-20 lg:px-10">
        <SkillsSection skills={skills} />
        <ExperienceSection items={experience} />
        <ProjectsSection projects={projects} />
        <ReferencesSection references={references} />
      </main>
      <Footer profile={profile} />
    </div>
  )
}

export default App
