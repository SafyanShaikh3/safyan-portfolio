import { motion } from 'framer-motion'
import { Bell, CheckCircle2, ExternalLink, Fingerprint, Github, WifiOff } from 'lucide-react'
import { caseStudy } from '../data/content.js'
import { hasLink } from '../lib/links.js'
import PhoneMockup from './PhoneMockup.jsx'

const badges = [
  { icon: WifiOff, label: 'Fully offline' },
  { icon: Fingerprint, label: 'Biometric lock' },
  { icon: Bell, label: 'Background reminders' },
]

export default function FeaturedProject() {
  const fp = caseStudy
  if (!fp) return null

  return (
    <section id="case-study" className="relative bg-base-850/40 py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow mb-3 text-signal-cyan">Case Study</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          {fp.title}
        </h2>
        <p className="mt-3 max-w-2xl text-ink-300">{fp.tagline}</p>

        <div className="mt-14 grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[280px] md:mx-0"
          >
            <div
              className="absolute -inset-6 rounded-[3rem] bg-signal-gradient-soft blur-3xl"
              aria-hidden="true"
            />
            <PhoneMockup />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-8 flex flex-wrap gap-2">
              {badges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-base-600 bg-base-800/60 px-3 py-1.5 font-mono text-[11px] text-ink-300"
                >
                  <Icon size={12} className="text-signal-cyan" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-signal-blue">
                  The problem
                </p>
                <p className="leading-relaxed text-ink-300">{fp.problem}</p>
              </div>
              <div>
                <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-signal-violet">
                  The approach
                </p>
                <p className="leading-relaxed text-ink-300">{fp.solution}</p>
              </div>
              <div>
                <p className="mb-2.5 font-mono text-xs uppercase tracking-widest text-signal-cyan">
                  Key features
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {fp.features.map((f) => (
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
            </div>

            {fp.highlights?.length > 0 && (
              <div className="mt-8 space-y-3">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-500">
                  Engineering notes
                </p>
                {fp.highlights.slice(0, 3).map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-base-700 bg-base-900/60 p-4"
                  >
                    <p className="font-display text-sm font-semibold text-ink-100">{h.label}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{h.detail}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {fp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-base-600 bg-base-800 px-2.5 py-1 font-mono text-[11px] text-ink-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {(hasLink(fp.github) || hasLink(fp.demo)) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {hasLink(fp.github) && (
                  <a
                    href={fp.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium text-ink-100 transition-colors hover:border-signal-blue/50"
                  >
                    <Github size={16} aria-hidden="true" /> Source
                  </a>
                )}
                {hasLink(fp.demo) && (
                  <a
                    href={fp.demo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-xl bg-signal-gradient px-5 py-2.5 text-sm font-medium text-base-950 shadow-glow transition-transform hover:scale-[1.03]"
                  >
                    <ExternalLink size={16} aria-hidden="true" /> Download APK
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {fp.stats?.length > 0 && (
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {fp.stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass px-5 py-5">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-gradient">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-ink-500">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        )}
      </div>
    </section>
  )
}
