import { motion } from 'framer-motion'
import { Hammer, RefreshCw, Sprout } from 'lucide-react'
import { philosophy } from '../data/content.js'

const icons = { Learn: Sprout, Build: Hammer, Improve: RefreshCw }

export default function Philosophy() {
  return (
    <section className="relative py-28 md:py-36 bg-base-850/40">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-eyebrow text-signal-cyan mb-3">Approach</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-14">
          How I build
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {philosophy.map((p, i) => {
            const Icon = icons[p.title]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 hover:shadow-glow transition-shadow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-gradient mb-5">
                  <Icon size={20} className="text-base-950" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ink-100 mb-2">{p.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{p.detail}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
