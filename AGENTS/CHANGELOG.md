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

---

## 2026-10-15 — Profile photo placeholder

**Tool:** OpenCode (Big Pickle agent).

- Added a circular profile-photo area to the hero (`images/profile.png`, 512x512 placeholder with a
  silhouette and dashed "add photo" ring).
- Hero is now a two-column grid on desktop (text + avatar) and stacks with the avatar on top on
  mobile; new `.hero__grid`, `.hero__media`, and `.avatar` styles.
- Re-ran checks: `tools/check.mjs` clean, `htmlhint` clean, browser test **24/24 passed** (avatar
  included). Regenerated review screenshots.
- To use a real photo: overwrite `images/profile.png` with a square image (512x512+). No code change
  needed.

---

## 2026-10-15 — Phase 5: live demo link for T-Spot

**Tool:** OpenCode (Big Pickle agent) + GitHub CLI.

- Checked the T-Spot repository's Pages configuration with `gh api`: it was **already enabled and
  built** (source `master`, folder `/`, `build_type: legacy`, HTTPS enforced).
- Verified all six project links return HTTP 200: T-Spot live demo, Patintero Legacy live demo, and
  the four repository links (OmniSight, skillswap_project, website_url_blocker, Note-Taking-API).

**Outcome:** no changes required. Next: Phase 6 (add the GitHub Actions workflow, create the public
`Kevsssssss/portfolio` repository, push, and enable Pages via Actions).

---

## 2026-10-15 — Phase 6: CI/CD and publishing

**Tool:** OpenCode (Big Pickle agent) + GitHub CLI.

- Added `.github/workflows/deploy.yml`: on push to `main` (and manual dispatch) it validates HTML
  with `htmlhint`, runs `tools/check.mjs`, checks required files, stages only the public site files
  into `_site/`, and deploys with `actions/deploy-pages`.
- Committed and pushed the repository to a new **public** repo, `Kevsssssss/portfolio`
  (`gh repo create`), with the live URL set as the repository homepage.
- Enabled Pages with `build_type=workflow` via `gh api` (GitHub Actions source, not a branch).

## 2026-10-15 — Phase 7: live verification

**Tool:** OpenCode (Big Pickle agent).

- Workflow run `38747035182` completed with **success** (build + deploy).
- Verified the live site: homepage, `404.html`, `style.css`, `script.js`, the favicon, the OG image,
  the profile photo, and all six project images return HTTP 200 with correct content types. The
  homepage contains the name and the avatar.
- Confirmed the privacy boundary: `AGENTS/README.md`, `AGENTS/PROFILE.md`, `about_me.md`,
  `README.md`, `tools/check.mjs`, and the guide `.docx` all return **404** on the live site.

**Live URL:** https://kevsssssss.github.io/portfolio/

**Outcome:** the portfolio is published and healthy. Remaining: Phase 8 (handoff — screenshots and
the submission note).

---

## 2026-10-15 — Phase 8: handoff

**Tool:** OpenCode (Big Pickle agent).

- Delivered the live URL, hosting details, screenshot capture steps, the submission format, and a
  draft submission note (all recorded in `AGENTS/CHECKLIST.md`).
- Confirmed the second CI run (`38747445942`) succeeded, so the pipeline validates and deploys on
  every push to `main` as intended.

**Status: project complete.** The site is live at https://kevsssssss.github.io/portfolio/ with all
phases finished. Open follow-ups (owner): replace the profile photo and the five project
placeholders, then capture the desktop and mobile submission screenshots.

---

## 2026-10-16 — Real screenshots and profile photo added

**Tool:** OpenCode (Big Pickle agent) + Chrome headless (`puppeteer-core`) for verification.

- Received six real images from the owner: five project screenshots and a square profile photo.
- Optimized and mapped them into the site, replacing every placeholder:

  | Output | Source | Result |
  |---|---|---|
  | `images/projects/omnisight.jpg` | `OmniSight_Screemshot.png` | 1200x636, 43 KB |
  | `images/projects/skillswap.jpg` | `SkillSwap_Screenshot.png` | 1200x546, 53 KB |
  | `images/projects/note-taking-api.jpg` | `API_Note_Taking_Screenshot.png` | 1200x608, 77 KB |
  | `images/projects/t-spot.jpg` | `T-Spor_Screenshot.png` | 1200x543, 103 KB |
  | `images/projects/url-blocker.jpg` | `url_blocker_screenshot.png` | 1200x644, 124 KB |
  | `images/profile.jpg` | `my_profile.jpg` (1821x1821) | 800x800, 73 KB |

  Total image weight dropped from ~7.3 MB of sources to ~400 KB published.
- Changed `.card__media img` to `object-fit: contain` so wide screenshots (ratio ~1.9-2.2) are shown
  in full rather than cropped ~19-27% by the previous `cover` setting.
- Updated `index.html`: new `.jpg` paths, accurate `width`/`height`, and real descriptive `alt` text
  (replacing "Placeholder image ...").
- Moved raw originals to a top-level `sources/` folder and added `sources/` to `.gitignore`, so the
  unoptimized files stay on disk but are never committed or published (they were previously inside
  `images/`, which is published wholesale).
- Checks: `tools/check.mjs` clean, `htmlhint` clean, browser suite **25/25 passed** (7/7 images load).

**Note for the owner:** confirm each card's `alt` text matches what the screenshot actually shows.

---

## 2026-10-15 — Fix hero spacing (tags to buttons)

**Tool:** OpenCode (Big Pickle agent) + Chrome headless (`puppeteer-core`) for measurement.

- Reported issue: the hero tag list (`.hero__tags`) sat directly against the hero buttons
  (`.hero__actions`) with no gap.
- Root cause: a CSS ordering bug. `.hero__tags { margin-bottom: 1.9rem; }` was declared before
  `.tag-list { margin: 0; }`. Both share equal specificity, so the later `margin: 0` overrode the
  intended margin, leaving a 0 px gap.
- Fix: raised specificity to `.tag-list.hero__tags` and set the gap to `2rem`.
- Verified by measurement at 1440 / 768 / 390 px: gap is now **32 px** at all widths (previously
  0 px). Full browser suite still **24/24 passed**.

---

## 2026-10-16 — Deploy fix: Pages deployment stall + docs-only trigger filter

**Tool:** OpenCode (Big Pickle agent) + GitHub CLI.

- The first deploy after adding the real images (run `38770277124`) failed: `actions/deploy-pages`
  polled "Getting Pages deployment status..." for the action's full 10-minute timeout, then aborted.
  The **build job ("Validate and stage") had succeeded**, so the artifact itself was fine.
- A re-run of the failed job was cancelled instantly ("Deployment cancelled."); a fresh
  `workflow_dispatch` run (`38772236024`) then deployed successfully in seconds. Conclusion: a
  **transient GitHub Pages backend stall**, not a repository or code problem. Documented in
  `AGENTS/DEPLOY.md` → Troubleshooting so a future occurrence is recognised quickly.
- Added `paths:` triggers to `deploy.yml`: only site files (`index.html`, `404.html`, `style.css`,
  `script.js`, `images/**`, `assets/**`, `tools/**`) and the workflow itself now trigger a deploy.
  Docs-only commits (`AGENTS/**`, `README.md`) no longer cause a redeploy.
- Verified live after the successful run: `images/profile.jpg` and all six `images/projects/*.jpg`
  return **200**; the removed placeholders (`*.png`), `sources/`, and private files still return
  **404**; the live HTML references the new `.jpg` paths, contains no "Placeholder" text, and the
  live `style.css` carries `object-fit: contain`.
