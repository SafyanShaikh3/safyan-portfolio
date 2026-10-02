import { motion } from 'framer-motion'
import { journeySteps } from '../data/content.js'

export default function Journey() {
  return (
    <section id="journey" className="relative bg-base-850/40 py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <p className="section-eyebrow mb-3 text-signal-violet">Journey</p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
          How I got here
        </h2>
        <p className="mb-16 max-w-xl text-ink-300">
          Not an employment history — the path that shaped how I build: each stage added a stack,
          and each stack changed how I think about the one before it.
        </p>

        <ol className="relative">
          <div
            className="absolute bottom-0 left-[15px] top-0 w-px bg-base-600 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {journeySteps.map((step, i) => (
              <motion.li
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-center gap-5 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <span
                  className="absolute left-0 h-[10px] w-[10px] rounded-full bg-signal-gradient shadow-glow md:left-1/2 md:-translate-x-1/2"
                  aria-hidden="true"
                />
                <div
                  className={`w-full pl-10 md:w-[calc(50%-2.5rem)] md:pl-0 ${
                    i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'
                  }`}
                >
                  <div className="inline-block max-w-sm rounded-xl glass px-5 py-4">
                    <p className="font-display text-sm font-semibold text-ink-100">
                      {step.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-500">{step.detail}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  )
}
