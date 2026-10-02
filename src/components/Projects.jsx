import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { projectCategories, projects } from '../data/content.js'
import { accentFor, hasLink } from '../lib/links.js'
import ProjectCover from './ProjectCover.jsx'
import ProjectModal from './ProjectModal.jsx'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3 text-signal-blue">Work</p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Things I've built
        </h2>
        <p className="mb-10 max-w-2xl text-ink-300">
          A native Android app, two full-stack commerce and booking platforms, a LAMP-stack
          rebuild, and applied machine-learning work. Open any card for the problem it solves and
          how it is put together.
        </p>

        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-12 flex flex-wrap gap-2"
        >
          {projectCategories.map((c) => {
            const selected = filter === c
            return (
              <button
                key={c}
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  selected
                    ? 'border-signal-blue/60 bg-signal-blue/10 text-ink-100'
                    : 'border-base-600 text-ink-500 hover:border-base-600 hover:text-ink-300'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {visible.map((project, i) => {
            const a = accentFor(project.accent)
            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass border transition-colors ${a.border}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(project)}
                  className="text-left"
                  aria-label={`Open details for ${project.title}`}
                >
                  <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                    <ProjectCover project={project} />
                  </div>
                </button>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold text-ink-100">
                      {project.title}
                    </h3>
                    {project.caseStudy && (
                      <span className="shrink-0 rounded-full border border-signal-cyan/40 bg-signal-cyan/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal-cyan">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className={`mt-1 text-xs ${a.text}`}>{project.tagline}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-base-600 bg-base-800 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="rounded-md border border-base-600 bg-base-800 px-2.5 py-1 font-mono text-[11px] text-ink-500">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-5">
                    <button
                      type="button"
                      onClick={() => setActive(project)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-ink-100 transition-colors hover:text-signal-cyan"
                    >
                      Case details
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                    {hasLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-300 transition-colors hover:text-ink-100"
                      >
                        <Github size={15} aria-hidden="true" /> Source
                      </a>
                    )}
                    {hasLink(project.demo) && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-signal-cyan transition-colors hover:text-ink-100"
                      >
                        <ExternalLink size={15} aria-hidden="true" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
