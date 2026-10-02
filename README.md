# Safyan Shaikh — Portfolio

A dark-first personal portfolio built with React, Vite, Tailwind CSS, Framer Motion and
Lucide icons.

## Design concept

- **Palette** — near-black base (`#0A0B0F`) with an electric blue → violet → cyan gradient
  (`#5B8CFF → #A78BFA → #22D3EE`) used sparingly as the site's signal color.
- **Type** — Space Grotesk for display headings, Inter for body copy, JetBrains Mono for
  labels, tags and eyebrows.
- **Signature element** — `SignalRail`: a persistent line (vertical on desktop, a top progress
  bar on mobile) that fills as you scroll and echoes the Data → Model → Intelligence →
  Application pipeline from the AI section.
- **No placeholder art** — every project card draws its own cover from its id
  (`ProjectCover`), and the CardSense case study renders the app UI in markup
  (`PhoneMockup`). Nothing needs screenshots to be hosted.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Editing content

**Everything the site renders lives in `src/data/content.js`.** Edit that file first; the
components read from it and nothing else needs touching for a content change.

### Optional links

`profile.linkedin`, `profile.instagram`, `profile.resume`, `profile.photo`, and every
project's `github` / `demo` are optional. Leave a value as an empty string (`''`) and the
site simply does not render that button or icon — there are no dead placeholder links
anywhere. Fill one in and the button appears.

Currently empty and worth filling in:

- `profile.resume` — put the PDF in `public/` and point at `/resume.pdf`
- `github` / `demo` on each project in the `projects` array

### Profile photo

`public/photo.webp` (57 KB) and `public/photo.png` (78 KB) are a background-removed,
4:5-cropped version of `src/Photo.png` (the 2.2 MB original is kept, unused, as the master).
The cut-out is transparent so the portrait sits on the site's own backdrop instead of
carrying a studio-grey rectangle with it. To swap the photo, replace both files at the same
aspect ratio, or point `profile.photo` / `profile.photoFallback` elsewhere — set
`profile.photo` to `''` and the About section falls back to a monogram.

### Adding a project

Push an object onto `projects` in `content.js`:

```js
{
  id: 'unique-slug',          // also seeds the generated cover art
  title: 'Project name',
  tagline: 'One line under the title',
  category: 'Android',        // must match an entry in projectCategories
  year: '2026',
  accent: 'cyan',             // 'blue' | 'violet' | 'cyan'
  description: 'Card-level summary.',
  problem: '...',             // shown in the detail modal
  solution: '...',
  tech: ['Kotlin', 'WorkManager'],
  features: ['...'],
  highlights: [{ label: 'Engineering note', detail: '...' }],
  stats: [{ value: '0', label: 'Network calls' }],
  github: '',
  demo: '',
}
```

Set `caseStudy: true` on exactly one project — that one renders as the full featured case
study section above the grid.

## Contact form

The form in `Contact.jsx` composes a `mailto:` draft, so it works with no backend. To
collect submissions server-side instead, point `handleSubmit` at Formspree, EmailJS or your
own API route.

## SEO & the site URL

**`SITE_URL` at the top of `vite.config.js` is the single source of truth for the public
URL.** It is substituted into `index.html` (canonical tag, Open Graph and Twitter cards,
JSON-LD) and used to generate `robots.txt` and `sitemap.xml` into `dist/` at build time.
Moving to a custom domain is one line:

```js
const SITE_URL = 'https://safyanshaikh.dev'   // no trailing slash
```

Nothing else needs editing — don't re-add `robots.txt` or `sitemap.xml` to `public/`, the
build writes them.

## Deployment (Vercel)

The repo is a stock Vite app, so Vercel detects everything: build `npm run build`, output
`dist`. Every push to `main` redeploys.

First time:

```bash
cd D:\\safyan-portfolio
rmdir /s /q SafyanShaikh      # empty clone of another repo — remove before git init
git init -b main
git add .
git commit -m "Portfolio: CardSense case study, project detail views, SEO"
git remote add origin https://github.com/SafyanShaikh3/<repo>.git
git push -u origin main
```

Then at vercel.com: **Add New → Project → import the repo → Deploy**. Note the URL it gives
you, put it in `SITE_URL`, and push again.

Adding a custom domain later: buy it, add it under the project's **Settings → Domains** in
Vercel, point the registrar's DNS at the records Vercel shows, then update `SITE_URL` and
push.

## Project structure

```
public/
  favicon.svg  og-image.svg
  photo.webp  photo.png          # About portrait (background removed)
  cardsense.webp  cardsense.jpg  # CardSense home screen
src/
  components/
    Navbar, Hero, SignalRail, About, Skills,
    FeaturedProject, PhoneMockup,        # CardSense case study
    Projects, ProjectCover, ProjectModal, # work grid + detail view
    AISection, Journey, Education, Philosophy, Contact, Footer
  data/content.js   # all copy, projects, skills, education — edit here first
  lib/links.js      # link helpers + accent tokens
  App.jsx  main.jsx  index.css
```

## Accessibility & performance

- Skip-to-content link, focus-visible outlines, focus trap and Escape handling in the
  project modal, `aria-current` on the active nav item.
- `prefers-reduced-motion` is respected globally in CSS and via `useReducedMotion` for the
  decorative hero animations.
- No fabricated stats, employers, testimonials or dates — every figure on the site comes
  from the projects themselves.
