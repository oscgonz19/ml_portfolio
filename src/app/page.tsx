import Image from 'next/image'
import Link from 'next/link'
import { CompactProject, FeaturedProject, SecondaryProject } from '@/components/project-card'
import { ScaleBar } from '@/components/scale-bar'
import { SectionHeading } from '@/components/section-heading'
import { ThreadsDiagram } from '@/components/threads-diagram'
import { getCompact, getFeatured, getSecondary } from '@/content/projects'
import { SITE, SOCIAL, THREADS } from '@/content/site'
import { formatDate } from '@/lib/format'
import { getNoteMetas } from '@/lib/notes'

export default function HomePage() {
  const featured = getFeatured()
  const secondary = getSecondary()
  const compact = getCompact()
  const notes = getNoteMetas().slice(0, 3)

  return (
    <>
      {/* ---------- Hero: real terrain, not a stock photo ---------- */}
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-night text-paper">
        <Image
          src="/terrain/hero-terrain.jpg"
          alt="Hillshade with contour lines of the Cordillera Central, Quindío, Colombia"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night/70 via-night/35 to-night/85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/55 via-transparent to-transparent" />

        <div className="wrap flex min-h-[92svh] flex-col justify-between py-8">
          {/* Map-sheet annotations */}
          <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-label text-paper/70">
            <p>Field journal · Sheet 01</p>
            <p className="hidden sm:block">Cordillera Central · 12.5 m DEM · 100 m contours</p>
          </div>

          <div className="max-w-3xl py-16">
            <p className="label mb-6 !text-paper/70">{SITE.role}</p>
            <h1 className="font-display text-[2.75rem] font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              From rocks
              <br />
              to code.
            </h1>
            <p className="mt-8 max-w-xl font-display text-xl italic leading-snug text-paper/90 sm:text-2xl">
              “{SITE.thesis}”
            </p>
            <p className="mt-6 max-w-xl text-pretty text-[16px] leading-relaxed text-paper/75">{SITE.support}</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link href="#work" className="font-mono text-[12px] uppercase tracking-label text-paper underline decoration-paper/40 underline-offset-8 hover:decoration-paper">
                Selected work ↓
              </Link>
              <Link href="/about" className="font-mono text-[12px] uppercase tracking-label text-paper/70 hover:text-paper">
                About
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6">
            <ScaleBar light km={5} />
            <p className="max-w-xs text-right font-mono text-[11px] leading-relaxed text-paper/55">
              {SITE.base.name} · {SITE.base.label}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Selected work ---------- */}
      <section id="work" className="wrap scroll-mt-16 pt-20">
        <SectionHeading
          eyebrow="Selected work"
          title="Questions about places"
          intro="Each project starts with a question about a landscape and ends with something people can use: a map, a model, a tool, a report."
          more={{ label: 'All work', href: '/work' }}
        />
        <div className="mt-14 space-y-24">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} flip={i % 2 === 1} priority={i === 0} />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="rule mt-24 grid gap-10 pt-10 md:grid-cols-3">
            {secondary.map((p) => (
              <SecondaryProject key={p.slug} project={p} />
            ))}
          </div>
        )}
      </section>

      {/* ---------- Threads ---------- */}
      <section className="wrap pt-24">
        <div className="rule-ink grid gap-10 pt-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label mb-2">One practice</p>
            <h2 className="text-3xl md:text-4xl">Four threads, one notebook</h2>
            <p className="measure mt-4 text-pretty text-ink-2">
              Fieldwork, data science, software, cartography and science communication are not separate careers. They
              are the tools I reach for, usually in the same week, to understand a piece of the Earth and explain it.
            </p>
            <div className="mt-8 md:hidden">
              <ThreadsDiagram />
            </div>
          </div>
          <div className="md:col-span-3 md:flex md:items-center">
            <div className="hidden md:block">
              <ThreadsDiagram />
            </div>
          </div>
          <dl className="grid gap-5 sm:grid-cols-2 md:col-span-4 md:grid-cols-1">
            {(Object.keys(THREADS) as Array<keyof typeof THREADS>).map((k) => (
              <div key={k}>
                <dt className={`chip chip-${k}`}>{THREADS[k].label}</dt>
                <dd className="mt-1 text-pretty text-[15px] text-ink-2">{THREADS[k].question}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Data & software, compact ---------- */}
      {compact.length > 0 && (
        <section className="wrap pt-24">
          <SectionHeading
            eyebrow="Data & software"
            title="Models, audits, systems"
            intro="Work where the place is a dataset. Less visual, same discipline: state the question, measure the answer, say how sure you are."
          />
          <ul className="mt-8">
            {compact.slice(0, 4).map((p) => (
              <CompactProject key={p.slug} project={p} />
            ))}
          </ul>
          {compact.length > 4 && (
            <Link href="/work#data" className="link mt-6 inline-block text-[15px]">
              More on the work page →
            </Link>
          )}
        </section>
      )}

      {/* ---------- Field notes ---------- */}
      {notes.length > 0 && (
        <section className="wrap pt-24">
          <SectionHeading
            eyebrow="Field notes"
            title="From the notebook"
            more={{ label: 'All notes', href: '/field-notes' }}
          />
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {notes.map((n) => (
              <li key={n.slug} className="rule pt-5">
                <p className="label">
                  {formatDate(n.date)}
                  {n.place ? ` · ${n.place}` : ''}
                </p>
                <h3 className="mt-2 text-xl leading-snug">
                  <Link href={`/field-notes/${n.slug}`} className="hover:text-ochre-deep">
                    {n.title}
                  </Link>
                </h3>
                <p className="mt-2 text-pretty text-[15px] text-ink-2">{n.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---------- Contact ---------- */}
      <section className="wrap pt-24">
        <div className="rule-ink grid gap-6 pt-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label mb-2">Contact</p>
            <h2 className="text-3xl md:text-4xl">Fieldwork, data, maps — or all three.</h2>
          </div>
          <ul className="flex flex-col gap-2 text-[16px] md:col-span-5 md:items-end md:justify-center">
            <li>
              <a href={`mailto:${SOCIAL.email}`} className="link">
                {SOCIAL.email}
              </a>
            </li>
            <li>
              <a href={SOCIAL.linkedin} className="link" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIAL.github} className="link" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIAL.cv} className="link" rel="noopener noreferrer">
                CV
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
