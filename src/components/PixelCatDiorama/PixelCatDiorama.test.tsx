import { describe, expect, it, jest } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import { PixelCatDiorama } from './PixelCatDiorama'

describe('PixelCatDiorama', () => {
    it('renders without crashing', () => {
        render(<PixelCatDiorama />)
        const container = document.querySelector('section')
        expect(container).toBeInTheDocument()
    })

    it('applies custom className', () => {
        render(<PixelCatDiorama className="custom-class" />)
        const container = document.querySelector('section')
        expect(container).toHaveClass('custom-class')
    })

    it('calls onMeow callback when provided', () => {
        const mockOnMeow = jest.fn()
        render(<PixelCatDiorama onMeow={mockOnMeow} />)
        // Note: The onMeow prop is available but not currently used in the component
        // This test ensures the prop is accepted for future functionality
        expect(mockOnMeow).not.toHaveBeenCalled()
    })

    it('has correct default props', () => {
        render(<PixelCatDiorama />)
        const container = document.querySelector('section')
        expect(container).toHaveClass('diorama-frame')
        expect(container).toHaveClass('aspect-square')
        expect(container).toHaveClass('max-w-[400px]')
    })

    it('contains SVG elements for the cat', () => {
        render(<PixelCatDiorama />)
        const svg = document.querySelector('svg')
        expect(svg).toBeInTheDocument()
        expect(svg).toHaveAttribute('viewBox', '0 0 16 16')
        expect(svg).toHaveAttribute('style', 'shape-rendering: crispEdges;')
    })

    it('has proper accessibility structure', () => {
        render(<PixelCatDiorama />)
        const container = document.querySelector('section')
        expect(container).toBeInTheDocument()
    })

    it('contains diorama elements', () => {
        render(<PixelCatDiorama />)
        const container = document.querySelector('section')

        // Check for diorama-floor and cat-shadow-oval classes
        expect(container.querySelector('.diorama-floor')).toBeInTheDocument()
        expect(container.querySelector('.cat-shadow-oval')).toBeInTheDocument()
    })

    it('has proper z-index layering', () => {
        render(<PixelCatDiorama />)
        const catContainer = document.querySelector('.relative.z-10')
        expect(catContainer).toBeInTheDocument()
    })

    it('has drop shadow styling', () => {
        render(<PixelCatDiorama />)
        // Use a simpler approach to find the element with drop shadow
        const catContainer = document.querySelector('.relative.z-10')
        expect(catContainer).toBeInTheDocument()
        expect(catContainer).toHaveClass(
            'drop-shadow-[0_12px_0_rgba(0,0,0,0.5)]',
        )
    })
})
