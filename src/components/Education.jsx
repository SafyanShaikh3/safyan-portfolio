import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { education, experience } from '../data/content.js'

export default function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <p className="section-eyebrow mb-3 text-signal-blue">Education</p>
        <h2 className="mb-14 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Academic background
        </h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-5 rounded-2xl glass p-6 transition-colors hover:border-signal-blue/40 md:p-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-600 bg-signal-gradient-soft">
                <GraduationCap size={20} className="text-signal-cyan" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink-100">
                    {edu.degree}
                  </h3>
                  {edu.status && (
                    <span className="rounded-full border border-base-600 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                      {edu.status}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-ink-300">{edu.institute}</p>
                {edu.detail && (
                  <p className="mt-2 text-xs leading-relaxed text-ink-500">{edu.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {experience?.length > 0 && (
          <>
            <p className="section-eyebrow mb-6 mt-16 text-signal-cyan">Experience</p>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-5 rounded-2xl glass p-6 transition-colors hover:border-signal-cyan/40 md:p-8"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-base-600 bg-signal-gradient-soft">
                    <Briefcase size={19} className="text-signal-cyan" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink-100">
                        {job.role}
                      </h3>
                      {job.period && (
                        <span className="rounded-full border border-base-600 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                          {job.period}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-ink-300">
                      {job.company}
                      {job.location && <span className="text-ink-500"> · {job.location}</span>}
                    </p>
                    {job.detail && (
                      <p className="mt-2 text-xs leading-relaxed text-ink-500">{job.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
