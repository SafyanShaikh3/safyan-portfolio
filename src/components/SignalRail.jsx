import { motion, useScroll, useSpring } from 'framer-motion'
import { aiPipeline } from '../data/content.js'

// The site's signature motif: a vertical "signal" line that fills as the
// visitor scrolls, echoing the Data -> Model -> Intelligence -> Application
// pipeline described in the AI section. On mobile it becomes a slim top bar.
export default function SignalRail() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 })

  return (
    <>
      {/* Mobile: top progress bar */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-signal-gradient z-[60] md:hidden"
        style={{ scaleX: smooth }}
      />

      {/* Desktop: vertical rail with pipeline labels */}
      <div
        aria-hidden="true"
        className="hidden md:flex fixed left-6 top-0 h-screen z-40 flex-col items-center justify-center gap-0 pointer-events-none"
      >
        <div className="relative h-[46vh] w-px bg-base-700">
          <motion.div
            className="absolute top-0 left-0 w-px bg-signal-gradient origin-top"
            style={{ scaleY: smooth, height: '100%' }}
          />
          {aiPipeline.map((label, i) => (
            <div
              key={label}
              className="absolute -left-[3px] flex items-center gap-3"
              style={{ top: `${(i / (aiPipeline.length - 1)) * 100}%` }}
            >
              <span className="block h-[7px] w-[7px] rounded-full bg-signal-cyan animate-pulseDot" />
              <span className="section-eyebrow text-ink-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
