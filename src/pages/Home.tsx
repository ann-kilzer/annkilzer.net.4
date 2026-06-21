export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="flex-1 space-y-6">
          <p className="font-mono text-sm tracking-widest text-violet-400 uppercase">
            Senior Software Engineer · Artist · Adventurer
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">Hello!</span>
            <br />
            <span className="text-white">I'm Ann Kilzer.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            My career is in software engineering — currently working as a{' '}
            <span className="text-violet-300 font-medium">Senior Software Engineer</span>.
            I'm a polymath who codes, paints, and explores the great outdoors.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/ann-kilzer"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200 no-underline font-mono"
            >
              GitHub →
            </a>
            <a
              href="https://www.instagram.com/ann.kilzer.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200 no-underline font-mono"
            >
              Instagram →
            </a>
            <a
              href="https://www.linkedin.com/in/annkilzer/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200 no-underline font-mono"
            >
              LinkedIn →
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20 blur-xl" />
            <img
              src="/ann-kilzer.jpg"
              alt="Portrait of Ann Kilzer wearing a green coat"
              className="relative w-full h-full object-cover rounded-2xl glass"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      {/* About grid */}
      <section className="grid md:grid-cols-2 gap-6 mb-20">
        <div className="glass p-6 space-y-3">
          <h2 className="text-lg font-semibold gradient-text">Background</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            I grew up in Missoula, Montana and attended Gonzaga University, where I majored in
            Computer Science, Mathematics, and Art. I went on to earn a Master's in CS from UT
            Austin, where I researched privacy.
          </p>
        </div>

        <div className="glass p-6 space-y-3">
          <h2 className="text-lg font-semibold gradient-text-warm">Japan Life</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            I moved to Tokyo in early 2018 with an eager dream of learning about culture and fine art. In my spare time I
            enjoy Japanese Calligraphy 書道, drawing, cooking, hiking, and riding
            slow trains around Japan.
          </p>
        </div>
      </section>
    </main>
  )
}
