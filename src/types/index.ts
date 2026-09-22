/** The four threads of the practice. A project usually belongs to more than one. */
export type Thread = 'earth' | 'data' | 'cartography' | 'field'

export interface Place {
  name: string
  /** [longitude, latitude] — GeoJSON order */
  coords: [number, number]
  /** Human-readable coordinate label, e.g. 4°32′N 75°44′W */
  label: string
  zoom?: number
}

export interface Figure {
  src: string
  alt: string
  caption: string
  /** Width / height ratio of the source image, used to reserve space */
  ratio: number
  /** Where the figure comes from: a map, a photograph, a plot, a screenshot */
  kind: 'map' | 'photo' | 'plot' | 'screen' | 'render'
}

export interface Link {
  label: string
  href: string
}

/** One row of a field station log */
export interface Station {
  code: string
  place: string
  municipality: string
  /** [longitude, latitude] */
  coords: [number, number]
  elevation: number
  unit: string
  lithology: string
  weathering: string
  slope: string
  condition: 'stable' | 'marginal' | 'unstable'
  process: string
}

export interface ProjectStory {
  question: string
  place: string
  data: string[]
  method: string[]
  result: string
}

export interface Project {
  slug: string
  title: string
  /** One sentence that states the problem, not the stack */
  summary: string
  year: string
  threads: Thread[]
  place: Place
  /** Extra sites for projects that span many places (drawn on the same map) */
  places?: Place[]
  /** Field station log, rendered as a table and as dots on the map */
  stations?: Station[]
  /** Featured projects get a full story page and large visuals */
  featured: boolean
  cover: Figure
  figures: Figure[]
  story?: ProjectStory
  technology: string[]
  links: Link[]
}

export interface NoteMeta {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  place?: string
  cover?: string
}

export interface Note extends NoteMeta {
  body: string
}
