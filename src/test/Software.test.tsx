import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Software from '../pages/Software'
import { certifications } from '../data/certifications'

function renderSoftware() {
  return render(
    <MemoryRouter>
      <Software />
    </MemoryRouter>
  )
}

describe('Software page — Certifications', () => {
  it('renders the Certifications heading', () => {
    renderSoftware()
    expect(screen.getByText('Certifications')).toBeInTheDocument()
  })

  function getCredlyLinks() {
    return screen.getAllByRole('link').filter(l =>
      l.getAttribute('href')?.includes('credly.com/badges/')
    )
  }

  it('renders all 8 certification cards', () => {
    renderSoftware()
    expect(getCredlyLinks().length).toBe(certifications.length)
  })

  it('each certification links to credly.com', () => {
    renderSoftware()
    getCredlyLinks().forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('credly.com/badges/'))
    })
  })

  it('each certification opens in a new tab', () => {
    renderSoftware()
    getCredlyLinks().forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders badge images with alt text', () => {
    renderSoftware()
    const imgs = screen.getAllByRole('img').filter(img => {
      const src = img.getAttribute('src')
      if (!src) return false
      try {
        const host = new URL(src, 'http://localhost').hostname
        return host === 'credly.com' || host.endsWith('.credly.com')
      } catch {
        return false
      }
    })
    expect(imgs.length).toBe(certifications.length)
    imgs.forEach(img => {
      expect(img.getAttribute('alt')).toBeTruthy()
    })
  })

  it('shows issuer names', () => {
    renderSoftware()
    expect(screen.getAllByText('Amazon Web Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('GitHub').length).toBeGreaterThan(0)
    expect(screen.getByText('Google Cloud')).toBeInTheDocument()
  })
})
