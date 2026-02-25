import Link from 'next/link'
import { NAV_ITEMS, SITE } from '@/content/site'

export function Nav() {
  return (
    <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-6">
      <Link
        href="/"
        className="text-sm font-medium text-white transition-opacity hover:opacity-70"
      >
        {SITE.name}
      </Link>
      <div className="flex gap-6">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
