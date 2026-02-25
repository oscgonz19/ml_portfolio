import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Container, Section } from '@/components/layout'
import { H1, Text } from '@/components/typography'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/content/projects'

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <Container>
          <Section className="py-24">
            <H1>Work</H1>
            <Text className="mt-4">
              Curated projects. Systems thinking over demos.
            </Text>
          </Section>

          <div className="divide-y divide-neutral-800 pb-16">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
