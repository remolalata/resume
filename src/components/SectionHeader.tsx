type SectionHeaderProps = {
  title: string
  subtitle: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8 space-y-2">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      <p className="text-slate-600">{subtitle}</p>
    </div>
  )
}

export default SectionHeader
