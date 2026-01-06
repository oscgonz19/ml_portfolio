# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `yarn dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 14 portfolio website using a hybrid router structure:

### Key Structure
- **Main page**: `src/pages/index.jsx` (Pages Router) - Primary entry point that imports and orchestrates all components
- **App directory**: `src/app/` contains layout, globals.css, and components
- **Components**: Located in `src/app/componets/` (note: directory has typo, should be "components")

### Component Architecture
Single-page application with sectioned content:
- `HeroSection` - Full-screen landing with background image and social links
- `Profile` - About section with animated profile picture using Framer Motion
- `AreasOfInterest` - Skills and expertise grid (6 cards)
- `PortfolioComponent` - Project showcase with category filtering
- `articlesComponent` - Publications carousel using React Slick
- `Navbar` - Sticky navigation with mobile hamburger menu
- `Footer` - Site footer

### Styling System
- **Tailwind CSS** with custom layer organization (base, components, utilities)
- **Design theme**: Black background (`bg-black`) with white text, gray accents
- **Custom fonts** (defined in tailwind.config.js):
  - `font-sans` (Inter) - Base text
  - `font-display` (DM Serif Display) - Hero/large titles
  - `font-geoai` (Space Grotesk) - Technical headings, GeoAI labels
  - `font-mono` (JetBrains Mono) - Code/technical content
- **Responsive**: Container-based layout with `lg:px-24` padding

### Path Aliases
Import using `@/*` for `./src/*` paths (configured in tsconfig.json)

### Key Dependencies
- **Framer Motion**: Animations throughout components
- **React Icons**: Social and UI icons (FaLinkedin, FaGithub, FiMenu, etc.)
- **React Slick**: Article carousel functionality
- **Next.js Image**: Optimized images with fill and object-fit properties

### File Organization
- Components use `'use client'` directive for client-side features
- Global styles in `src/app/globals.css` with Tailwind layers
- Public assets in `/public/` (profile images, project mockups, backgrounds)

### Known Issues
- README.md has merge conflict markers that need resolution
- Component directory name typo: `componets` should be `components`
