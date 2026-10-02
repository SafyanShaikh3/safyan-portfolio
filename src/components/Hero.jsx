import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Circle, FileText } from 'lucide-react'
import { profile } from '../data/content.js'
import { hasLink } from '../lib/links.js'

const nodes = [
  { top: '18%', left: '12%', size: 6, delay: 0 },
  { top: '30%', left: '82%', size: 4, delay: 1.2 },
  { top: '68%', left: '20%', size: 5, delay: 0.6 },
  { top: '76%', left: '70%', size: 7, delay: 1.8 },
  { top: '48%', left: '90%', size: 3, delay: 0.3 },
  { top: '10%', left: '55%', size: 4, delay: 2.1 },
]

const disciplines = ['Android', 'Full-Stack', 'AI / ML']

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-overlay opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -left-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-signal-blue/20 blur-[110px] animate-drift" />
      <div
        className="absolute -bottom-32 -right-24 h-[26rem] w-[26rem] rounded-full bg-signal-violet/20 blur-[110px] animate-drift"
        style={{ animationDelay: '2s' }}
      />

      <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-60">
        <line x1="12%" y1="18%" x2="55%" y2="10%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.35" />
        <line x1="82%" y1="30%" x2="55%" y2="10%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.35" />
        <line x1="20%" y1="68%" x2="90%" y2="48%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.25" />
        <line x1="70%" y1="76%" x2="90%" y2="48%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.25" />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5B8CFF" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
      </svg>

      {!reduce &&
        nodes.map((n, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="absolute rounded-full bg-signal-gradient blur-[1px]"
            style={{ top: n.top, left: n.left, width: n.size, height: n.size }}
            animate={{ y: [0, -16, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, delay: n.delay, ease: 'easeInOut' }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-ink-300"
        >
          <Circle size={8} className="animate-pulseDot fill-emerald-400 text-emerald-400" aria-hidden="true" />
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-7xl"
        >
          Hi, I'm Safyan.
          <br />
          <span className="text-gradient">I ship software that's actually finished.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="mx-auto mt-6 max-w-2xl text-base text-ink-300 sm:text-lg"
        >
          An offline-first Android expense manager, MERN commerce and booking platforms, and
          applied machine learning — built end to end while finishing an MCA in AI &amp; ML.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
        >
          {disciplines.map((d) => (
            <li
              key={d}
              className="rounded-full border border-base-600 bg-base-800/50 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-300"
            >
              {d}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('#projects')}
            className="group inline-flex items-center gap-2 rounded-xl bg-signal-gradient px-6 py-3 text-sm font-medium text-base-950 shadow-glow transition-transform hover:scale-[1.03]"
          >
            View My Work
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 text-sm font-medium text-ink-100 transition-colors hover:border-signal-blue/50"
          >
            Let's Connect
          </button>
          {hasLink(profile.resume) && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-base-600 px-6 py-3 text-sm font-medium text-ink-300 transition-colors hover:text-ink-100"
            >
              <FileText size={16} aria-hidden="true" /> Résumé
            </a>
          )}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-500 transition-colors hover:text-ink-300"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} aria-hidden="true" />
      </motion.button>
    </section>
  )
}
