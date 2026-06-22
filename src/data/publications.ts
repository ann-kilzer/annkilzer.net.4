export interface Publication {
  title: string
  authors?: string
  venue: string
  year: string
}

export const publications: Publication[] = [
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
