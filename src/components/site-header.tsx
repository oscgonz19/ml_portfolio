import Link from 'next/link'
import { NAV, SITE } from '@/content/site'

/**
 * Sticky header. Mobile navigation uses a native <details> element so the
 * whole site ships without a client-side menu component.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-3 no-underline">
          <span className="font-display text-lg tracking-tight text-ink">{SITE.name}</span>
          <span className="label hidden sm:inline">{SITE.base.label}</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] text-ink-2 transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="label-ink cursor-pointer list-none select-none py-2 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 top-full mt-2 flex w-48 flex-col border border-rule bg-paper p-2 shadow-sm"
          >
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 text-[15px] text-ink-2 hover:bg-paper-2 hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
