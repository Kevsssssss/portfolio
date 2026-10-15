# DEPLOY.md — hosting, CI/CD, and updates

## Hosting facts

| Item | Value |
|---|---|
| Host | GitHub Pages |
| Repository | https://github.com/Kevsssssss/portfolio (public) |
| Live URL | https://kevsssssss.github.io/portfolio/ |
| Pages source | **GitHub Actions** (not "Deploy from a branch") |
| Workflow | `.github/workflows/deploy.yml` |

The site files live at the repository root, but the workflow publishes a **filtered copy** so
private/working material is never public.

## Workflow (`deploy.yml`)

Triggers: push to `main`, and manual `workflow_dispatch`.

1. **build**
   - `actions/checkout`
   - `actions/setup-node` (LTS), then `npx htmlhint` against `index.html` and `404.html`
   - verify required files exist (`index.html`, `style.css`, `script.js`, `404.html`)
   - stage only the public files into `_site/`:
     `index.html`, `404.html`, `style.css`, `script.js`, `images/`, `assets/`
   - `actions/upload-pages-artifact` with `path: _site`
2. **deploy**
   - `actions/deploy-pages` with `needs: build`

Permissions: `contents: read`, `pages: write`, `id-token: write`.
Concurrency: group `pages`, `cancel-in-progress: false` (let the current deploy finish).

### Why staging instead of `path: .`

`path: .` would publish `about_me.md`, `Website_Portfolio_Student_Guide.docx`, `.github/`, and
`AGENTS/`. Staging keeps the published site to site files only, which satisfies the guide's rule to
publish only material intended for public viewing.

## First-time setup (already done in Phase 6, recorded here for reference)

```powershell
# create the repo and push
git init
git remote add origin https://github.com/Kevsssssss/portfolio.git
git push -u origin main

# enable Pages with GitHub Actions as the source
gh api -X POST repos/Kevsssssss/portfolio/pages `
  -f build_type=workflow
```

If Pages already exists, update instead:

```powershell
gh api -X PUT repos/Kevsssssss/portfolio/pages `
  -f build_type=workflow
```

## Update procedure (every change)

1. Edit files locally and preview `index.html` in a browser (or Live Preview).
2. Test desktop + narrow (phone) width, and every nav link, project link, and the `mailto:` link.
3. Update the matching `AGENTS/` file and add a `CHANGELOG.md` entry.
4. Commit and push:
   ```powershell
   git add -A
   git commit -m "Describe the change"
   git push
   ```
5. Optional: watch the run with `gh run watch`.
6. Refresh the live URL after the run succeeds (usually under a minute; GitHub may cache briefly).

Saving files locally does not update the live site — the push is what triggers deployment.

## T-Spot live demo (separate repo)

Phase 5 enables Pages on `Kevsssssss/T-Spot-Update-v1.5.3` (branch `master`, folder `/`) so the
project card can link a working demo. This changes no files in that repository; it only turns on
publishing. Resulting URL: https://kevsssssss.github.io/T-Spot-Update-v1.5.3/

## Troubleshooting

| Symptom | Check |
|---|---|
| 404 on the live site | Pages source is "GitHub Actions"; the latest run succeeded; the artifact contains `index.html` at its root. |
| Images/CSS missing | Filename spelling and letter case; paths must be relative (`images/...`) not absolute (`/images/...`) for a repo subpath. |
| "Nothing changed" online | The commit was pushed, the Action succeeded, then hard-refresh or use a private window. |
| Build failed | Read the first real error in the run log; usually an htmlhint rule or a missing required file. |
| Pages asks viewers to sign in | The repository must be public; Pages on a private repo needs a paid plan. |

## Notes

- `about_me.md` and `Website_Portfolio_Student_Guide.docx` stay in the repository as working
  references but are excluded from `_site/`.
- No custom domain is used; the free `github.io` project URL is the submitted link.
