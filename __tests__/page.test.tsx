import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    it('renders a heading', () => {
        // This is a placeholder test. We need to verify what's actually on the page.
        // Since we used create-next-app, there's usually a Next.js logo or some text.
        // For now, let's just make sure it renders without crashing.
        render(<Page />)
        const main = screen.getByRole('main')
        expect(main).toBeInTheDocument()
    })
})
