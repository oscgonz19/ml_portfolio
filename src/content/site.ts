import type { Thread } from '@/types'

export const SITE = {
  name: 'Óscar A. González',
  shortName: 'Ó. A. González',
  tagline: 'From rocks to code',
  role: 'Geoscientist & Data Scientist',
  thesis: 'I explore the Earth through fieldwork, data, and technology.',
  support:
    'Geology, data science, software, geospatial technology and science communication — used together to understand landscapes and explain them to the people who depend on them.',
  description:
    'Geoscientist and data scientist working at the intersection of Earth science, fieldwork, data, software, geospatial technology, visualization and science communication.',
  url: 'https://ml-portfolio-oscgonz19.vercel.app',
  /** Home base, used as the site's coordinate stamp */
  base: { name: 'Quindío, Colombia', label: '4°32′N 75°44′W' },
} as const

export const SOCIAL = {
  github: 'https://github.com/oscgonz19',
  linkedin: 'https://linkedin.com/in/oscgonz19',
  email: 'oscgonz19@gmail.com',
  cv: 'https://www.canva.com/design/DAGN2J0fx8I/G4VsXVOJivhV5m9JaULFbA/view',
} as const

export const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'Field notes', href: '/field-notes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const THREADS: Record<
  Thread,
  { label: string; short: string; question: string; color: string }
> = {
  earth: {
    label: 'Earth & Geospatial',
    short: 'Earth',
    question: 'How does this landscape behave, and where is it changing?',
    color: 'ochre',
  },
  data: {
    label: 'Data & Software',
    short: 'Data',
    question: 'How do we turn observations into something people can use?',
    color: 'ink',
  },
  cartography: {
    label: 'Cartography & Visualization',
    short: 'Maps',
    question: 'How do we make terrain and evidence legible?',
    color: 'moss',
  },
  field: {
    label: 'Field & Expeditions',
    short: 'Field',
    question: 'What does the ground actually say when you stand on it?',
    color: 'ice',
  },
}
