import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '@/lib/format'
import { EARLIER_WRITING, getNoteMetas } from '@/lib/notes'

export const metadata: Metadata = {
  title: 'Field notes',
  description: 'Short pieces on geology, maps, mountains, remote sensing and visualization experiments.',
}

export default function FieldNotesPage() {
  const notes = getNoteMetas()

  return (
    <div className="wrap pt-14">
      <header className="rule-ink pt-5">
        <p className="label mb-2">Field notes</p>
        <h1 className="text-4xl md:text-5xl">A notebook, not a blog</h1>
        <p className="measure mt-4 text-pretty text-ink-2">
          Short entries on geology, maps, mountains, remote sensing and the occasional experiment. Dated and placed,
          like everything else in a field book.
        </p>
      </header>

      <ol className="mt-12">
        {notes.map((n) => (
          <li key={n.slug} className="rule grid gap-4 py-8 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
              <p className="label">{formatDate(n.date)}</p>
              {n.place && <p className="mt-1 font-mono text-[12px] text-ink-3">{n.place}</p>}
            </div>
            <div className="md:col-span-6">
              <h2 className="text-2xl leading-snug">
                <Link href={`/field-notes/${n.slug}`} className="hover:text-ochre-deep">
                  {n.title}
                </Link>
              </h2>
              <p className="mt-2 text-pretty text-[15px] text-ink-2">{n.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {n.tags.map((t) => (
                  <li key={t} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            {n.cover && (
              <Link href={`/field-notes/${n.slug}`} className="md:col-span-3">
                <div className="relative w-full overflow-hidden border border-rule bg-paper-2" style={{ aspectRatio: 1.5 }}>
                  <Image src={n.cover} alt="" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" />
                </div>
              </Link>
            )}
          </li>
        ))}
      </ol>

      <section className="mt-20">
        <div className="rule-ink pt-5">
          <p className="label mb-2">Earlier writing</p>
          <p className="measure text-pretty text-[15px] text-ink-2">
            Longer pieces from the data-science years, published on LinkedIn (in Spanish).
          </p>
        </div>
        <ul className="mt-4">
          {EARLIER_WRITING.map((w) => (
            <li key={w.href} className="rule flex items-baseline justify-between gap-4 py-3 text-[15px]">
              <a href={w.href} className="link" rel="noopener noreferrer">
                {w.title} ↗
              </a>
              <span className="label">{w.year}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
