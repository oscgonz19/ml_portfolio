import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Figure } from '@/components/figure'
import { PlaceMap } from '@/components/place-map'
import { ThreadChips } from '@/components/thread-chips'
import { PROJECTS, getProject } from '@/content/projects'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.cover.src).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: project.cover.src ? [{ url: project.cover.src }] : undefined },
  }
}

function StoryBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="rule grid gap-3 py-8 md:grid-cols-12 md:gap-8">
      <h2 className="label-ink md:col-span-3">{label}</h2>
      <div className="measure text-pretty text-[17px] leading-relaxed md:col-span-9">{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex gap-3">
          <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-ink" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export default function ProjectPage({ params }: Params) {
  const project = getProject(params.slug)
  if (!project || !project.cover.src) notFound()

  const { story } = project
  const hasPlace = project.place.label !== '—'

  return (
    <article className="wrap pt-14">
      <header className="rule-ink grid gap-6 pt-5 md:grid-cols-12">
        <div className="md:col-span-8">
          <p className="label mb-3">
            {project.place.name} · {project.year}
          </p>
          <h1 className="text-4xl leading-[1.08] md:text-5xl">{project.title}</h1>
          <p className="measure mt-5 text-pretty text-[18px] text-ink-2">{project.summary}</p>
        </div>
        <div className="flex flex-col gap-3 md:col-span-4 md:items-end md:pt-8">
          <ThreadChips threads={project.threads} />
          {hasPlace && <p className="font-mono text-[12px] text-ink-3">{project.place.label}</p>}
        </div>
      </header>

      <Figure figure={project.cover} priority sizes="(min-width: 1280px) 76rem, 100vw" className="mt-10" index={1} />

      {story ? (
        <div className="mt-16">
          <StoryBlock label="Question">
            <p>{story.question}</p>
          </StoryBlock>

          <StoryBlock label="Place">
            <p>{story.place}</p>
            {hasPlace && (
              <div className="mt-6">
                <PlaceMap
                  markers={[
                    ...(project.places
                      ? project.places.map((pl) => ({ name: pl.name, label: pl.label, coords: pl.coords }))
                      : [{ name: project.place.name, coords: project.place.coords }]),
                    ...(project.stations ?? []).map((st) => ({
                      name: st.code,
                      label: `${st.place}, ${st.municipality}`,
                      coords: st.coords,
                      quiet: true,
                    })),
                  ]}
                  center={project.places ? undefined : project.place.coords}
                  zoom={project.place.zoom ?? 9}
                  className="aspect-[16/9] md:aspect-[2/1]"
                />
                <p className="mt-2 font-mono text-[12px] text-ink-3">
                  {project.places ? `${project.places.length} sites · town-level positions` : project.place.label} · Drag
                  to pan, buttons to zoom.
                </p>
              </div>
            )}
          </StoryBlock>

          <StoryBlock label="Data">
            <List items={story.data} />
          </StoryBlock>

          <StoryBlock label="Method">
            <List items={story.method} />
          </StoryBlock>

          <StoryBlock label="Result">
            <p>{story.result}</p>
          </StoryBlock>
        </div>
      ) : (
        hasPlace && (
          <div className="mt-16">
            <StoryBlock label="Place">
              <PlaceMap
                markers={[{ name: project.place.name, coords: project.place.coords }]}
                center={project.place.coords}
                zoom={project.place.zoom ?? 9}
                className="aspect-[16/9] md:aspect-[2/1]"
              />
            </StoryBlock>
          </div>
        )
      )}

      {project.stations && project.stations.length > 0 && (
        <section className="rule py-8">
          <h2 className="label-ink mb-2">Field stations</h2>
          <p className="measure mb-6 text-[15px] text-ink-2">
            From the survey log. Each row is a place where the ground was described, not modelled — the dots on the map above.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[56rem] border-collapse font-mono text-[12px] leading-snug">
              <thead>
                <tr className="rule-ink text-left text-ink-3">
                  {['Station', 'Place', 'Lat / Lon', 'Elev.', 'Unit · lithology', 'Weathering', 'Slope', 'Condition', 'Process'].map((h) => (
                    <th key={h} className="py-2 pr-4 font-normal uppercase tracking-label">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {project.stations.map((st) => (
                  <tr key={st.code} className="rule align-top">
                    <td className="py-2 pr-4 text-ink">{st.code}</td>
                    <td className="py-2 pr-4">
                      {st.place}
                      <span className="text-ink-3"> · {st.municipality}</span>
                    </td>
                    <td className="py-2 pr-4 tabular-nums text-ink-2">
                      {st.coords[1].toFixed(4)} / {st.coords[0].toFixed(4)}
                    </td>
                    <td className="py-2 pr-4 tabular-nums text-ink-2">{st.elevation} m</td>
                    <td className="py-2 pr-4">
                      {st.unit}
                      <span className="text-ink-3"> · {st.lithology}</span>
                    </td>
                    <td className="py-2 pr-4 text-ink-2">{st.weathering}</td>
                    <td className="py-2 pr-4 tabular-nums text-ink-2">{st.slope}</td>
                    <td className="py-2 pr-4">
                      <span
                        className={
                          st.condition === 'unstable'
                            ? 'text-ochre-deep'
                            : st.condition === 'marginal'
                              ? 'text-ink'
                              : 'text-ink-3'
                        }
                      >
                        {st.condition}
                      </span>
                    </td>
                    <td className="py-2 text-ink-2">{st.process}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {project.figures.length > 0 && (
        <section className="rule mt-4 py-8">
          <h2 className="label-ink mb-8">Visualization</h2>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {project.figures.map((f, i) => (
              <Figure
                key={f.src}
                figure={f}
                index={i + 2}
                sizes="(min-width: 768px) 50vw, 100vw"
                className={f.ratio > 1.9 ? 'md:col-span-2' : ''}
              />
            ))}
          </div>
        </section>
      )}

      <section className="rule grid gap-6 py-8 md:grid-cols-12 md:gap-8">
        <h2 className="label-ink md:col-span-3">Technology</h2>
        <div className="md:col-span-9">
          <p className="measure text-[15px] text-ink-2">Listed last on purpose. These are the tools the story needed.</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <ul className="mt-8 space-y-2">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link text-[15px]" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <nav className="rule-ink flex justify-between pt-6 text-[15px]">
        <Link href="/work" className="link">
          ← All work
        </Link>
        <Link href="/field-notes" className="link">
          Field notes →
        </Link>
      </nav>
    </article>
  )
}
