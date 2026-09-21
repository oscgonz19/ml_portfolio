import type { MetadataRoute } from 'next'
import { PROJECTS } from '@/content/projects'
import { SITE } from '@/content/site'
import { getNoteMetas } from '@/lib/notes'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const pages = ['', '/work', '/about', '/field-notes', '/contact'].map((p) => ({ url: `${base}${p}` }))
  const projects = PROJECTS.filter((p) => p.cover.src).map((p) => ({ url: `${base}/work/${p.slug}` }))
  const notes = getNoteMetas().map((n) => ({ url: `${base}/field-notes/${n.slug}`, lastModified: n.date }))
  return [...pages, ...projects, ...notes]
}
