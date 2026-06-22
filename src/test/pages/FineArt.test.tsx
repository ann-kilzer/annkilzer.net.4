import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import FineArt from '../../pages/FineArt'

describe('FineArt page', () => {
  it('renders the heading', () => {
    render(<FineArt />)
    expect(screen.getByRole('heading', { name: /fine art/i })).toBeInTheDocument()
  })

  it('renders placeholder works', () => {
    render(<FineArt />)
    expect(screen.getByText('書道作品 01')).toBeInTheDocument()
  })
})
