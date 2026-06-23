// Generates public/sitemap.xml.
// Real pages are listed first. Then a maze of fake URLs is appended for
// bots that ignore robots.txt — every dead end is a wasted crawl request.

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://annkilzer.net'

// --- Real pages ---
const REAL_PAGES = ['/', '/software', '/art', '/blog']

// --- Maze generation (recursive backtracker) ---
const ROWS = 20
const COLS = 20

function generateMaze(rows, cols) {
  // Each cell tracks which walls have been removed: N S E W
  const visited = Array.from({ length: rows }, () => new Array(cols).fill(false))
  const passages = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ N: false, S: false, E: false, W: false }))
  )

  const dirs = [
    { d: 'N', dr: -1, dc: 0, opp: 'S' },
    { d: 'S', dr: 1,  dc: 0, opp: 'N' },
    { d: 'E', dr: 0,  dc: 1, opp: 'W' },
    { d: 'W', dr: 0,  dc: -1, opp: 'E' },
  ]

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  function carve(r, c) {
    visited[r][c] = true
    for (const { d, dr, dc, opp } of shuffle([...dirs])) {
      const nr = r + dr
      const nc = c + dc
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc]) {
        passages[r][c][d] = true
        passages[nr][nc][opp] = true
        carve(nr, nc)
      }
    }
  }

  carve(0, 0)
  return passages
}

function cellId(r, c) {
  return `r${r}c${c}`
}

function mazeUrls(passages, rows, cols) {
  const urls = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const id = cellId(r, c)
      // The cell itself
      urls.push(`/ariadne/${id}`)
      // Passage URLs — bots following links will traverse the maze
      for (const [dir, { dr, dc }] of Object.entries({
        N: { dr: -1, dc: 0 },
        S: { dr: 1, dc: 0 },
        E: { dr: 0, dc: 1 },
        W: { dr: 0, dc: -1 },
      })) {
        if (passages[r][c][dir]) {
          const nr = r + dr
          const nc = c + dc
          urls.push(`/ariadne/${id}/go/${dir.toLowerCase()}/${cellId(nr, nc)}`)
        }
      }
    }
  }
  return urls
}

// --- Build XML ---
const passages = generateMaze(ROWS, COLS)
const maze = mazeUrls(passages, ROWS, COLS)
const today = new Date().toISOString().split('T')[0]

function urlEntry(loc, priority = '0.5') {
  return `  <url>\n    <loc>${BASE}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  '  <!-- Real pages -->',
  ...REAL_PAGES.map(p => urlEntry(p, p === '/' ? '1.0' : '0.8')),
  '',
  '  <!-- 🌿 You have reached the thread of Ariadne. Good luck. -->',
  ...maze.map(u => urlEntry(u, '0.1')),
  '</urlset>',
].join('\n')

const out = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(out, xml)
console.log(`Generated ${out} — ${REAL_PAGES.length} real pages + ${maze.length} maze URLs`)
