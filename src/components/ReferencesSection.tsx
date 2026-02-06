import type { ReferenceItem } from '../data/resume'
import SectionHeader from './SectionHeader'

type ReferencesSectionProps = {
  references: ReferenceItem[]
}

function ReferencesSection({ references }: ReferencesSectionProps) {
  return (
    <section className="py-16" id="references">
      <SectionHeader
        title="References"
        subtitle="Available upon request or contact directly."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {references.map((ref) => (
          <article
            className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-lg shadow-slate-200/70"
            key={ref.name}
          >
            <h3 className="text-lg font-semibold text-slate-900">{ref.name}</h3>
            <p className="text-sm text-cyan-700">{ref.company}</p>
            <p className="text-sm text-slate-600">{ref.role}</p>
            <p className="mt-3 text-sm font-semibold text-slate-900">{ref.contact}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ReferencesSection
