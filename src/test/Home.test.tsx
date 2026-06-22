import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

describe('Home page', () => {
  it('renders the greeting', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    expect(screen.getByText("I'm Ann Kilzer.")).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    expect(screen.getByRole('link', { name: 'GitHub →' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram →' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn →' })).toBeInTheDocument()
  })

  it('hides portrait image on load error', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    const img = screen.getByAltText(/portrait of ann kilzer/i)
    fireEvent.error(img)
    expect(img).toHaveStyle({ display: 'none' })
  })

  it('renders the Background and Japan Life cards', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    expect(screen.getByText('Background')).toBeInTheDocument()
    expect(screen.getByText('Japan Life')).toBeInTheDocument()
  })
})
