import type { ExperienceItem } from '../data/resume'
import SectionHeader from './SectionHeader'

type ExperienceSectionProps = {
  items: ExperienceItem[]
}

function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section className="py-16" id="experience">
      <SectionHeader
        title="Professional Career"
        subtitle="Leadership, delivery, and engineering impact across fintech and SaaS."
      />
      <div className="space-y-5">
        {items.map((item) => (
          <article
            className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-slate-200/70"
            key={`${item.company}-${item.dates}`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm text-cyan-700">{item.company}</p>
              </div>
              <span className="text-sm text-slate-500">{item.dates}</span>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
