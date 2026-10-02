import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, Github, X } from 'lucide-react'
import ProjectCover from './ProjectCover.jsx'
import { accentFor, hasLink } from '../lib/links.js'

/** Full detail view for a project: problem, approach, features and engineering notes. */
export default function ProjectModal({ project, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-base-950/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} — project details`}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-base-600 bg-base-900 shadow-2xl"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-base-600 bg-base-900/80 text-ink-300 backdrop-blur transition-colors hover:text-ink-100"
            >
              <X size={16} />
            </button>

            <ProjectCover project={project} tall />

            <div className="p-6 sm:p-9">
              <p
                className={`section-eyebrow mb-2 ${accentFor(project.accent).text}`}
              >
                {project.category} · {project.year}
              </p>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-500">{project.tagline}</p>

              {project.stats?.length > 0 && (
                <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {project.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-base-700 bg-base-850/70 px-4 py-3"
                    >
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="font-display text-lg font-semibold text-gradient">
                        {s.value}
                      </dd>
                      <dd className="mt-0.5 text-[11px] leading-snug text-ink-500">{s.label}</dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-8 space-y-6 text-sm">
                {project.problem && (
                  <div>
                    <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-signal-blue">
                      The problem
                    </p>
                    <p className="leading-relaxed text-ink-300">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-signal-violet">
                      The approach
                    </p>
                    <p className="leading-relaxed text-ink-300">{project.solution}</p>
                  </div>
                )}

                {project.features?.length > 0 && (
                  <div>
                    <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-signal-cyan">
                      What it does
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-ink-300">
                          <CheckCircle2
                            size={14}
                            className="mt-0.5 shrink-0 text-signal-cyan"
                            aria-hidden="true"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.highlights?.length > 0 && (
                  <div>
                    <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-ink-500">
                      Engineering notes
                    </p>
                    <div className="space-y-3">
                      {project.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-xl border border-base-700 bg-base-850/60 p-4"
                        >
                          <p className="font-display text-sm font-semibold text-ink-100">
                            {h.label}
                          </p>
                          <p className="mt-1.5 leading-relaxed text-ink-300">{h.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-base-600 bg-base-800 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(hasLink(project.github) || hasLink(project.demo)) && (
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {hasLink(project.github) && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-signal-blue/50"
                    >
                      <Github size={16} aria-hidden="true" /> Source
                    </a>
                  )}
                  {hasLink(project.demo) && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-xl bg-signal-gradient px-5 py-2.5 text-sm font-medium text-base-950 shadow-glow transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink size={16} aria-hidden="true" /> Live demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
