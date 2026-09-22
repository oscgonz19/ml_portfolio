import { THREADS } from '@/content/site'
import type { Thread } from '@/types'

export function ThreadChips({ threads, className = '' }: { threads: Thread[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {threads.map((t) => (
        <li key={t} className={`chip chip-${t}`}>
          {THREADS[t].short}
        </li>
      ))}
    </ul>
  )
}
