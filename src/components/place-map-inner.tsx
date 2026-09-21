'use client'

import { useEffect, useRef } from 'react'
import { LngLatBounds, Map as MapLibreMap, Marker, NavigationControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { PlaceMapProps } from './place-map'

// Free vector tiles, no API key. Positron is a quiet, paper-like base.
const STYLE = 'https://tiles.openfreemap.org/styles/positron'

function markerElement(dashed: boolean, name: string, label?: string) {
  const el = document.createElement('div')
  el.className = 'flex items-center gap-2'
  el.innerHTML = `
    <span class="block h-3 w-3 rounded-full ${
      dashed ? 'border-2 border-dashed border-[#6f8fa3] bg-transparent' : 'border-2 border-[#f4f0e8] bg-[#b4552a]'
    }"></span>
    <span class="whitespace-nowrap bg-[#f4f0e8]/85 px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1b1916]">
      ${name}${label ? `<span class="text-[#7d766d]"> · ${label}</span>` : ''}
    </span>`
  return el
}

export function PlaceMapInner({ markers, center, zoom, interactive = true }: PlaceMapProps) {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    const first = markers[0]
    const map = new MapLibreMap({
      container: container.current,
      style: STYLE,
      center: center ?? first?.coords ?? [-75.7, 4.5],
      zoom: zoom ?? 9,
      attributionControl: { compact: true },
      interactive,
      scrollZoom: false,
      cooperativeGestures: true,
    })

    if (interactive) map.addControl(new NavigationControl({ showCompass: false }), 'top-right')

    for (const m of markers) {
      new Marker({ element: markerElement(Boolean(m.dashed), m.name, m.label), anchor: 'left' })
        .setLngLat(m.coords)
        .addTo(map)
    }

    if (!center && markers.length > 1) {
      const bounds = new LngLatBounds()
      for (const m of markers) bounds.extend(m.coords)
      map.fitBounds(bounds, { padding: 80, maxZoom: 6, duration: 0 })
    }

    return () => map.remove()
  }, [markers, center, zoom, interactive])

  // Inline: maplibre-gl.css sets `.maplibregl-map { position: relative }` and would
  // otherwise win over the utility classes and collapse the container to 0 px.
  return <div ref={container} style={{ position: 'absolute', inset: 0 }} />
}
