import type { Profile } from '../data/resume'

type FooterProps = {
  profile: Profile
}

function Footer({ profile }: FooterProps) {
  return (
    <footer className="border-t border-slate-200/80 bg-white/80">
      <div
        className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-10 lg:px-10"
        id="contact"
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Let’s build something together.</h2>
          <p className="text-sm text-slate-600">
            Reach me at {profile.email} or connect on LinkedIn.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20"
            href={profile.resumeUrl}
            download
          >
            Download Resume
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-700"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
