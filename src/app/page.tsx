import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Container, Section, Divider } from '@/components/layout'
import { H1, H2, Text, Muted } from '@/components/typography'
import { ProjectCard } from '@/components/project-card'
import { getFeaturedProjects } from '@/content/projects'
import { WRITING } from '@/content/writing'

export default function Home() {
  const featured = getFeaturedProjects()
  const recentWriting = WRITING.slice(0, 3)

  return (
    <>
      <Nav />
      <main>
        <Container>
          <Section className="py-24">
            <H1>Oscar Gonzalez</H1>
            <Muted className="mt-2">Geospatial ML Engineer</Muted>
            <Text className="mt-6 max-w-lg">
              I build terrain risk models, satellite-derived analytics, and
              environmental ML systems. Geology background, engineering
              discipline.
            </Text>
          </Section>

          <Divider />

          <Section>
            <H2>Selected Work</H2>
            <div className="mt-6 divide-y divide-neutral-800">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
            <Link
              href="/work"
              className="mt-6 inline-block text-sm text-neutral-500 transition-colors hover:text-white"
            >
              All projects &rarr;
            </Link>
          </Section>

          <Divider />

          <Section>
            <H2>Writing</H2>
            <div className="mt-6 space-y-4">
              {recentWriting.map((post) => (
                <a
                  key={post.title}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="text-base text-white transition-opacity group-hover:opacity-70">
                    {post.title}
                  </span>
                  <span className="ml-3 text-sm text-neutral-600">
                    {post.description}
                  </span>
                </a>
              ))}
            </div>
            <Link
              href="/writing"
              className="mt-6 inline-block text-sm text-neutral-500 transition-colors hover:text-white"
            >
              All writing &rarr;
            </Link>
          </Section>

          <Divider />

          <Section>
            <H2>Now</H2>
            <Text className="mt-4">
              Building GeoAI systems for terrain risk and environmental
              monitoring. Open to senior IC roles in climate tech, earth
              observation, and applied ML.
            </Text>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  )
}
