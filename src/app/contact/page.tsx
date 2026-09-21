import type { Metadata } from 'next'
import { SITE, SOCIAL } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${SITE.name}.`,
}

const ROWS = [
  { label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/oscgonz19', href: SOCIAL.linkedin },
  { label: 'GitHub', value: 'github.com/oscgonz19', href: SOCIAL.github },
  { label: 'CV', value: 'View on Canva', href: SOCIAL.cv },
]

export default function ContactPage() {
  return (
    <div className="wrap pt-14">
      <header className="rule-ink pt-5">
        <p className="label mb-2">Contact</p>
        <h1 className="text-4xl md:text-5xl">Fieldwork, data, maps — or all three.</h1>
        <p className="measure mt-4 text-pretty text-ink-2">
          Based in {SITE.base.name}, working remotely and in the field. Open to geoscience, geospatial data and
          science-communication work, and to expedition roles.
        </p>
      </header>
      <ul className="mt-10 max-w-2xl">
        {ROWS.map((r) => (
          <li key={r.label} className="rule grid grid-cols-[6rem_1fr] items-baseline gap-4 py-4">
            <span className="label">{r.label}</span>
            <a href={r.href} className="link text-[17px]" rel="noopener noreferrer">
              {r.value}
            </a>
          </li>
        ))}
      </ul>
      <p className="label mt-10">
        {SITE.base.label}
      </p>
    </div>
  )
}
