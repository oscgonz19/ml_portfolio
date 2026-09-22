import Link from 'next/link'
import { NAV, SITE, SOCIAL } from '@/content/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="rule-ink mt-24">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <p className="font-display text-xl">{SITE.tagline}</p>
          <p className="measure text-[15px] text-ink-2">{SITE.thesis}</p>
          <p className="label pt-2">
            {SITE.base.name} · {SITE.base.label}
          </p>
        </div>

        <div>
          <p className="label mb-3">Site</p>
          <ul className="space-y-1.5 text-[15px]">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label mb-3">Elsewhere</p>
          <ul className="space-y-1.5 text-[15px]">
            <li>
              <a href={SOCIAL.github} className="link" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIAL.linkedin} className="link" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIAL.email}`} className="link">
                {SOCIAL.email}
              </a>
            </li>
            <li>
              <a href={SOCIAL.cv} className="link" rel="noopener noreferrer">
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <div className="rule flex flex-wrap items-center justify-between gap-2 py-5">
        <p className="label">
          © {year} {SITE.name}
        </p>
        <p className="label">Hillshade &amp; contours on this site: 12.5 m DEM, Quindío, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
