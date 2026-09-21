'use client'

import dynamic from 'next/dynamic'

export interface MapMarker {
  name: string
  label?: string
  coords: [number, number]
  dashed?: boolean
}

export interface PlaceMapProps {
  markers: MapMarker[]
  center?: [number, number]
  zoom?: number
  /** Tailwind aspect ratio class or inline height */
  className?: string
  interactive?: boolean
}

/**
 * MapLibre is ~200 kB gzipped, so it is loaded only on the client and only on
 * pages that show a map. The placeholder keeps the layout stable meanwhile.
 */
const PlaceMapInner = dynamic(() => import('./place-map-inner').then((m) => m.PlaceMapInner), {
  ssr: false,
  loading: () => <div className="graticule h-full w-full bg-paper-2" aria-hidden="true" />,
})

export function PlaceMap(props: PlaceMapProps) {
  const { className = 'aspect-[16/9]' } = props
  return (
    <div className={`relative w-full overflow-hidden border border-rule bg-paper-2 ${className}`}>
      <PlaceMapInner {...props} />
    </div>
  )
}
