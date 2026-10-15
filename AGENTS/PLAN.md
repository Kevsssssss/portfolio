# PLAN.md — living plan

Last updated: 2026-10-15
Overall status: **Phase 5 complete — Phase 6 next**

## Phase checklist

- [x] **Phase 1 — Documentation.** Create `AGENTS/` docs and root `AGENTS.md`.
- [x] **Phase 2 — Repo setup.** `git init -b main`, `.gitignore`, `.gitattributes`, root `README.md`.
- [x] **Phase 3 — Build site.** `index.html`, `style.css`, `script.js`, `404.html`, favicon, OG image, project images (Patintero real + 5 placeholders).
- [x] **Phase 4 — Local test.** Automated checks: 23/23 passed (overflow at 320/390/1440, mobile menu, anchors, images, alt text, `rel="noopener"`, `mailto`).
- [x] **Phase 5 — Live demo for T-Spot.** Already published (branch `master`, folder `/`); verified HTTP 200.
- [ ] **Phase 6 — CI/CD + publish.** `deploy.yml`, create `Kevsssssss/portfolio`, push, enable Pages.
- [ ] **Phase 7 — Verify live.** Watch the Action, fetch the URL, confirm content and links.
- [ ] **Phase 8 — Handoff.** Screenshot checklist + submission note for the class channel.

## Open items (owner input needed)

- Screenshots for: OmniSight, SkillSwap, Website URL Blocker, Note-Taking-API, T-Spot.
- Replace the hero avatar placeholder `images/profile.png` with a real photo (square, 512x512+).
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
