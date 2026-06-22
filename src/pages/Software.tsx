import { experience, volunteering } from '@/data/experience'
import { certifications } from '@/data/certifications'
import { publications } from '@/data/publications'

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-6" style={{ color }}>{title}</h2>
      {children}
    </section>
  )
}

export default function Software() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">
        <span className="gradient-text">Software</span>
      </h1>
      <p className="text-green-900/70 mb-14">
        Check out my{' '}
        <a
          href="https://github.com/ann-kilzer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 hover:text-emerald-600 transition-colors"
        >
          GitHub
        </a>{' '}
        for hobby projects.
      </p>

      <Section title="Experience" color="#4ade80">
        <div className="space-y-3">
          {experience.map((e, i) => (
            <div key={i} className="glass p-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-green-950 font-medium">{e.role}</p>
                <p className="text-green-900/60 text-sm">{e.org}</p>
              </div>
              {e.period && (
                <span className="text-green-900/40 text-xs font-mono flex-shrink-0">{e.period}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Volunteering" color="#2dd4bf">
        <div className="space-y-3">
          {volunteering.map((v, i) => (
            <div key={i} className="glass p-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-green-950 font-medium">{v.role}</p>
                <p className="text-green-900/60 text-sm">{v.org}</p>
              </div>
              {v.period && (
                <span className="text-green-900/40 text-xs font-mono flex-shrink-0">{v.period}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education" color="#a3e635">
        <div className="space-y-3">
          <div className="glass p-4">
            <p className="text-green-950 font-medium">University of Texas at Austin</p>
            <p className="text-green-900/60 text-sm">Master of Science: Computer Science</p>
          </div>
          <div className="glass p-4">
            <p className="text-green-950 font-medium">Gonzaga University</p>
            <p className="text-green-900/60 text-sm">BS: Computer Science · BA: Mathematics, Visual Arts · German Minor</p>
          </div>
        </div>
      </Section>

      <Section title="Certifications" color="#6ee7b7">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.url}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 flex flex-col items-center gap-3 text-center hover:bg-emerald-100/60 transition-colors duration-200 no-underline"
            >
              <img src={cert.image} alt={cert.name} className="w-16 h-16 object-contain" />
              <div>
                <p className="text-green-950 text-xs font-medium leading-snug">{cert.name}</p>
                <p className="text-green-900/50 text-xs mt-1">{cert.issuer}</p>
                {cert.expires && (
                  <p className="text-green-900/40 text-xs font-mono mt-1">exp. {cert.expires}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Section title="Publications & Talks" color="#86efac">
        <div className="space-y-4">
          {publications.map((p, i) => (
            <div key={i} className="glass p-4 space-y-1">
              <p className="text-green-950 text-sm font-medium">{p.title}</p>
              {p.authors && <p className="text-green-900/60 text-xs">{p.authors}</p>}
              <p className="text-green-900/40 text-xs font-mono">{p.venue} · {p.year}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
