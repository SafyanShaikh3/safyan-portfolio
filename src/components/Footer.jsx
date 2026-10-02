import { navLinks, profile } from '../data/content.js'
import { socialLinks } from '../lib/links.js'

export default function Footer() {
  return (
    <footer className="relative border-t border-base-700">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-ink-100">{profile.name}</p>
            <p className="mt-1 font-mono text-xs text-ink-500">{profile.headline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-ink-500 transition-colors hover:text-ink-100"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {socialLinks.length > 0 && (
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-600 text-ink-500 transition-colors hover:border-signal-blue/50 hover:text-ink-100"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-10 text-center font-mono text-xs text-ink-700">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind.
        </p>
      </div>
    </footer>
  )
}
