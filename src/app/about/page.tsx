import type { Metadata } from 'next'
import Image from 'next/image'
import { PlaceMap } from '@/components/place-map'
import { ABOUT } from '@/content/about'
import { SITE, SOCIAL } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description: SITE.description,
}

// Strata fills, drawn like a geological legend. Ordered youngest → oldest.
const PATTERN: Record<string, string> = {
  ice: 'repeating-linear-gradient(135deg, #6f8fa3 0 1px, transparent 1px 8px)',
  moss: 'repeating-linear-gradient(45deg, #4d6b4c 0 1px, transparent 1px 7px)',
  ink: 'repeating-linear-gradient(90deg, #1b1916 0 1px, transparent 1px 6px)',
  ochre: 'radial-gradient(#b4552a 0.8px, transparent 0.9px)',
  sand: 'radial-gradient(#7d766d 0.7px, transparent 0.8px)',
  rock: 'repeating-linear-gradient(0deg, #1b1916 0 1px, transparent 1px 5px)',
}
const PATTERN_SIZE: Record<string, string> = {
  ochre: '7px 7px',
  sand: '5px 5px',
}

export default function AboutPage() {
  return (
    <div className="wrap pt-14">
      <header className="rule-ink grid gap-10 pt-5 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="label mb-3">About</p>
          <h1 className="text-4xl leading-[1.08] md:text-5xl">A geologist who learned to write software, still carrying a hammer.</h1>
          <div className="measure mt-8 space-y-5 text-pretty text-[17px] leading-relaxed">
            {ABOUT.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 md:pt-10">
          <div className="relative mx-auto max-w-xs overflow-hidden border border-rule" style={{ aspectRatio: 1.12 }}>
            <Image src="/about/portrait.jpg" alt={`Portrait of ${SITE.name}`} fill sizes="320px" className="object-cover" priority />
          </div>
          <p className="mt-2.5 text-center font-mono text-[12px] text-ink-3">{SITE.name} · {SITE.base.name}</p>
        </div>
      </header>

      {/* Stratigraphic column of the practice */}
      <section className="mt-20">
        <div className="rule-ink pt-5">
          <p className="label mb-2">Progression</p>
          <h2 className="text-3xl md:text-4xl">Stratigraphy of a practice</h2>
          <p className="measure mt-3 text-pretty text-ink-2">
            Read it like a geological column: youngest on top, everything resting on the geology underneath.
          </p>
        </div>
        <ol className="mt-10 border-l border-ink">
          {ABOUT.stratigraphy.map((layer, i) => (
            <li key={layer.unit} className="grid grid-cols-[3.5rem_1fr] gap-4 md:grid-cols-[5rem_10rem_1fr] md:gap-8">
              <div
                aria-hidden="true"
                className={`h-full min-h-[5.5rem] border-b border-ink ${i === 0 ? 'border-t' : ''}`}
                style={{
                  backgroundImage: PATTERN[layer.pattern],
                  backgroundSize: PATTERN_SIZE[layer.pattern] ?? 'auto',
                }}
              />
              <div className="py-4 md:contents">
                <p className="font-mono text-[12px] text-ink-3 md:py-4">
                  <span className="text-ink">{layer.age}</span>
                </p>
                <div className="md:py-4">
                  <h3 className="font-display text-xl">{layer.unit}</h3>
                  <p className="mt-1 max-w-xl text-pretty text-[15px] text-ink-2">{layer.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Places */}
      <section className="mt-20">
        <div className="rule-ink pt-5">
          <p className="label mb-2">Places</p>
          <h2 className="text-3xl md:text-4xl">Where the work has happened</h2>
        </div>
        <div className="mt-8">
          <PlaceMap markers={ABOUT.places} className="aspect-[4/3] md:aspect-[21/9]" />
        </div>
      </section>

      {/* Education + experience */}
      <section className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <div className="rule-ink pt-5">
            <p className="label mb-2">Education</p>
          </div>
          <ul className="mt-4">
            {ABOUT.education.map((e) => (
              <li key={e.degree} className="rule py-4">
                <p className="font-display text-lg">{e.degree}</p>
                <p className="text-[15px] text-ink-2">{e.institution}</p>
                <p className="label mt-1">{e.place}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="rule-ink pt-5">
            <p className="label mb-2">Selected experience</p>
          </div>
          <ul className="mt-4">
            {ABOUT.experience.map((x) => (
              <li key={x.role} className="rule py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-display text-lg">{x.role}</p>
                  <p className="label shrink-0">{x.period}</p>
                </div>
                <p className="text-[15px] text-ink-2">{x.org}</p>
                <p className="mt-1.5 text-pretty text-[14px] text-ink-3">{x.note}</p>
              </li>
            ))}
          </ul>
          <a href={SOCIAL.cv} className="link mt-6 inline-block text-[15px]" rel="noopener noreferrer">
            Full CV ↗
          </a>
        </div>
      </section>
    </div>
  )
}
