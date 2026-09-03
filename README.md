# Portfolio site

A static site. No build step, no framework, no dependencies. Drop the files
in a repo, point Cloudflare Pages at it, done.

## Files

```
index.html      Home
work.html       All case studies
case.html       One case study        → case.html?id=salesforce-ux
about.html      About, career, education, skills
contact.html    Contact
page.html       Any extra page        → page.html?id=writing
admin.html      The editor (see below)

css/theme.css   ← EVERYTHING visual: fonts (and the @import),
                  colours, type scale, spacing, widths, radius.
                  Six numbered sections with a map at the top.
css/site.css    Layout and components. Uses only theme.css variables.

js/content.js   ← ALL words, links and image paths. Edit this to change content.
js/app.js       Builds the pages from content.js. You never need to touch it.

images/         Put photos, screenshots, logo and favicon.png here.
```

Two files hold everything you'll ever change: **theme.css** for how it looks,
**content.js** for what it says.

## Editing without touching code

1. Open `admin.html` in a browser (double-click it, or visit
   `yoursite.com/admin.html`).
2. Change whatever you want. Edits autosave as a draft in that browser.
3. **Preview site** opens the real pages with your unsaved edits applied.
4. **Download content.js** when you're happy.
5. In GitHub: open the `js` folder → `content.js` → pencil icon → select all →
   paste the new contents → commit to `main`.
6. Cloudflare rebuilds. Live in about a minute.

Colours work the same way: the **Theme & colours** tab previews live, then
**Download theme.css** and replace `css/theme.css` the same way.

`admin.html` is just a local editor. It has no login and stores nothing on a
server, so it can't be used to change your live site by itself — the only way
anything goes live is you committing the downloaded file. If you'd rather it
not be public at all, delete `admin.html` from the repo and keep a copy on
your laptop.

## Adding images

1. GitHub → `images` folder → **Add file → Upload files** → commit.
2. In admin, type the path into the matching field: `images/portrait.jpg`.

Keep files under ~400 KB. Use `.webp` or compressed `.jpg` for photos,
`.png` for screenshots and diagrams, `.svg` for logos and flow charts.

A `favicon.png` in `images/` (32×32 or 64×64) becomes the browser tab icon.

## Adding a new page

In admin → **Extra pages** → pick a template:

- **text** — title, intro, paragraphs
- **links** — a list of links with descriptions (writing, talks, resources)
- **gallery** — grid of images with captions

Then go to **Navigation** and add a menu link pointing at
`page.html?id=your-page-id`.

## Adding a case study

Admin → **Case studies** → **Add case study** → Edit. Build the page from
blocks in any order:

| Block | Use it for |
|---|---|
| text | a section with a heading and a paragraph |
| list | bullet points |
| stats | four big numbers with labels |
| quote | a pull quote from a user or stakeholder |
| image | one image with a caption |
| gallery | several images in a grid |

Placeholders are written as `[[like this]]` — search for `[[` to find
everything still waiting to be filled in.

## Common CSS edits

All in `css/theme.css`. The header comment lists which section each
lives in.

| Want to change | Edit |
|---|---|
| Button shape | `--radius-btn` |
| Tag / chip shape | `--radius-chip` (999px = pill) |
| Accent colour | `--c-accent` (+ `--c-accent-hover`, `--c-accent-tint`) |
| Page background | `--c-bg` |
| Content width | `--w-page` |
| Page title size | `--fs-title` |
| Gap between sections | `--section-y` |

If you change a text colour, check it against its background at
webaim.org/resources/contrastchecker — text needs 4.5, borders 3.0.
`--c-accent` also carries white button text, so it can't go too pale.

## Changing the fonts

All in `css/theme.css` (or admin's Theme tab):

1. Pick families on fonts.google.com and copy the URL from inside their
   `<link>` tag.
2. Paste it into the `@import url(...)` line at the top of `theme.css`.
3. Update `--font-title`, `--font-display` and `--font-body` to match.

Nothing else needs touching. The `.html` files never reference fonts.

## Accessibility notes already handled

Skip link, visible keyboard focus, `aria-current` on the active nav item,
reduced-motion respected, alt text fields on every image, and text that
reflows down to a 320px screen. When you add images, fill in the alt text —
it's the one thing that can slip.
