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
