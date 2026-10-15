# AGENTS/ — documentation index

This folder is the single source of truth for the portfolio project. Keep it accurate, updated,
and clean: if the code changes, the matching file here changes in the same commit.

## Files

| File | Purpose |
|---|---|
| `README.md` | This index. Start here. |
| `PLAN.md` | Living plan and phase checklist with current status. |
| `PROFILE.md` | Curated personal content (name, bio, intro, skills, interests, contact). |
| `PROJECTS.md` | The six featured projects: descriptions, contributions, links, tech, screenshots. |
| `STYLEGUIDE.md` | Design tokens, typography, components, responsive and accessibility rules. |
| `DEPLOY.md` | Repo/Pages setup, workflow explanation, update procedure, troubleshooting. |
| `CHECKLIST.md` | Final quality checklist, screenshot capture steps, submission format. |
| `CHANGELOG.md` | Dated log of changes and the AI tools used (required by the activity guide). |

## Rules for agents

1. Read `AGENTS.md` (repo root) and `PLAN.md` before editing.
2. `PROFILE.md` and `PROJECTS.md` are the only approved content sources. Never invent facts or
   achievements; ask the user when something is unknown.
3. Site files stay at the repository root: `index.html`, `404.html`, `style.css`, `script.js`,
   `images/`, `assets/`.
4. Keep the site dependency-free (no CDN, no framework, system fonts, vanilla JS).
5. Never allow `about_me.md`, `Website_Portfolio_Student_Guide.docx`, or `AGENTS/` into the
   published `_site/` artifact.
6. Every change: update the relevant `AGENTS/` file and add a `CHANGELOG.md` entry with the date
   and the tools used.
7. Verify desktop + phone widths and all links before pushing.

## Quick facts

- Owner: John Kevin F. Buangjog (Section 6, BSIT 4th year)
- Live site: https://kevsssssss.github.io/portfolio/
- Repository: https://github.com/Kevsssssss/portfolio
- Stack: plain HTML / CSS / JS
- Host: GitHub Pages via GitHub Actions (`Deploy from a branch` is not used)
