import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Container, Section } from '@/components/layout'
import { H1, Text } from '@/components/typography'
import { WRITING } from '@/content/writing'

export default function WritingPage() {
  const postsByYear = WRITING.reduce<Record<string, typeof WRITING>>(
    (acc, post) => {
      const year = new Date(post.date).getFullYear().toString()
      if (!acc[year]) acc[year] = []
      acc[year].push(post)
      return acc
    },
    {}
  )

  const years = Object.keys(postsByYear).sort(
    (a, b) => Number(b) - Number(a)
  )

  return (
    <>
      <Nav />
      <main>
        <Container>
          <Section className="py-24">
            <H1>Writing</H1>
            <Text className="mt-4">Short-form technical notes.</Text>
          </Section>

          <div className="space-y-12 pb-16">
            {years.map((year) => (
              <div key={year}>
                <p className="mb-4 text-sm text-neutral-600">{year}</p>
                <div className="space-y-3">
                  {postsByYear[year].map((post) => (
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
                        {post.tags.join(' · ')}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
