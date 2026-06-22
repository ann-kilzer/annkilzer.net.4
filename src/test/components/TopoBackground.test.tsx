import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TopoBackground from '@/components/TopoBackground'

describe('TopoBackground', () => {
  it('renders an aria-hidden decorative element', () => {
    const { container } = render(<TopoBackground />)
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })
})
