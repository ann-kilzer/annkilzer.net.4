import { parse } from 'marked'

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  coverImage?: string
}

export interface Post extends PostMeta {
  html: string
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  if (!raw.startsWith('---')) return { data: {}, content: raw }
  const end = raw.indexOf('\n---', 3)
  if (end === -1) return { data: {}, content: raw }
  const block = raw.slice(4, end)
  const content = raw.slice(end + 4).trimStart()
  const data: Record<string, string> = {}
  for (const line of block.split('\n')) {
    const colon = line.indexOf(':')
    if (colon === -1) continue
    data[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
  }
  return { data, content }
}

const modules = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function parsePost(raw: string, filename: string): Post {
  const { data, content } = parseFrontmatter(raw)
  const slug = data.slug ?? filename.replace(/^.*\//, '').replace(/\.md$/, '')
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    coverImage: data.coverImage,
    html: parse(content) as string,
  }
}

const ALL_POSTS: Post[] = Object.entries(modules)
  .map(([path, raw]) => parsePost(raw, path))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPosts(): PostMeta[] {
  return ALL_POSTS.map(({ html, ...meta }) => meta) // eslint-disable-line @typescript-eslint/no-unused-vars
}

export function getPost(slug: string): Post | undefined {
  return ALL_POSTS.find(p => p.slug === slug)
}
