# PROJECTS.md — featured project data

Approved source of truth for the Projects section. Descriptions are derived from each repository's
own README and metadata. Do not add achievements that are not supported here.

Display order on the site: Patintero Legacy, OmniSight, SkillSwap, Website URL Blocker,
Note-Taking-API, T-Spot.

---

## 1. Patintero Legacy

- **Summary:** A digital version of the traditional Filipino street game Patintero, built with the
  Phaser 3 game framework. Two players (WASD and arrow keys) cross the court and return without
  being tagged by the bot team. Each round trip scores 10 points; a tag sends a player back and
  cancels their checkpoint; each player has 5 lives, and the game ends when either player runs out.
- **My contribution:** Solo developer — game design, logic, sprites, and web deployment.
- **Tech:** JavaScript, Phaser 3, Webpack, Node.js.
- **Repo:** https://github.com/Kevsssssss/Patintero-Legacy
- **Live:** https://kevsssssss.github.io/Patintero-Legacy/
- **Screenshot:** `images/projects/patintero.jpg` (real gameplay screenshot).

## 2. OmniSight

- **Summary:** A professional-grade LAN-based monitoring and control system for parental oversight
  and internet cafe management. Features live screen monitoring, remote lock/shutdown/broadcast,
  a password-protected dashboard, and a tamper-resistant client that runs as a Windows service.
- **My contribution:** Solo developer.
- **Tech:** C# / .NET (WPF + WebView2), React / Next.js, TypeScript, SignalR, Inno Setup.
- **Repo:** https://github.com/Kevsssssss/OmniSight
- **Live:** none (desktop/LAN application).
- **Screenshot:** `images/projects/omnisight.jpg` (real — admin dashboard).

## 3. SkillSwap

- **Summary:** A karma-based service marketplace where users trade skills and post bounties.
  Transactions use a virtual Karma currency with an escrow mechanism that releases only when both
  parties approve. Includes real-time chat with file sharing, live notifications, a dynamic trading
  floor, and a review/rating engine.
- **My contribution:** Solo developer.
- **Tech:** Django, Python 3, Django Channels (ASGI / Daphne), WebSockets, Redis (Docker), SQLite,
  Bootstrap 5.3, HTML/CSS/JS.
- **Repo:** https://github.com/Kevsssssss/skillswap_project
- **Live:** none (requires a Django + Redis runtime).
- **Screenshot:** `images/projects/skillswap.jpg` (real — trading floor).

## 4. Website URL Blocker

- **Summary:** A lightweight Windows parental-control tool written in Go. It blocks domains
  system-wide through the Windows hosts file, supports mutual block groups, hot-reloads the block
  list, is protected by a bcrypt-hashed password, and can install itself as an auto-starting
  Windows service.
- **My contribution:** Solo developer.
- **Tech:** Go, Windows services, hosts-file filtering.
- **Repo:** https://github.com/Kevsssssss/website_url_blocker
- **Live:** none (desktop application).
- **Screenshot:** `images/projects/url-blocker.jpg` (real — interactive shell).

## 5. Note-Taking-API

- **Summary:** A RESTful notes API built with Laravel demonstrating CRUD, validation, and handling
  of single and multiple resources. Notes carry a title, body, and tags, and creation supports both
  single and batch requests.
- **My contribution:** Solo developer.
- **Tech:** Laravel, PHP 8.1+, SQLite, Composer.
- **Repo:** https://github.com/Kevsssssss/Note-Taking-API
- **Live:** none (local API).
- **Screenshot:** `images/projects/note-taking-api.jpg` (real — sample request/response).

## 6. T-Spot

- **Summary:** A multi-page Cebu travel guide website presenting 30 tourist destinations, each with
  its own page, plus travel tips, a locations overview, an about page, and a contact page.
- **My contribution:** Solo developer.
- **Tech:** HTML5, CSS3, JavaScript.
- **Repo:** https://github.com/Kevsssssss/T-Spot-Update-v1.5.3
- **Live:** https://kevsssssss.github.io/T-Spot-Update-v1.5.3/ (Pages enabled during Phase 5).
- **Screenshot:** `images/projects/t-spot.jpg` (real — homepage).

---

## Screenshot convention

- Location: `images/projects/<slug>.jpg`, slug = `patintero`, `omnisight`, `skillswap`,
  `url-blocker`, `note-taking-api`, `t-spot`.
- All six are **real screenshots** now (replaced the earlier placeholders on 2026-10-16).
- Format: JPEG, ~1200px wide, 40-210 KB each. Card images use `object-fit: contain`, so the full
  screenshot is shown (thin dark bars frame it) instead of being cropped.
- Raw, full-size originals are kept locally in `sources/` (git-ignored, never published).
- To replace an image later, overwrite the matching `images/projects/<slug>.jpg` (keep the same
  name) or update the `src`/`alt` in `index.html`.

## Profile photo

- `images/profile.jpg` — 800x800 square, JPEG, ~73 KB. Displayed as a circle in the hero; CSS crops
  centered, so keep the face centered in the frame when replacing.
