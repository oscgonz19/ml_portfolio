# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` or `yarn dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 14 portfolio website for Oscar Antonio González, a Machine Learning Engineer. The project uses the App Router pattern with a hybrid structure:

### Key Structure
- **Main page**: `src/pages/index.jsx` (Pages Router) - Acts as the primary entry point, importing and orchestrating all components
- **App directory**: `src/app/` contains layout, globals, and components using App Router conventions
- **Components**: Located in `src/app/componets/` (note: typo in directory name, should be "components")

### Component Architecture
The site is built as a single-page application with sectioned content:
- `HeroSection` - Full-screen landing with background image and social links
- `Profile` - About section with animated profile picture using Framer Motion
- `AreasOfInterest` - Skills and expertise areas
- `PortfolioComponent` - Project showcase
- `articlesComponent` - Publications and articles
- `Navbar` - Sticky navigation
- `Footer` - Site footer

### Styling System
- **Tailwind CSS** with custom layer organization (base, components, utilities)
- **Design theme**: Black background (`bg-black`) with white text, gray accents
- **CSS Custom Properties**: `--foreground-rgb` and `--background-rgb` for theming
- **Responsive**: Container-based layout with responsive padding using `lg:px-24`
- **Smooth scrolling** enabled globally via CSS

### Key Dependencies
- **Framer Motion**: Used for animations (Profile component has scale/opacity animations)
- **React Icons**: For social media and interface icons (FaLinkedin, FaGithub, etc.)
- **React Slick**: Carousel functionality
- **Next.js Image**: Optimized images with fill and object-fit properties

### File Organization Notes
- Components are in `src/app/componets/` (directory name has typo)
- Main page uses Pages Router pattern in `src/pages/index.jsx`
- Global styles in `src/app/globals.css` with Tailwind layers
- Public assets in `/public/` including profile images and background images

### Known Issues
- README.md has merge conflict markers that need to be resolved
- Component directory name should be corrected from "componets" to "components"