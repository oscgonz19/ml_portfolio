import { THREADS } from '@/content/site'

/**
 * Four overlapping circles: the threads are one practice, not four silos.
 * Pure SVG, no interaction.
 */
export function ThreadsDiagram() {
  const c = {
    earth: 'rgb(var(--ochre))',
    data: 'rgb(var(--ink))',
    cartography: 'rgb(var(--moss))',
    field: 'rgb(var(--ice))',
  }
  return (
    <svg viewBox="0 0 320 240" className="h-auto w-full max-w-sm" role="img" aria-label="Four overlapping circles: Earth, Data, Maps, Field">
      <g fill="none" strokeWidth="1.2">
        <circle cx="120" cy="100" r="78" stroke={c.earth} />
        <circle cx="200" cy="100" r="78" stroke={c.data} />
        <circle cx="120" cy="150" r="78" stroke={c.cartography} />
        <circle cx="200" cy="150" r="78" stroke={c.field} />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="11" letterSpacing="1.4" className="fill-ink">
        <text x="52" y="60" fill={c.earth}>
          {THREADS.earth.short.toUpperCase()}
        </text>
        <text x="236" y="60" fill={c.data}>
          {THREADS.data.short.toUpperCase()}
        </text>
        <text x="52" y="200" fill={c.cartography}>
          {THREADS.cartography.short.toUpperCase()}
        </text>
        <text x="236" y="200" fill={c.field}>
          {THREADS.field.short.toUpperCase()}
        </text>
      </g>
      <circle cx="160" cy="125" r="2.5" className="fill-ink" />
    </svg>
  )
}
