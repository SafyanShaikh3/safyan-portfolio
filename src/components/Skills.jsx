import { motion } from 'framer-motion'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-base-850/40">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-eyebrow text-signal-violet mb-3">Skills</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-4">
          What I work with
        </h2>
        <p className="text-ink-300 max-w-xl mb-14">
          Tools I've actually shipped with — a native Android app, two MERN platforms, a LAMP
          rebuild and applied ML work — rather than a list of everything I've read about.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-shadow"
            >
              <h3 className="font-display text-sm font-semibold text-ink-100 mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-gradient" />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="rounded-lg border border-base-600 bg-base-800/70 px-3.5 py-2 text-xs font-mono text-ink-300 transition-colors hover:text-ink-100 hover:border-signal-blue/50 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
