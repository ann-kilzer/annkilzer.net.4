import matter from 'gray-matter'
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

const modules = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

function parsePost(raw: string, filename: string): Post {
  const { data, content } = matter(raw)
  const slug = data.slug ?? filename.replace(/^.*\//, '').replace(/\.md$/, '')
  return {
    slug,
    title: data.title ?? slug,
    date: String(data.date ?? ''),
    excerpt: data.excerpt ?? '',
    coverImage: data.coverImage,
    html: parse(content) as string,
  }
}

const ALL_POSTS: Post[] = Object.entries(modules)
  .map(([path, raw]) => parsePost(raw, path))
  .sort((a, b) => (a.date < b.date ? 1 : -1))

export function getPosts(): PostMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return ALL_POSTS.map(({ html, ...meta }) => meta)
}

export function getPost(slug: string): Post | undefined {
  return ALL_POSTS.find(p => p.slug === slug)
}
