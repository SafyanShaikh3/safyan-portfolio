import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/content.js'

/** True for a link that is actually usable (not empty, not a leftover placeholder). */
export const hasLink = (value) =>
  typeof value === 'string' && value.trim() !== '' && !value.trim().startsWith('[')

/** Social links, with anything unset filtered out so no dead icons are rendered. */
export const socialLinks = [
  { label: 'GitHub', value: profile.github, href: profile.github, icon: Github },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedin, icon: Linkedin },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    display: profile.email,
  },
  { label: 'Instagram', value: profile.instagram, href: profile.instagram, icon: Instagram },
].filter((s) => hasLink(s.value))

/** Accent colour tokens per project, so cards stay on-palette. */
export const accents = {
  blue: {
    text: 'text-signal-blue',
    border: 'hover:border-signal-blue/50',
    from: '#5B8CFF',
    to: '#22D3EE',
  },
  violet: {
    text: 'text-signal-violet',
    border: 'hover:border-signal-violet/50',
    from: '#A78BFA',
    to: '#5B8CFF',
  },
  cyan: {
    text: 'text-signal-cyan',
    border: 'hover:border-signal-cyan/50',
    from: '#22D3EE',
    to: '#A78BFA',
  },
}

export const accentFor = (key) => accents[key] || accents.blue
