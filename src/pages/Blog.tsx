const posts: { title: string; date: string; excerpt: string; tags: string[] }[] = []

export default function Blog() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        <span className="gradient-text">Blog</span>
      </h1>
      <p className="text-green-900/60 mb-14">
        Thoughts on software architecture, Japan, art, and everything in between.
      </p>

      {posts.length === 0 ? (
        <div className="glass p-12 text-center space-y-3">
          <p className="text-3xl">✍️</p>
          <p className="text-green-900/80 font-medium">Coming soon</p>
          <p className="text-green-900/40 text-sm">Posts will appear here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.map((post, i) => (
            <article key={i} className="glass p-6 hover:bg-emerald-50/80 transition-colors duration-200 cursor-pointer">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-green-950 font-semibold text-lg">{post.title}</h2>
                <span className="text-green-900/40 text-xs font-mono flex-shrink-0">{post.date}</span>
              </div>
              <p className="text-green-900/60 text-sm mb-3">{post.excerpt}</p>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-600 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
