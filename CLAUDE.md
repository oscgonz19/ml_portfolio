# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Commands

- `yarn dev` — dev server on http://localhost:3000
- `yarn build` — production build (also type-checks and lints)
- `yarn start` — serve the production build
- `yarn lint` — ESLint

## What this site is

Personal site of Óscar A. González, built around one identity: **"From rocks to code"** —
a geoscientist and data scientist who works in the field, with data, with software and with maps.
It is designed as a *digital field journal*, not a résumé or a generic data-science portfolio.

Design rules that must survive any change:

- Projects are organized by **question and place**, never by technology stack. Technology is
  listed last on every project page.
- Four threads (Earth & Geospatial, Data & Software, Cartography & Visualization, Field &
  Expeditions) are tags that overlap, not separate sections. A project usually has several.
- The work is the visual: real maps, field photographs, plots and renders. No stock imagery,
  no skill bars, no tech-gradient backgrounds, no lists of programming languages, minimal
  animation.
- Palette is paper/ink with an ochre accent; typography is Fraunces (display), IBM Plex Sans
  (body), IBM Plex Mono (labels, coordinates, captions).

## Architecture

Next.js 14 App Router, TypeScript strict, Tailwind. Almost everything is a server component;
the only client code is the MapLibre map.

```
src/
  app/                  routes: /, /work, /work/[slug], /about, /field-notes, /field-notes/[slug], /contact
  components/           figure, project cards, header/footer, place-map (client), threads diagram
  content/
    site.ts             name, tagline, nav, social links, thread definitions
    projects.ts         ALL project content (story, figures, technology, links) — edit here
    about.ts            about narrative, stratigraphy, education, experience, places
    notes/*.md          field notes (markdown + frontmatter); filename `YYYY-MM-slug.md`
  lib/notes.ts          markdown loader (gray-matter) + earlier-writing links
  types/index.ts        Project / Figure / Place / Note types
public/
  terrain/              hero hillshade + contours rendered from a 12.5 m DEM of Quindío
  work/quindio, field, posters   project figures (JPEG, ≤ 2000 px wide)
```

### Adding content

- **Project**: add an entry to `src/content/projects.ts`. `featured: true` gives it a full
  story page (question / place / data / method / result / visualization / technology). A
  non-featured project with a `cover` becomes a secondary card; with `cover.src: ''` it is a
  compact row that links to its repository. Put images in `public/work/...` and set `ratio`
  to width/height.
- **Field note**: drop a markdown file in `src/content/notes/` with `title`, `date`,
  `summary`, `tags`, optional `place` and `cover`. The slug is the filename without the
  `YYYY-MM-` prefix.

### Map

`place-map.tsx` lazy-loads MapLibre (v5 — v6 is ESM-only and its worker does not bundle
under Next 14's webpack). Tiles come from OpenFreeMap (no key). The map container needs an
inline `position: absolute` because `maplibre-gl.css` sets `.maplibregl-map { position:
relative }` and would otherwise collapse it.

### Hero terrain

`public/terrain/*` were generated from the Quindío DEM with a matplotlib hillshade + contour
script (not in the repo). Regenerate with any DEM: hillshade az 315°, 100 m contours, 500 m
index lines, dark warm charcoal background.
