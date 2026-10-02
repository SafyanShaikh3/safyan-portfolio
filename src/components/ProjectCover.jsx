import { accentFor } from '../lib/links.js'

/**
 * A generated cover for each project — a deterministic abstract graphic built from the
 * project id, so every card has a real visual instead of a "[Project Image]" placeholder
 * and no screenshots need to be hosted.
 */
export default function ProjectCover({ project, className = '', tall = false }) {
  const a = accentFor(project.accent)
  const seed = [...project.id].reduce((n, c) => n + c.charCodeAt(0), 0)
  const gid = `pc-${project.id}`

  // Deterministic pseudo-random, so a given project always renders identically.
  const rnd = (i) => {
    const x = Math.sin(seed * (i + 1) * 12.9898) * 43758.5453
    return x - Math.floor(x)
  }

  const bars = Array.from({ length: 11 }, (_, i) => 18 + rnd(i) * 70)
  const nodes = Array.from({ length: 6 }, (_, i) => ({
    cx: 10 + rnd(i + 3) * 80,
    cy: 12 + rnd(i + 9) * 76,
    r: 1.2 + rnd(i + 17) * 2.2,
  }))

  return (
    <div
      className={`relative overflow-hidden bg-base-850 ${tall ? 'aspect-[21/9]' : 'h-48'} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${gid}-g`} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor={a.from} stopOpacity="0.85" />
            <stop offset="100%" stopColor={a.to} stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id={`${gid}-wash`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={a.from} stopOpacity="0.16" />
            <stop offset="100%" stopColor={a.to} stopOpacity="0.06" />
          </linearGradient>
        </defs>

        <rect width="100" height="100" fill={`url(#${gid}-wash)`} />

        {/* faint grid */}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`v${i}`}
            x1={(i + 1) * 10}
            y1="0"
            x2={(i + 1) * 10}
            y2="100"
            stroke="#F4F5F7"
            strokeOpacity="0.045"
            strokeWidth="0.4"
          />
        ))}
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={(i + 1) * 10}
            x2="100"
            y2={(i + 1) * 10}
            stroke="#F4F5F7"
            strokeOpacity="0.045"
            strokeWidth="0.4"
          />
        ))}

        {/* data bars rising from the base */}
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 9 + 2.5}
            y={100 - h}
            width="5"
            height={h}
            rx="1.6"
            fill={`url(#${gid}-g)`}
            opacity={0.26 + (i % 4) * 0.13}
          />
        ))}

        {/* connected nodes */}
        {nodes.slice(0, -1).map((n, i) => (
          <line
            key={`l${i}`}
            x1={n.cx}
            y1={n.cy}
            x2={nodes[i + 1].cx}
            y2={nodes[i + 1].cy}
            stroke={a.to}
            strokeOpacity="0.3"
            strokeWidth="0.35"
          />
        ))}
        {/* squares, not circles: the viewBox is stretched to fill, and a stretched
            circle reads as a smear while a stretched square still reads as a node */}
        {nodes.map((n, i) => (
          <rect
            key={`n${i}`}
            x={n.cx - n.r}
            y={n.cy - n.r}
            width={n.r * 2}
            height={n.r * 2}
            rx={n.r * 0.5}
            fill={a.to}
            opacity="0.55"
          />
        ))}
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
        <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${a.text}`}>
          {project.category}
        </span>
        <span className="font-mono text-[10px] text-ink-500">{project.year}</span>
      </div>
    </div>
  )
}
