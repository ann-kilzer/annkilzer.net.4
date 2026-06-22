import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Blog from '../pages/Blog'
import FineArt from '../pages/FineArt'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import TopoBackground from '../components/TopoBackground'

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

describe('TopoBackground', () => {
  it('renders an aria-hidden decorative element', () => {
    const { container } = render(<TopoBackground />)
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
})

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

describe('NotFound page', () => {
  it('renders 404', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>)
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('has a link home', () => {
    render(<MemoryRouter><NotFound /></MemoryRouter>)
    expect(screen.getByRole('link', { name: /go home/i })).toHaveAttribute('href', '/')
  })
})

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
