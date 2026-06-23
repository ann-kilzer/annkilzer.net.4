import { useParams, Link, Navigate } from 'react-router-dom'
import { getPost } from '@/lib/posts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = getPost(slug ?? '')

  if (!post) return <Navigate to="/blog" replace />

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/blog"
        className="text-emerald-700 hover:text-emerald-600 text-sm font-mono transition-colors mb-10 inline-block"
      >
        ← Blog
      </Link>

      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="gradient-text">{post.title}</span>
        </h1>
        <p className="text-green-900/40 text-sm font-mono">{post.date}</p>
      </header>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full rounded-lg mb-10 object-cover max-h-80"
        />
      )}

      <div
        className="prose prose-green max-w-none"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </main>
  )
}
