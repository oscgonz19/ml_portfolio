import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Container, Section } from '@/components/layout'
import { H1, Muted } from '@/components/typography'
import { CaseStudyLayout } from '@/components/case-study-layout'
import { PROJECTS, getProject } from '@/content/projects'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Oscar Gonzalez`,
    description: project.description,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const project = getProject(params.slug)

  if (!project?.caseStudy) {
    notFound()
  }

  return (
    <>
      <Nav />
      <main>
        <Container>
          <Section className="py-24">
            <Link
              href="/work"
              className="text-sm text-neutral-500 transition-colors hover:text-white"
            >
              &larr; Work
            </Link>
            <H1 className="mt-8">{project.title}</H1>
            <Muted className="mt-2">{project.description}</Muted>
            <div className="mt-2 text-xs text-neutral-600">
              {project.stack.join(' · ')}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-neutral-500 transition-colors hover:text-white"
            >
              View source &rarr;
            </a>
          </Section>

          <CaseStudyLayout caseStudy={project.caseStudy} />

          <div className="py-16" />
        </Container>
      </main>
      <Footer />
    </>
  )
}
