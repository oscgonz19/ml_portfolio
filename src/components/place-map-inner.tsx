'use client'

import { useEffect, useRef } from 'react'
import { LngLatBounds, Map as MapLibreMap, Marker, NavigationControl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { PlaceMapProps } from './place-map'

// Free vector tiles, no API key. Positron is a quiet, paper-like base.
const STYLE = 'https://tiles.openfreemap.org/styles/positron'

function markerElement(dashed: boolean, name: string, label?: string, flip = false) {
  const el = document.createElement('div')
  el.className = `flex items-center gap-2 ${flip ? 'flex-row-reverse' : ''}`
  el.title = label ? `${name} · ${label}` : name
  // Inline styles: this markup is injected into MapLibre's DOM, so it reads the
  // palette straight from the :root custom properties.
  const dotStyle = dashed
    ? 'border:2px dashed rgb(var(--ice));background:transparent'
    : 'border:2px solid rgb(var(--paper));background:rgb(var(--ochre))'
  el.innerHTML = `
    <span style="${dotStyle}" class="block h-3 w-3 shrink-0 rounded-full"></span>
    <span style="background:rgb(var(--paper)/0.85);color:rgb(var(--ink))" class="whitespace-nowrap px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em]">
      ${name}${label ? `<span style="color:rgb(var(--ink-3))"> · ${label}</span>` : ''}
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

    // Dense maps get name-only labels, alternating sides so neighbours don't collide.
    const dense = markers.filter((m) => !m.quiet).length > 6
    markers.forEach((m, i) => {
      if (m.quiet) {
        const dot = document.createElement('div')
        dot.className = 'h-2 w-2 rounded-full'
        dot.style.cssText = 'background:rgb(var(--ink));box-shadow:0 0 0 1px rgb(var(--paper))'
        dot.title = m.label ? `${m.name} · ${m.label}` : m.name
        new Marker({ element: dot }).setLngLat(m.coords).addTo(map)
        return
      }
      new Marker({
        element: markerElement(Boolean(m.dashed), m.name, dense ? undefined : m.label, i % 2 === 1),
        anchor: i % 2 === 1 ? 'right' : 'left',
      })
        .setLngLat(m.coords)
        .addTo(map)
    })

    if (!center && markers.length > 1) {
      const bounds = new LngLatBounds()
      for (const m of markers) bounds.extend(m.coords)
      map.fitBounds(bounds, { padding: 60, maxZoom: markers.length > 4 ? 9 : 6, duration: 0 })
    }

    return () => map.remove()
  }, [markers, center, zoom, interactive])

  // Inline: maplibre-gl.css sets `.maplibregl-map { position: relative }` and would
  // otherwise win over the utility classes and collapse the container to 0 px.
  return <div ref={container} style={{ position: 'absolute', inset: 0 }} />
}
