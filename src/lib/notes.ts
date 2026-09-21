import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Note, NoteMeta } from '@/types'

const NOTES_DIR = path.join(process.cwd(), 'src', 'content', 'notes')

function toSlug(filename: string): string {
  // "2026-07-residual-soil.md" -> "residual-soil"
  return filename.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-/, '')
}

function parse(filename: string): Note {
  const raw = fs.readFileSync(path.join(NOTES_DIR, filename), 'utf8')
  const { data, content } = matter(raw)
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date)
  return {
    slug: toSlug(filename),
    title: String(data.title),
    date,
    summary: String(data.summary ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    place: data.place ? String(data.place) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    body: content.trim(),
  }
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return []
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getNoteMetas(): NoteMeta[] {
  return getAllNotes().map(({ body: _body, ...meta }) => meta)
}

export function getNote(slug: string): Note | undefined {
  return getAllNotes().find((n) => n.slug === slug)
}

/** Earlier writing that lives elsewhere. Kept apart from the notebook. */
export const EARLIER_WRITING = [
  {
    title: 'Visualizing data for insight',
    href: 'https://www.linkedin.com/pulse/la-visualizaci%25C3%25B3n-de-datos-en-ciencia-transformando-n%25C3%25BAmeros-gonz%25C3%25A1lez-g1uee/',
    year: '2024',
  },
  {
    title: 'The art of personalization',
    href: 'https://www.linkedin.com/pulse/sistemas-recomendadores-el-arte-de-la-personalizaci%25C3%25B3n-gonz%25C3%25A1lez-uqfwe/',
    year: '2024',
  },
  {
    title: 'Sailing an ocean of data',
    href: 'https://www.linkedin.com/pulse/explorando-la-ciencia-de-datos-transformando-el-mar-en-gonz%25C3%25A1lez-q5yke/',
    year: '2024',
  },
  {
    title: 'The cloud that holds it all',
    href: 'https://www.linkedin.com/pulse/la-nube-que-todo-lo-sostiene-ia-y-el-procesamiento-masivo-gonz%25C3%25A1lez-anfje/',
    year: '2024',
  },
  {
    title: 'Python: reign of the snake',
    href: 'https://www.linkedin.com/pulse/python-la-hegemon%25C3%25ADa-de-serpiente-%25C3%25B3scar-antonio-gonz%25C3%25A1lez-z9kue/',
    year: '2024',
  },
] as const
