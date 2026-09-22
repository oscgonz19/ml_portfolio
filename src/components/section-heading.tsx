import Link from 'next/link'

interface Props {
  eyebrow: string
  title: string
  intro?: string
  more?: { label: string; href: string }
}

export function SectionHeading({ eyebrow, title, intro, more }: Props) {
  return (
    <div className="rule-ink flex flex-col gap-4 pt-5 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="label mb-2">{eyebrow}</p>
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {intro && <p className="measure mt-3 text-pretty text-ink-2">{intro}</p>}
      </div>
      {more && (
        <Link href={more.href} className="link shrink-0 text-[15px]">
          {more.label} →
        </Link>
      )}
    </div>
  )
}
