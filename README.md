# oscargonzalez.dev

Personal portfolio. Geospatial ML Engineer.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript (strict)
- Tailwind CSS
- System font stack

## Architecture

```
src/
  app/          Pages (all server components, statically generated)
  components/   Design system (typography, layout, cards)
  content/      Typed data layer (projects, writing, site config)
  types/        TypeScript interfaces
```

### Decisions

**No animation library.** Previous version used Framer Motion + React Slick. Removed both. Hover states use CSS transitions only.

**No external fonts.** Removed 4 Google Font imports (Inter, DM Serif Display, Space Grotesk, JetBrains Mono). System font stack loads instantly.

**No images in project cards.** Text communicates better than screenshots for technical work. Reduces payload and maintenance burden.

**Content as typed constants.** All project data, writing entries, and site config live in `src/content/` with TypeScript interfaces. No CMS, no markdown parsing, no build-time data fetching.

**Server components only.** Zero client JavaScript. Every page is statically generated at build time.

**Case study template.** `/work/[slug]` renders structured case studies: Context, Problem, Approach, Technical Decisions, Trade-offs, Outcome.

## Development

```bash
yarn dev      # http://localhost:3000
yarn build    # production build
yarn lint     # eslint
```

## Build Output

All pages are statically generated. Page JS is 183 bytes each.
