# STYLEGUIDE.md — design system

Design direction **A — Midnight Developer**. Modern, techy, code-forward.

## Color tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0f1117` | Page background |
| `--surface` | `#161a23` | Cards, nav bar |
| `--surface-2` | `#1c2230` | Hover / raised surfaces |
| `--border` | `#242b3a` | Borders, dividers |
| `--accent` | `#22d3ee` | Primary accent (cyan) |
| `--accent-strong` | `#38bdf8` | Hover / secondary accent |
| `--text` | `#e6edf3` | Body and heading text |
| `--muted` | `#8b949e` | Secondary text, labels |
| `--success` | `#34d399` | Level bars, live tags |

Contrast: text on background and accent-on-dark must stay at or above WCAG AA (4.5:1 body text).

## Typography

- **Headings:** monospace stack — `ui-monospace, "Cascadia Code", "JetBrains Mono", Consolas, monospace`.
- **Body:** system sans stack — `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- No web fonts are loaded (offline-safe, fast, dependency-free).
- Scale: h1 `clamp(2rem, 6vw, 3.25rem)`, h2 `clamp(1.5rem, 4vw, 2rem)`, body `1rem` / line-height 1.7.

## Layout

- Max content width `1080px`, centered, `padding: 0 1.25rem`.
- Sections: `padding: 5rem 0`, each with `id` matching its nav link (`#home`, `#about`, `#skills`,
  `#projects`, `#contact`).
- Project grid: `repeat(auto-fit, minmax(300px, 1fr))`.
- Breakpoints: mobile-first. Mobile menu below `768px`; grid collapses to a single column naturally.

## Components

- **Sticky nav** — blur/gradient surface, active-link highlight, hamburger toggle under 768px.
- **Hero** — name, headline, intro, two buttons (View projects, Contact), subtle accent glow.
- **Section heading** — small accent label + monospace heading + one-line description.
- **Skill chips** — skill name + level bar (3 segments) + level label.
- **Project cards** — screenshot/fallback tile, title, summary, "My contribution", tech tags, and
  link buttons (Repo / Live demo where available).
- **Contact block** — large `mailto:` button + GitHub button.
- **Footer** — name, year, small credit line.

## Interaction & accessibility

- Smooth scrolling via `scroll-behavior: smooth`, disabled under `prefers-reduced-motion`.
- Visible focus outlines on all links/buttons (`:focus-visible`, accent color).
- Semantic HTML: `header`, `nav`, `main`, `section`, `footer`; headings in order; `aria-label` on
  the nav toggle; `aria-expanded` toggled by JS; images carry meaningful `alt` text.
- Mobile menu closes on link click and on `Escape`.
- Progressive enhancement: content is readable and links work even with JavaScript disabled.

## Code conventions

- One stylesheet, one script file, no build step.
- CSS custom properties for all colors/spacing; mobile-first media queries.
- Vanilla JS only, plain `const`/`let`, no libraries.
- Keep `index.html` semantic and readable; avoid inline styles.
