const experience = [
  { role: 'Senior Software Engineer', org: 'Kraken Technologies', period: 'Sep 2025 – Present' },
  { role: 'Software Architect / Sr. Consultant', org: 'Slalom Build', period: 'Nov 2022 – Sep 2025' },
  { role: 'Software Engineer', org: 'Mercari', period: 'Oct 2020 – Nov 2022' },
  { role: 'Lead Software Engineer', org: 'Curvegrid', period: 'Mar 2018 – Jul 2020' },
  { role: 'Software Engineer', org: 'Indeed', period: 'Sep 2014 – Jul 2017' },
  { role: 'Software Engineer', org: 'Boundary', period: 'Jun 2013 – Aug 2014' },
  { role: 'Software Engineer', org: 'Telogis', period: 'Feb 2012 – May 2013' },
  { role: 'Research Assistant', org: 'UT Austin', period: '' },
  { role: 'Software Engineering Intern', org: 'Google (×2)', period: '' },
]

const volunteering = [
  { role: 'Director & Co-founder', org: 'Women in Software Engineering JP', period: 'Apr 2024 – Mar 2026' },
  { role: 'Senior Director, APAC', org: 'Women Who Code', period: 'Aug 2023 – Apr 2024' },
  { role: 'Director', org: 'Women Who Code Tokyo', period: 'Oct 2020 – Jul 2023' },
  { role: 'Volunteer', org: 'Find a Doc, Japan', period: 'Summer 2021' },
  { role: 'Cat Rescue Evaluator', org: 'Austin Pets Alive!', period: 'Aug 2011 – Nov 2016' },
]

const publications = [
  {
    title: '"Canary in a coal mine: Building infrastructure resiliency with canary data reloads."',
    venue: 'Velocity, San Jose, CA',
    year: '2017',
  },
  {
    title: '"You Might Also Like: Privacy Risks of Collaborative Filtering."',
    authors: 'Calandrino, Kilzer, Narayanan, Felten, Shmatikov.',
    venue: 'S&P, Oakland, CA: IEEE',
    year: '2011',
  },
  {
    title: '"Airavat: Security and Privacy for MapReduce."',
    authors: 'Roy, Setty, Kilzer, Shmatikov, Witchel.',
    venue: 'NSDI, San Jose, CA: USENIX',
    year: '2010',
  },
  {
    title: '"A Filesystem Interface for Sensor Networks."',
    authors: 'Horey, Tournier, Widener, Maccabe, Kilzer.',
    venue: 'HotEmNets, Charlottesville, VA: ACM',
    year: '2008',
  },
]

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
      <p className="text-slate-400 mb-14">
        Check out my{' '}
        <a
          href="https://github.com/ann-kilzer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 transition-colors"
        >
          GitHub
        </a>{' '}
        for hobby projects.
      </p>

      <Section title="Experience" color="#a78bfa">
        <div className="space-y-3">
          {experience.map((e, i) => (
            <div key={i} className="glass p-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-white font-medium">{e.role}</p>
                <p className="text-slate-400 text-sm">{e.org}</p>
              </div>
              {e.period && (
                <span className="text-slate-500 text-xs font-mono flex-shrink-0">{e.period}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Volunteering" color="#f0abfc">
        <div className="space-y-3">
          {volunteering.map((v, i) => (
            <div key={i} className="glass p-4 flex justify-between items-center gap-4">
              <div>
                <p className="text-white font-medium">{v.role}</p>
                <p className="text-slate-400 text-sm">{v.org}</p>
              </div>
              {v.period && (
                <span className="text-slate-500 text-xs font-mono flex-shrink-0">{v.period}</span>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education" color="#67e8f9">
        <div className="space-y-3">
          <div className="glass p-4">
            <p className="text-white font-medium">University of Texas at Austin</p>
            <p className="text-slate-400 text-sm">Master of Science: Computer Science</p>
          </div>
          <div className="glass p-4">
            <p className="text-white font-medium">Gonzaga University</p>
            <p className="text-slate-400 text-sm">BS: Computer Science · BA: Mathematics, Visual Arts · German Minor</p>
          </div>
        </div>
      </Section>

      <Section title="Publications & Talks" color="#fbbf24">
        <div className="space-y-4">
          {publications.map((p, i) => (
            <div key={i} className="glass p-4 space-y-1">
              <p className="text-white text-sm font-medium">{p.title}</p>
              {p.authors && <p className="text-slate-400 text-xs">{p.authors}</p>}
              <p className="text-slate-500 text-xs font-mono">{p.venue} · {p.year}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}
