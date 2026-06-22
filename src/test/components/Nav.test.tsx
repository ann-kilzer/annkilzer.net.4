import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import Nav from '@/components/Nav'
import i18n from '@/i18n'

function renderNav() {
  return render(<MemoryRouter><Nav /></MemoryRouter>)
}

describe('Nav', () => {
  afterEach(() => { i18n.changeLanguage('en') })
  it('renders all nav links in English by default', () => {
    renderNav()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Software' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Fine Art' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('shows the language toggle button', () => {
    renderNav()
    expect(screen.getByRole('button', { name: /switch language/i })).toBeInTheDocument()
  })

  it('switches to Japanese when toggle is clicked', () => {
    renderNav()
    fireEvent.click(screen.getByRole('button', { name: /switch language/i }))
    expect(screen.getByRole('link', { name: 'ホーム' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'ソフトウェア' })).toBeInTheDocument()
  })

  it('switches back to English on second click', () => {
    renderNav()
    const btn = screen.getByRole('button', { name: /switch language/i })
    fireEvent.click(btn)
    fireEvent.click(btn)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })
})
