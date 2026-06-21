import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-mono text-6xl font-bold gradient-text mb-4">404</p>
      <p className="text-slate-300 text-lg mb-8">Page not found</p>
      <Link to="/" className="glass px-6 py-3 text-white no-underline hover:bg-white/10 transition-colors font-mono text-sm">
        ← Go home
      </Link>
    </main>
  )
}
