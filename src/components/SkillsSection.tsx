import type { SkillGroup } from '../data/resume'
import SectionHeader from './SectionHeader'

type SkillsSectionProps = {
  skills: SkillGroup[]
}

function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-16" id="skills">
      <SectionHeader
        title="Core Tools & Technologies"
        subtitle="Focused on modern UI engineering, accessibility, and experimentation."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <div
            className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70"
            key={skill.title}
          >
            <h3 className="text-lg font-semibold text-slate-900">{skill.title}</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
