import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  showDescription?: boolean
}

export function ProjectCard({
  project,
  showDescription = true,
}: ProjectCardProps) {
  const href = project.caseStudy ? `/work/${project.slug}` : project.github
  const isExternal = !project.caseStudy

  return (
    <Link
      href={href}
      {...(isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="group block py-4"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-base font-medium text-white transition-opacity group-hover:opacity-70">
          {project.title}
        </h3>
        <span className="shrink-0 text-xs text-neutral-600">
          {project.stack.slice(0, 3).join(' · ')}
        </span>
      </div>
      {showDescription && (
        <p className="mt-1 text-sm text-neutral-500">{project.description}</p>
      )}
    </Link>
  )
}
