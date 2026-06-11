# niket-dhale.github.io/portfolio

Personal portfolio site for **Niket Dhale** — Automotive Cybersecurity & Embedded Software Engineer.

Built with [Astro](https://astro.build) · Deployed on GitHub Pages · Design: Night Cluster (dark-first, light mode supported)

**Live site:** https://niketdhale.github.io/portfolio

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6 (static output) |
| Fonts | Fraunces · Hanken Grotesk · Spline Sans Mono |
| Package manager | Bun |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Project structure

```
src/
├── components/
│   ├── Hero.astro          # Intro, hero strip, code panel
│   ├── About.astro         # Bio paragraphs
│   ├── Projects.astro      # Cards with hex IDs
│   ├── Experience.astro    # Timeline
│   ├── Skills.astro        # Capability matrix
│   ├── Contact.astro       # CTA + footer
│   ├── Trace.astro         # CAN square-wave divider
│   └── Icons.astro         # Inline SVG icons
├── data/
│   └── profile.ts          # ← ALL site content lives here
├── layouts/
│   └── Base.astro          # HTML shell, fonts, theme init
├── pages/
│   └── index.astro         # Page assembly
└── styles/
    └── global.css          # Design tokens + Night Cluster theme
public/
└── resume.pdf              # ← drop your PDF here
```

**To update any content, edit only `src/data/profile.ts`.** Everything — name, tagline, experience, projects, skills — is sourced from that one file.

---

## Local dev

```powershell
bun install
bun run dev       # http://localhost:4321/portfolio
bun run build     # production build → ./dist
bun run preview   # preview the build locally
```

---

## Deploying to GitHub Pages

1. Push to a public repo named `portfolio` on GitHub
2. Repo **Settings → Pages → Source: GitHub Actions**
3. The included `.github/workflows/deploy.yml` handles the rest on every push to `main`

**Live at:** `https://niketdhale.github.io/portfolio`

> If you rename the repo to `niketdhale.github.io`, remove the `base: "/portfolio"` line from `astro.config.mjs` and update `resumeUrl` in `profile.ts` to `"/resume.pdf"`.

---

## Before going live checklist

- [ ] Replace `YOUR_EMAIL@gmail.com` in `profile.ts`
- [ ] Verify LinkedIn handle in `profile.ts`
- [ ] Drop `resume.pdf` into `/public`
- [ ] Push to `main` and enable Pages → GitHub Actions

---

## License

MIT
