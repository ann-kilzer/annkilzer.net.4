import { useTranslation, Trans } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="flex flex-col md:flex-row gap-12 items-center mb-20">
        <div className="flex-1 space-y-6">
          <p className="font-mono text-sm tracking-widest text-emerald-700 uppercase">
            {t('home.tagline')}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="gradient-text">{t('home.greeting')}</span>
            <br />
            <span className="text-green-950">{t('home.name')}</span>
          </h1>
          <p className="text-green-900 text-lg leading-relaxed">
            <Trans
              i18nKey="home.bio"
              components={{ strong: <span className="text-emerald-600 font-medium" /> }}
            />
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://github.com/ann-kilzer"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-green-900 hover:bg-emerald-100/60 transition-colors duration-200 no-underline font-mono"
            >
              {t('home.github')}
            </a>
            <a
              href="https://www.instagram.com/ann.kilzer.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-green-900 hover:bg-emerald-100/60 transition-colors duration-200 no-underline font-mono"
            >
              {t('home.instagram')}
            </a>
            <a
              href="https://www.linkedin.com/in/annkilzer/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-5 py-2 text-sm text-green-900 hover:bg-emerald-100/60 transition-colors duration-200 no-underline font-mono"
            >
              {t('home.linkedin')}
            </a>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-teal-500/20 blur-xl" />
            <img
              src="/ann-kilzer.jpg"
              alt="Portrait of Ann Kilzer wearing a green coat"
              className="relative w-full h-full object-cover rounded-2xl glass"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-emerald-400/20" />
          </div>
        </div>
      </section>

      {/* About grid */}
      <section className="grid md:grid-cols-2 gap-6 mb-20">
        <div className="glass p-6 space-y-3">
          <h2 className="text-lg font-semibold gradient-text">{t('home.background.title')}</h2>
          <p className="text-green-900/80 text-sm leading-relaxed">
            {t('home.background.body')}
          </p>
        </div>

        <div className="glass p-6 space-y-3">
          <h2 className="text-lg font-semibold gradient-text-warm">{t('home.japan.title')}</h2>
          <p className="text-green-900/80 text-sm leading-relaxed">
            {t('home.japan.body')}
          </p>
        </div>
      </section>
    </main>
  )
}
