# Kenji Mendoza — Portfolio v2

Personal portfolio site for Kenji Mendoza — Technical Support Engineer & Software Developer based in Manila. Built to feel like a workshop, not a résumé.

Live at → [my-portfolio-zeta-six-16.vercel.app](https://my-portfolio-zeta-six-16.vercel.app)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript 5.7 |
| UI Library | React 19 |
| Styling | Tailwind CSS 3.4 |
| Components | [shadcn/ui](https://ui.shadcn.com) (Badge, Card, Separator) |
| Primitives | Radix UI (Separator, Slot) |
| Icons | Lucide React |
| Fonts | Libre Caslon Display · Libre Caslon Text · IBM Plex Mono (Google Fonts) |
| Utilities | clsx · tailwind-merge · class-variance-authority |
| Deployment | [Vercel](https://vercel.com) |

---

## Sections

- **Nav** — sticky nav with live Manila clock and theme toggle
- **Hero** — mouse-tracking spotlight, name reveal, CourtBookPH preview card
- **Marquee** — scrolling ticker strip
- **Work** — project cards for CourtBookPH and this portfolio, with hover effects and stack tags
- **Skills** — instrument-dial gauges for top skills + a responsive career timeline (horizontal on desktop, vertical on mobile)
- **Now** — live snapshot of what I'm building, reading, listening to, and drinking
- **Footer** — contact links

---

## Projects Featured

### CourtBookPH
Court-booking platform for the Philippines. Real-time availability, role-based access (venue owners + players), and a checkout flow built for local payment habits.
Stack: Next.js · Supabase · NextAuth · Prisma · Tailwind · PostgreSQL

### This Portfolio
The site itself. Hand-built, dark, and classic. Live status, interactive work cards, and a skills view that is more dashboard than checklist.
Stack: Next.js · React · TypeScript · Tailwind · Vercel

---

## Getting Started

```bash
npm install
npm run dev       # runs on :3001
```

```bash
npm run build     # production build
npm run start     # serve production build
```

---

## Design Notes

- **Dark-first** with an amber accent system (`--amber`, `--cream`, `--muted`, CSS custom properties)
- **Three typefaces**: serif display (Libre Caslon Display), serif text (Libre Caslon Text), and monospace (IBM Plex Mono)
- **Scroll-triggered reveals** via a lightweight `Reveal` wrapper component
- **Mouse-tracking spotlight** in the hero using CSS `radial-gradient` and `--mx`/`--my` CSS variables
- All content (bio, projects, skills, career, certs) lives in `lib/data.ts` — one place to update

---

## Author

**Kenji Mendoza** · [github.com/CodeWithDevKen](https://github.com/CodeWithDevKen) · [codewithkendev@gmail.com](mailto:codewithkendev@gmail.com)
