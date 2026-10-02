import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aiPipeline } from '../data/content.js'

export default function AISection() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden="true" />
      <div className="mx-auto max-w-5xl px-6 relative">
        <p className="section-eyebrow text-signal-blue mb-3 text-center">AI / ML Focus</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-center max-w-2xl mx-auto">
          Where software meets <span className="text-gradient">intelligence.</span>
        </h2>
        <p className="text-ink-300 text-center max-w-2xl mx-auto mt-6 leading-relaxed">
          My MCA specialization is AI and machine learning, and the way I approach it is the
          same as everything else: get the data honest first, keep the model understandable, and
          judge it on held-out error rather than on how good the notebook looks.
        </p>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {aiPipeline.map((stage, i) => (
            <div key={stage} className="flex items-center gap-4 md:gap-2 w-full md:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex-1 md:flex-none"
              >
                <div className="glass rounded-2xl px-6 py-8 text-center md:w-40 hover:shadow-glow transition-shadow">
                  <span
                    className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-signal-gradient text-base-950 font-display text-sm font-semibold animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-sm font-medium text-ink-100">{stage}</p>
                </div>
              </motion.div>

              {i < aiPipeline.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                  className="hidden md:block text-ink-700"
                >
                  <ArrowRight size={20} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
