import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Blog from '@/pages/Blog'

function renderBlog() {
  return render(<MemoryRouter><Blog /></MemoryRouter>)
}

describe('Blog page', () => {
  it('renders the heading', () => {
    renderBlog()
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
  })

  it('lists posts when posts exist', () => {
    renderBlog()
    expect(screen.getByText('Hello, World')).toBeInTheDocument()
  })

  it('links each post to its slug route', () => {
    renderBlog()
    const link = screen.getByRole('link', { name: /hello, world/i })
    expect(link).toHaveAttribute('href', '/blog/hello-world')
  })
})
