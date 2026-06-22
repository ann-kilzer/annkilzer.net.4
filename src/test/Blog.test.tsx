import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Blog from '../pages/Blog'

describe('Blog page', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /blog/i })).toBeInTheDocument()
  })

  it('shows coming soon when there are no posts', () => {
    render(<Blog />)
    expect(screen.getByText('Coming soon')).toBeInTheDocument()
  })
})
