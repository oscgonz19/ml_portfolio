import type { Metadata } from 'next'
import { CompactProject, FeaturedProject, SecondaryProject } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { getCompact, getFeatured, getSecondary } from '@/content/projects'
import { THREADS } from '@/content/site'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects: landslide hazard, corridor geology, vegetation change, cartography and data systems.',
}

export default function WorkPage() {
  const featured = getFeatured()
  const secondary = getSecondary()
  const compact = getCompact()

  return (
    <div className="wrap pt-14">
      <header className="rule-ink pt-5">
        <p className="label mb-2">Selected work</p>
        <h1 className="text-4xl md:text-5xl">Organized by question, not by stack</h1>
        <p className="measure mt-4 text-pretty text-ink-2">
          Most projects sit on more than one thread. The chips say which; the story says why.
        </p>
        <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(THREADS) as Array<keyof typeof THREADS>).map((k) => (
            <div key={k} className="rule pt-3">
              <dt className={`chip chip-${k}`}>{THREADS[k].label}</dt>
              <dd className="mt-1 text-pretty text-[14px] text-ink-3">{THREADS[k].question}</dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mt-16 space-y-24">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} flip={i % 2 === 1} priority={i === 0} />
        ))}
      </section>

      <section className="mt-24">
        <SectionHeading eyebrow="Cartography & terrain" title="Maps as the argument" />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {secondary.map((p) => (
            <SecondaryProject key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section id="data" className="mt-24 scroll-mt-20">
        <SectionHeading
          eyebrow="Data & software"
          title="Models, audits, systems"
          intro="Work where the place is a dataset. Each one states its question, measures the answer, and says how uncertain it is."
        />
        <ul className="mt-8">
          {compact.map((p) => (
            <CompactProject key={p.slug} project={p} />
          ))}
        </ul>
      </section>
    </div>
  )
}
