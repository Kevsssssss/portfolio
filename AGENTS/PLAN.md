# PLAN.md — living plan

Last updated: 2026-10-15
Overall status: **Phases 1-8 complete — live and published**

## Phase checklist

- [x] **Phase 1 — Documentation.** Create `AGENTS/` docs and root `AGENTS.md`.
- [x] **Phase 2 — Repo setup.** `git init -b main`, `.gitignore`, `.gitattributes`, root `README.md`.
- [x] **Phase 3 — Build site.** `index.html`, `style.css`, `script.js`, `404.html`, favicon, OG image, project images (Patintero real + 5 placeholders), profile photo placeholder.
- [x] **Phase 4 — Local test.** Automated checks: 24/24 passed (overflow at 320/390/1440, mobile menu, anchors, images, alt text, `rel="noopener"`, `mailto`).
- [x] **Phase 5 — Live demo for T-Spot.** Already published (branch `master`, folder `/`); verified HTTP 200.
- [x] **Phase 6 — CI/CD + publish.** `deploy.yml` added; public repo `Kevsssssss/portfolio` created; pushed; Pages set to GitHub Actions.
- [x] **Phase 7 — Verify live.** Run `38747035182` succeeded; live URL and all assets return HTTP 200; private files return 404.
- [x] **Phase 8 — Handoff.** Live URL, screenshot steps, and the submission note delivered (see `AGENTS/CHECKLIST.md`). The user's remaining capture tasks are listed in **Open items** below.
- [x] **Post-launch — Real screenshots + profile photo.** All six project screenshots and the profile photo added and optimized (2026-10-16).

## Open items (owner input needed)

- Screenshots for: OmniSight, SkillSwap, Website URL Blocker, Note-Taking-API, T-Spot. *(done 2026-10-16)*
- Replace the hero avatar placeholder `images/profile.png` with a real photo (square, 512x512+). *(done 2026-10-16 — `images/profile.jpg`)*
- Desktop + mobile screenshots of the finished portfolio (for submission).
- Confirm the final About wording and skill level labels once visible on the page.
- Confirm location line if any (currently omitted — not verified).
- Confirm display name preference: "John Kevin F. Buangjog" (full) vs "John Kevin Buangjog".

## Decisions locked

- Single scrolling page (Home / About / Skills / Projects / Contact).
- Plain HTML/CSS/JS, zero external dependencies.
- Design direction A: Midnight Developer.
- Six featured projects (see `PROJECTS.md`).
- CI/CD: GitHub Actions validates and deploys a filtered `_site/` artifact to GitHub Pages.
- `about_me.md`, the guide `.docx`, and `AGENTS/` are never published.
