import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { interests, profile, stats } from '../data/content.js'
import { hasLink } from '../lib/links.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('')

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="section-eyebrow mb-3 text-signal-blue"
        >
          About
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeUp}
          className="mb-14 font-display text-3xl font-semibold tracking-tight md:text-5xl"
        >
          A little about me
        </motion.h2>

        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm md:mx-0"
          >
            <div
              className="absolute -inset-3 rounded-[2rem] bg-signal-gradient-soft blur-2xl"
              aria-hidden="true"
            />
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.75rem] glass">
              {hasLink(profile.photo) ? (
                <>
                  {/* the portrait is a transparent cut-out, so it sits on the site's own
                      backdrop rather than carrying a studio-grey rectangle with it */}
                  <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
                  <div
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-signal-blue/10 to-transparent"
                    aria-hidden="true"
                  />
                  <picture>
                    <source srcSet={profile.photo} type="image/webp" />
                    <img
                      src={profile.photoFallback || profile.photo}
                      alt={`${profile.name}, ${profile.headline}`}
                      width="760"
                      height="950"
                      loading="lazy"
                      decoding="async"
                      className="relative h-full w-full object-cover object-top"
                    />
                  </picture>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden="true" />
                  <span
                    className="relative font-display text-7xl font-semibold text-gradient"
                    aria-hidden="true"
                  >
                    {initials}
                  </span>
                  <span className="sr-only">{profile.name}</span>
                </>
              )}
            </div>
          </motion.div>

          <div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="space-y-4 text-base leading-relaxed text-ink-300 md:text-lg"
            >
              <p>
                I'm Safyan Shaikh, an MCA student at D Y Patil University specializing in AI and
                machine learning, with a BCA behind me and a habit of finishing what I start.
              </p>
              <p>
                My work spans three stacks on purpose. I built{' '}
                <span className="text-ink-100">CardSense</span>, a native Android expense manager
                that runs entirely offline, down to the WorkManager job that posts your payment
                reminders while the app is closed. Before that, MERN platforms for e-commerce and
                ticket booking — and the same booking system rebuilt in plain PHP and MySQL,
                because frameworks hide the parts worth understanding.
              </p>
              <p>
                What ties it together is a preference for software that is actually finished:
                handles the empty state, survives a cold start, and respects the person using it.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2"
            >
              {interests.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-base-600 bg-base-800/60 px-3.5 py-1.5 font-mono text-xs text-ink-300"
                >
                  <Sparkles size={12} className="text-signal-cyan" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.dl
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl glass px-5 py-4 transition-colors hover:border-signal-blue/40"
                >
                  <dt className="sr-only">{s.detail}</dt>
                  <dd className="font-display text-xl font-semibold text-gradient">{s.label}</dd>
                  <dd className="mt-1 text-xs leading-snug text-ink-500">{s.detail}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  )
}
