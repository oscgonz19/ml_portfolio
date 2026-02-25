import type { NavItem } from '@/types'

export const SITE = {
  name: 'Oscar Gonzalez',
  title: 'Oscar Gonzalez — Geospatial ML Engineer',
  description:
    'Geospatial ML Engineer. Terrain risk models, satellite-derived analytics, and environmental ML systems.',
} as const

export const SOCIAL = {
  github: 'https://github.com/oscgonz19',
  linkedin: 'https://linkedin.com/in/oscgonz19',
  email: 'oscgonz19@gmail.com',
} as const

export const CV_URL =
  'https://www.canva.com/design/DAGN2J0fx8I/G4VsXVOJivhV5m9JaULFbA/view'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'GitHub', href: SOCIAL.github, external: true },
]
