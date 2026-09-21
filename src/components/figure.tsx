import Image from 'next/image'
import type { Figure as FigureData } from '@/types'

const KIND_LABEL: Record<FigureData['kind'], string> = {
  map: 'Map',
  photo: 'Photograph',
  plot: 'Plot',
  screen: 'Screen',
  render: 'Render',
}

interface Props {
  figure: FigureData
  priority?: boolean
  sizes?: string
  /** Figure number shown in the caption, like a report */
  index?: number
  className?: string
}

/**
 * A captioned figure with a hairline frame. The frame and the mono caption are
 * what make an image read as evidence rather than decoration.
 */
export function Figure({ figure, priority, sizes = '(min-width: 1024px) 60vw, 100vw', index, className = '' }: Props) {
  return (
    <figure className={className}>
      <div
        className="relative w-full overflow-hidden border border-rule bg-paper-2"
        style={{ aspectRatio: figure.ratio }}
      >
        <Image src={figure.src} alt={figure.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      {figure.caption && (
        <figcaption className="mt-2.5 flex gap-3 font-mono text-[12px] leading-relaxed text-ink-3">
          <span className="shrink-0 text-ink-2">
            {index !== undefined ? `Fig. ${index}` : KIND_LABEL[figure.kind]}
          </span>
          <span>{figure.caption}</span>
        </figcaption>
      )}
    </figure>
  )
}
