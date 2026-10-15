// Local validation for the static site (Phase 4).
// Usage: node tools/check.mjs
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";

const root = process.cwd();
const pages = ["index.html", "404.html"];
let errors = 0;
let warnings = 0;

const fail = (m) => { console.error("  ERROR  " + m); errors++; };
const warn = (m) => { console.warn("  WARN   " + m); warnings++; };

for (const page of pages) {
  console.log("\n== " + page + " ==");
  const html = readFileSync(join(root, page), "utf8");

  // 1. Local file references (src/href) must exist.
  const refRe = /(?:src|href)\s*=\s*"([^"]+)"/g;
  const locallyReferenced = new Set();
  let m;
  while ((m = refRe.exec(html))) {
    const url = m[1];
    if (/^(#|mailto:|tel:|https?:|\/\/|data:)/.test(url)) continue;
    // Root-absolute paths (e.g. /portfolio/) resolve at the site root, not on disk.
    if (url.charAt(0) === "/") { continue; }
    const clean = url.split("#")[0].split("?")[0];
    if (!clean) continue;
    locallyReferenced.add(clean);
    const abs = resolve(root, clean);
    if (!existsSync(abs)) fail(`${page}: missing file -> ${url}`);
  }

  // 2. Anchors: every href="#id" must have a matching id in the same page.
  const ids = new Set();
  const idRe = /\sid\s*=\s*"([^"]+)"/g;
  while ((m = idRe.exec(html))) {
    if (ids.has(m[1])) fail(`${page}: duplicate id "${m[1]}"`);
    ids.add(m[1]);
  }

  const anchorRe = /href\s*=\s*"#([^"]+)"/g;
  while ((m = anchorRe.exec(html))) {
    if (!ids.has(m[1])) fail(`${page}: anchor "#${m[1]}" has no target id`);
  }

  // 3. Images must have alt text.
  const imgRe = /<img\b[^>]*>/g;
  while ((m = imgRe.exec(html))) {
    if (!/\balt\s*=/.test(m[0])) fail(`${page}: <img> without alt -> ${m[0].slice(0, 70)}`);
    if (!/\bloading\s*=/.test(m[0])) warn(`${page}: <img> without loading attribute`);
  }

  // 4. External links opening a new tab should carry rel=noopener.
  const extRe = /<a\b[^>]*target\s*=\s*"_blank"[^>]*>/g;
  while ((m = extRe.exec(html))) {
    if (!/rel\s*=\s*"[^"]*noopener/.test(m[0])) fail(`${page}: target=_blank without rel=noopener -> ${m[0].slice(0, 70)}`);
  }

  // 5. Basic hygiene: single <h1>, title present, viewport present.
  const h1s = (html.match(/<h1\b/g) || []).length;
  if (h1s !== 1) warn(`${page}: expected exactly one <h1>, found ${h1s}`);
  if (!/<title>[^<]+<\/title>/.test(html)) fail(`${page}: missing <title>`);
  if (!/name\s*=\s*"viewport"/.test(html)) fail(`${page}: missing viewport meta`);

  console.log(`  checked ${locallyReferenced.size} local refs, ${ids.size} ids`);
}

console.log(`\n${errors} error(s), ${warnings} warning(s).`);
process.exit(errors ? 1 : 0);
