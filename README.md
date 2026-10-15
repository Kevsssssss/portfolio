# Portfolio — John Kevin F. Buangjog

A personal portfolio website built with plain HTML, CSS, and JavaScript, and published for free
with GitHub Pages.

**Live site:** https://kevsssssss.github.io/portfolio/

## About

Built for a student website portfolio activity. The site introduces who I am, the skills I am
learning, and the classwork and practice projects I have built. It is a single scrolling page with
Home, About, Skills, Projects, and Contact sections, and works on both desktop and phone screens.

- **Name / section:** John Kevin F. Buangjog, Section 6
- **Program:** Bachelor of Science in Information Technology (4th year)

## Tech

- Plain HTML5, CSS3, and vanilla JavaScript
- No frameworks, no build step, no external dependencies (system fonts only)
- Hosted on GitHub Pages, deployed with GitHub Actions

## Structure

```
index.html            Homepage (single scrolling page)
404.html              Not-found page
style.css             All styles
script.js             Mobile menu + interactions
images/projects/      Project screenshots (or designed fallback tiles)
images/profile.png    Profile photo (hero avatar; placeholder until replaced)
images/favicon.svg    Site icon
assets/               Other public assets (social preview image)
tools/check.mjs       Local link/anchor/image validator
AGENTS/               Project documentation (plan, content, design, deploy, changelog)
.github/workflows/    CI/CD: validate and deploy to GitHub Pages
```

## Running locally

Open `index.html` directly in a browser, or use a local server such as the VS Code
**Live Preview** extension. No installation or build step is required.

## How it is published

On every push to `main`, the workflow in `.github/workflows/deploy.yml` validates the HTML, copies
only the site files into a staging folder, and deploys that folder to GitHub Pages. Working notes
(`about_me.md`, the activity guide, and the `AGENTS/` documentation) stay in the repository but are
never published.

See [`AGENTS/DEPLOY.md`](AGENTS/DEPLOY.md) for the full setup, update procedure, and troubleshooting.

## AI tools

The site was built with **OpenCode** as an AI coding agent (planning, content organization, code
review, and CI/CD setup). All personal content, project descriptions, and design decisions are my
own. Details are recorded in [`AGENTS/CHANGELOG.md`](AGENTS/CHANGELOG.md).

## Documentation

All planning and content documentation lives in [`AGENTS/`](AGENTS/README.md).
