import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="wrap pt-24">
      <p className="label mb-2">404</p>
      <h1 className="text-4xl">Off the map</h1>
      <p className="measure mt-4 text-ink-2">This sheet does not exist. The survey may have been renumbered.</p>
      <Link href="/" className="link mt-6 inline-block">
        ← Back to sheet 01
      </Link>
    </div>
  )
}
