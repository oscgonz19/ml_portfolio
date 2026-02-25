export interface Project {
  slug: string
  title: string
  description: string
  stack: string[]
  github: string
  featured: boolean
  caseStudy?: CaseStudy
}

export interface CaseStudy {
  context: string
  problem: string
  approach: string[]
  decisions: string[]
  tradeoffs: string[]
  outcome: string
}

export interface WritingPost {
  title: string
  date: string
  description: string
  href: string
  tags: string[]
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}
