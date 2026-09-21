import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/types'
import { ThreadChips } from './thread-chips'

/**
 * Featured project: large cover, story teaser. Used on the home page and on
 * the work page. Alternates image side with `flip`.
 */
export function FeaturedProject({ project, flip = false, priority = false }: { project: Project; flip?: boolean; priority?: boolean }) {
  const { cover } = project
  return (
    <article className={`grid gap-6 md:grid-cols-12 md:gap-10 ${flip ? 'md:[&>*:first-child]:order-2' : ''}`}>
      <Link href={`/work/${project.slug}`} className="group block md:col-span-7">
        <div className="relative w-full overflow-hidden border border-rule bg-paper-2" style={{ aspectRatio: cover.ratio }}>
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority={priority}
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
        <p className="mt-2.5 font-mono text-[12px] leading-relaxed text-ink-3">{cover.caption}</p>
      </Link>

      <div className="flex flex-col justify-center md:col-span-5">
        <p className="label mb-3">
          {project.place.name} · {project.year}
        </p>
        <h3 className="text-2xl leading-snug md:text-[1.9rem]">
          <Link href={`/work/${project.slug}`} className="hover:text-ochre-deep">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 text-pretty text-[16px] text-ink-2">{project.summary}</p>
        <ThreadChips threads={project.threads} className="mt-5" />
        <Link href={`/work/${project.slug}`} className="link mt-6 w-fit text-[15px]">
          Read the story →
        </Link>
      </div>
    </article>
  )
}

/** Secondary project: cover + title, one third width */
export function SecondaryProject({ project }: { project: Project }) {
  const { cover } = project
  return (
    <article>
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative w-full overflow-hidden border border-rule bg-paper-2" style={{ aspectRatio: 1.5 }}>
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
      </Link>
      <p className="label mt-4">
        {project.place.name} · {project.year}
      </p>
      <h3 className="mt-1.5 text-xl leading-snug">
        <Link href={`/work/${project.slug}`} className="hover:text-ochre-deep">
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-pretty text-[15px] text-ink-2">{project.summary}</p>
      <ThreadChips threads={project.threads} className="mt-3" />
    </article>
  )
}

/** Compact row: work that is best represented by its repository */
export function CompactProject({ project }: { project: Project }) {
  const primary = project.links[0]
  return (
    <li className="rule grid gap-2 py-5 md:grid-cols-12 md:gap-6">
      <div className="md:col-span-4">
        <h3 className="font-display text-lg leading-snug">
          {primary ? (
            <a href={primary.href} className="hover:text-ochre-deep" rel="noopener noreferrer">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <ThreadChips threads={project.threads} className="mt-2" />
      </div>
      <p className="text-pretty text-[15px] text-ink-2 md:col-span-5">{project.summary}</p>
      <ul className="flex flex-col gap-1 md:col-span-3 md:items-end md:text-right">
        {project.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="link font-mono text-[12px]" rel="noopener noreferrer">
              {l.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
