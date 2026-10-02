import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/content.js'
import { socialLinks } from '../lib/links.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  /* No backend needed: the form composes a mail-client draft, so it works the day it ships. */
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — the address is visible on the button anyway */
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="section-eyebrow mb-3 text-signal-blue">Contact</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Let's build something together.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-ink-300">
          Internships, freelance work, or a project you want a second pair of hands on — I'd like
          to hear about it.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-signal-blue/50"
          >
            {copied ? (
              <Check size={15} className="text-signal-cyan" aria-hidden="true" />
            ) : (
              <Copy size={15} aria-hidden="true" />
            )}
            {copied ? 'Copied' : profile.email}
          </button>
          {profile.phone && (
            <a
              href={`tel:${profile.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-sm text-ink-100 transition-colors hover:border-signal-blue/50"
            >
              <Phone size={15} aria-hidden="true" />
              {profile.phone}
            </a>
          )}
          {profile.location && (
            <span className="inline-flex items-center gap-2 rounded-xl border border-base-700 px-4 py-2.5 text-sm text-ink-500">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
          )}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="mt-10 space-y-5 rounded-2xl glass p-6 text-left md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block font-mono text-xs text-ink-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-base-600 bg-base-800/70 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-700 focus:border-signal-blue/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-mono text-xs text-ink-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-base-600 bg-base-800/70 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-700 focus:border-signal-blue/60"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block font-mono text-xs text-ink-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-xl border border-base-600 bg-base-800/70 px-4 py-3 text-sm text-ink-100 outline-none transition-colors placeholder:text-ink-700 focus:border-signal-blue/60"
              placeholder="Tell me about your idea or opportunity..."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-signal-gradient px-6 py-3 text-sm font-medium text-base-950 shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Send size={16} aria-hidden="true" />
              Send Message
            </button>
            <p className="font-mono text-[11px] text-ink-700">
              Opens your mail app with the message ready to send.
            </p>
          </div>
        </motion.form>

        {socialLinks.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl glass px-4 py-2.5 text-xs text-ink-300 transition-colors hover:border-signal-blue/50 hover:text-ink-100"
              >
                <Icon size={15} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
