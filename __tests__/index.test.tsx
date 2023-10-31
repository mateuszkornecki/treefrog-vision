import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('eTests config', () => {
    it('Tests are working!', () => {
        render(<div>I am working!</div>)

        const aimpleElement = screen.getByText(/working/i);

        expect(aimpleElement).toBeInTheDocument()
    })
})