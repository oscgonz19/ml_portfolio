/** A map scale bar, used as a divider. Purely decorative. */
export function ScaleBar({ light = false, km = 5 }: { light?: boolean; km?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 160 14"
      width="160"
      height="14"
      className={`block ${light ? 'text-paper' : 'text-ink'}`}
    >
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <path d="M0 8h160M0 4v8M40 4v8M80 4v8M120 4v8M160 4v8" />
      </g>
      <rect x="0" y="6" width="40" height="2" fill="currentColor" />
      <rect x="80" y="6" width="40" height="2" fill="currentColor" />
      <text x="0" y="3" fontFamily="var(--font-mono)" fontSize="6" fill="currentColor">
        0
      </text>
      <text x="146" y="3" fontFamily="var(--font-mono)" fontSize="6" fill="currentColor">
        {km} km
      </text>
    </svg>
  )
}
