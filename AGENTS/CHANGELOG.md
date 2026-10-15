# CHANGELOG.md

Dated log of changes and the AI tools used. The activity guide requires keeping a short note of the
tools used and the help each provided.

---

## 2026-10-15 — Phase 1: project documentation

**Tool:** OpenCode (Big Pickle agent).

- Read `Website_Portfolio_Student_Guide.docx` and summarized the activity requirements.
- Interviewed the project owner and collected personal details, skills, interests, and project data.
- Researched the owner's public GitHub repositories to write accurate project descriptions.
- Created the documentation set:
  - `AGENTS.md` (repo root) — pointer and ground rules.
  - `AGENTS/README.md` — documentation index and rules.
  - `AGENTS/PLAN.md` — living plan and phase checklist.
  - `AGENTS/PROFILE.md` — approved personal content (name, bio, skills, interests, contact).
  - `AGENTS/PROJECTS.md` — the six featured projects with descriptions, links, and tech.
  - `AGENTS/STYLEGUIDE.md` — design system for direction A (Midnight Developer).
  - `AGENTS/DEPLOY.md` — GitHub Pages + GitHub Actions setup, update procedure, troubleshooting.
  - `AGENTS/CHECKLIST.md` — quality checks, screenshot steps, submission format.
  - `AGENTS/CHANGELOG.md` — this file.
- Saved a copy of the approved plan to `C:\Users\Kevs\.opencode\plan\portfolio-plan.md`.

**Decisions locked:** single scrolling page; plain HTML/CSS/JS with no dependencies; design A
(Midnight Developer); six featured projects; deploy a filtered `_site/` artifact via GitHub Actions.

**Outcome:** documentation complete; no site files yet. Next: Phase 2 (git init, `.gitignore`,
root `README.md`).

---

## 2026-10-15 — Phase 2: repository setup

**Tool:** OpenCode (Big Pickle agent).

- Initialized the local repository on the `main` branch (first commit: `35daa94`).
- Added `.gitignore` (`_site/`, OS/editor cruft, logs).
- Added `.gitattributes` to normalize line endings (LF for text, binary for images/PDF/DOCX).
- Added the root `README.md` with the description, live URL, structure, local-run steps, the
  publishing explanation, and the AI-tools note.

**Outcome:** repository initialized and committed; no site files yet. Next: Phase 3 (build the
page: `index.html`, `style.css`, `script.js`, `404.html`, images).

---

## 2026-10-15 — Phase 3: build the site

**Tool:** OpenCode (Big Pickle agent), plus Chrome headless via `puppeteer-core` for automated
testing.

- Built the single-page site: `index.html` (Home, About, Skills, Projects, Contact),
  `style.css` (design direction A, mobile-first, sticky nav, mobile hamburger), `script.js`
  (menu toggle, scroll-spy, header state, footer year), and `404.html`.
- Added `images/favicon.svg` and `assets/og-image.png` (1200x630) for social previews.
- Added project images: `images/projects/patintero.jpg` (real screenshot from the Patintero repo,
  resized to 1200px and compressed to ~207 KB) and five designed placeholders
  (`omnisight`, `skillswap`, `url-blocker`, `note-taking-api`, `t-spot`) to be replaced with real
  screenshots later.
- Added `tools/check.mjs` (link/anchor/image/alt/id validator) and `.htmlhintrc`.

## 2026-10-15 — Phase 4: local testing

**Tool:** OpenCode + Chrome headless (`puppeteer-core`).

- Fixed a real responsive bug: the project grid used `minmax(320px, 1fr)`, which overflowed the
  page by 20 px at a 320 px viewport. Changed both grids to
  `repeat(auto-fit, minmax(min(<size>px, 100%), 1fr))`.
- Ran `tools/check.mjs` (0 errors) and `htmlhint` on both HTML files (no errors).
- Ran an automated browser test: **23/23 checks passed** — no horizontal overflow at 320 / 390 /
  1440 px; all five sections present; six project cards; all six images load; the mobile hamburger
  opens and closes correctly; link navigation and the `mailto:` links work; external links carry
  `rel="noopener"`.
- Saved review screenshots (desktop and mobile, full page and viewport) outside the repository.

**Outcome:** site built and passing local checks. Next: Phase 5 (enable GitHub Pages on the T-Spot
repo for its live demo link).
