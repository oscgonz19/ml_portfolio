import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDate } from '@/lib/format'
import { getAllNotes, getNote } from '@/lib/notes'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const note = getNote(params.slug)
  if (!note) return {}
  return {
    title: note.title,
    description: note.summary,
    openGraph: note.cover ? { images: [{ url: note.cover }] } : undefined,
  }
}

export default function NotePage({ params }: Params) {
  const note = getNote(params.slug)
  if (!note) notFound()

  return (
    <article className="wrap pt-14">
      <header className="rule-ink mx-auto max-w-prose pt-5">
        <p className="label">
          {formatDate(note.date)}
          {note.place ? ` · ${note.place}` : ''}
        </p>
        <h1 className="mt-3 text-4xl leading-[1.08] md:text-5xl">{note.title}</h1>
        <p className="mt-4 text-pretty text-[17px] text-ink-2">{note.summary}</p>
      </header>

      {note.cover && (
        <figure className="mx-auto mt-10 max-w-3xl">
          <div className="relative w-full overflow-hidden border border-rule bg-paper-2" style={{ aspectRatio: 1.6 }}>
            <Image src={note.cover} alt="" fill priority sizes="(min-width: 768px) 48rem, 100vw" className="object-cover" />
          </div>
        </figure>
      )}

      <div className="prose-note mx-auto mt-10 max-w-prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.body}</ReactMarkdown>
      </div>

      <footer className="mx-auto mt-12 max-w-prose">
        <ul className="flex flex-wrap gap-2">
          {note.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <nav className="rule-ink mt-8 pt-5 text-[15px]">
          <Link href="/field-notes" className="link">
            ← All field notes
          </Link>
        </nav>
      </footer>
    </article>
  )
}
