# CHECKLIST.md — quality checks, screenshots, and submission

Adapted from page 8 of `Website_Portfolio_Student_Guide.docx`.

## Final quality checklist

- [ ] The public HTTPS link opens while signed out and stays available after closing the IDE.
- [ ] My own name, skills, and work appear; no placeholder or dummy text remains.
- [ ] No broken buttons or links: every nav link, project repo link, live demo link, and the
      `mailto:` link works.
- [ ] The site works on desktop and on a phone width; text is readable and images load.
- [ ] Filename letter case matches exactly (matters on GitHub Pages).
- [ ] No passwords, keys, `.env`, or private documents are published.
- [ ] I can explain the main files, my changes, and how to publish an update.

## Screenshot capture steps (for the project cards)

Save every file to `images/projects/` with the exact name shown. Aim for ~1280x800, under ~400 KB.
Until a file exists, the card shows a designed fallback tile.

| Target file | How to capture |
|---|---|
| `images/projects/patintero.png` | Already provided — copied from the repo's `screenshot.png`. |
| `images/projects/omnisight.png` | Build and run the OmniSight dashboard locally, then capture the React admin dashboard. If it cannot be run, capture the WPF app window. |
| `images/projects/skillswap.png` | Start Redis (Docker) and the Django dev server, open the site, and capture the trading floor / chat view. |
| `images/projects/url-blocker.png` | Double-click `urlblocker.exe`, then capture the interactive shell window after running `help`. |
| `images/projects/note-taking-api.png` | Send a request (Postman or `curl`) to `GET /api/notes` and capture the JSON response beside the request. |
| `images/projects/t-spot.png` | Open https://kevsssssss.github.io/T-Spot-Update-v1.5.3/ and capture the homepage. |

Windows screenshot tip: `Win + Shift + S` to snip, then paste into Paint and save as PNG.

## Portfolio screenshots (for submission)

- [ ] `desktop` screenshot — full-window view of https://kevsssssss.github.io/portfolio/.
- [ ] `mobile` screenshot — the same page at a phone width or on a real phone.

## Submission format

Provide through the class submission channel:

- Name and section: **John Kevin F. Buangjog, Section 6**
- Live website URL: https://kevsssssss.github.io/portfolio/
- Hosting service: **GitHub Pages**
- Source repository: https://github.com/Kevsssssss/portfolio
- One desktop screenshot and one mobile screenshot
- A short note on the AI tools and templates used and how the result was personalized
  (see `CHANGELOG.md`)

Share the public website URL only — not an IDE preview, a dashboard, or a local file address.

## Submission note (draft)

> I built my portfolio as a single scrolling page using plain HTML, CSS, and JavaScript, with no
> frameworks or external libraries. I used OpenCode as my AI coding agent to help plan the site,
> organize my content, write and review the code, and set up a GitHub Actions workflow that
> validates and publishes the site to GitHub Pages. All personal content, project descriptions, and
> design decisions are my own, based on my classwork and practice projects. The layout was tested on
> desktop and phone widths, and every link was checked before publishing.
