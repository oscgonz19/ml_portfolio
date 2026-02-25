import { SOCIAL, SITE } from '@/content/site'

export function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-6 py-16">
      <div className="border-t border-neutral-800 pt-8">
        <p className="text-sm text-neutral-500">{SITE.name}</p>
        <div className="mt-2 flex gap-4 text-xs text-neutral-600">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-400"
          >
            GitHub
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="transition-colors hover:text-neutral-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
