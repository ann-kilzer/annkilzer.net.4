import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '../components/Footer'

describe('Footer', () => {
  it('shows the current year and location', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
    expect(screen.getByText(/Tokyo/)).toBeInTheDocument()
  })
})
