const placeholderWorks = [
  { title: '書道作品 01', medium: 'Japanese Calligraphy · Ink on paper', year: '' },
  { title: '日本画作品 01', medium: 'Nihonga · Mineral pigments on washi', year: '' },
  { title: '書道作品 02', medium: 'Japanese Calligraphy · Ink on paper', year: '' },
  { title: '日本画作品 02', medium: 'Nihonga · Mineral pigments on washi', year: '' },
]

export default function FineArt() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        <span className="gradient-text-warm">Fine Art</span>
      </h1>
      <p className="text-green-900/60 mb-14">
        Nihonga painting 日本画 and Japanese Calligraphy 書道 — traditional Japanese art forms
        I practice in Tokyo.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {placeholderWorks.map((work, i) => (
          <div key={i} className="glass overflow-hidden group cursor-pointer hover:bg-emerald-50/80 transition-colors duration-200">
            <div
              className="w-full h-64 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg,
                  hsl(${260 + i * 30}, 60%, 20%) 0%,
                  hsl(${300 + i * 25}, 50%, 15%) 100%)`,
              }}
            >
              <span className="text-4xl text-green-950/20 font-mono select-none">
                {i % 2 === 0 ? '書' : '画'}
              </span>
            </div>
            <div className="p-4">
              <p className="text-green-950 font-medium">{work.title}</p>
              <p className="text-green-900/60 text-sm">{work.medium}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 glass p-6 text-center">
        <p className="text-green-900/60 text-sm">
          Gallery coming soon — artwork images will be added here.
        </p>
      </div>
    </main>
  )
}
