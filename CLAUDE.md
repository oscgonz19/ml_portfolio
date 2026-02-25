# CLAUDE.md

## Development Commands

- `yarn dev` — Start dev server on http://localhost:3000
- `yarn build` — Production build (all pages statically generated)
- `yarn lint` — ESLint (eslint-config-next)

Uses yarn. No test suite.

## Architecture

Next.js 14 App Router, strict TypeScript, Tailwind CSS. All pages are server components — zero client JavaScript shipped.

### File Structure

```
src/
  app/                  # App Router pages
    layout.tsx          # Root layout (metadata, globals.css)
    page.tsx            # Homepage
    work/
      page.tsx          # Projects list
      [slug]/page.tsx   # Case study (dynamic, SSG via generateStaticParams)
    writing/page.tsx    # Writing list
  components/           # Reusable UI
    typography.tsx      # H1, H2, Text, Muted, Small primitives
    layout.tsx          # Container (max-w-2xl), Section, Divider
    nav.tsx             # Site navigation
    footer.tsx          # Site footer
    project-card.tsx    # Project list item
    case-study-layout.tsx  # Case study page sections
  content/              # Data layer (no CMS, typed constants)
    site.ts             # Site metadata, social links, nav items, CV URL
    projects.ts         # Project definitions + case studies
    writing.ts          # Writing/article entries
  types/
    index.ts            # Project, CaseStudy, WritingPost, NavItem interfaces
```

### Content Data Shapes

**Project:** `{ slug, title, description, stack: string[], github, featured, caseStudy? }`

**CaseStudy:** `{ context, problem, approach: string[], decisions: string[], tradeoffs: string[], outcome }`

**WritingPost:** `{ title, date, description, href, tags: string[] }`

### Design System

- **Fonts:** System font stack (Tailwind defaults — no external font loading)
- **Colors:** Black background (#000), white headings, neutral-400 body text, neutral-500 muted, neutral-600 subtle, neutral-800 borders
- **Spacing:** Container max-w-2xl (672px), px-6 horizontal padding, py-16 section padding
- **Hover states:** Opacity transitions or color transitions only — no animations
- **No rounded cards, no gradients, no shadows, no animation libraries**

### Path Aliases

`@/*` maps to `./src/*` (tsconfig.json)

### External URLs (hardcoded in `src/content/site.ts`)

- GitHub: `https://github.com/oscgonz19`
- LinkedIn: `https://linkedin.com/in/oscgonz19`
- Email: `oscgonz19@gmail.com`
- CV: Canva design link

Article URLs are LinkedIn Pulse links in `src/content/writing.ts`.

### Key Decisions

- **No images in project cards** — text-only, ultra-minimal layout
- **No client components** — everything is server-rendered and statically generated
- **No animation library** — removed Framer Motion, React Slick, React Icons
- **System fonts** — removed 4 Google Font imports for performance
- **Separated content layer** — all data in `src/content/` with TypeScript types
- **Case study template** at `/work/[slug]` with structured sections: Context, Problem, Approach, Technical Decisions, Trade-offs, Outcome

### Reference

`PROFESSIONAL_NARRATIVE.md` contains tone guidelines, positioning, and content patterns for writing project descriptions and hero copy.
