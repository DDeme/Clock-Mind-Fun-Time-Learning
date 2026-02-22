import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { TimelineContent } from './TimelineContent'

describe('TimelineContent', () => {
    const mockLessons = [
        {
            id: 1,
            title: 'Clock Face',
            status: 'completed' as const,
            position: 'left' as const,
        },
        {
            id: 2,
            title: 'The Hour Hand',
            status: 'active' as const,
            position: 'right' as const,
            progress: 43,
        },
        {
            id: 3,
            title: 'Minute Hand',
            status: 'locked' as const,
            position: 'left' as const,
        },
    ]

    it('should render all lessons', () => {
        render(<TimelineContent lessons={mockLessons} />)
        expect(screen.getByText('Clock Face')).toBeInTheDocument()
        expect(screen.getByText('The Hour Hand')).toBeInTheDocument()
        expect(screen.getByText('Minute Hand')).toBeInTheDocument()
    })

    it('should show correct status for completed lessons', () => {
        render(<TimelineContent lessons={mockLessons} />)
        expect(screen.getByText('Finished!')).toBeInTheDocument()
    })

    it('should show correct status for active lessons', () => {
        render(<TimelineContent lessons={mockLessons} />)
        expect(screen.getByText('LEARNING...')).toBeInTheDocument()
    })

    it('should show correct status for locked lessons', () => {
        render(<TimelineContent lessons={mockLessons} />)
        expect(screen.getByText('Locked')).toBeInTheDocument()
    })

    it('should render graduation flag', () => {
        render(<TimelineContent lessons={mockLessons} />)
        expect(screen.getByText('Graduation')).toBeInTheDocument()
    })

    it('should handle empty lessons array', () => {
        render(<TimelineContent lessons={[]} />)
        expect(screen.getByText('Graduation')).toBeInTheDocument()
    })

    it('should handle only completed lessons', () => {
        const completedLessons = mockLessons.map((lesson) => ({
            ...lesson,
            status: 'completed' as const,
        }))
        render(<TimelineContent lessons={completedLessons} />)

        const finishedTexts = screen.getAllByText('Finished!')
        expect(finishedTexts).toHaveLength(3)
    })

    it('should handle only locked lessons', () => {
        const lockedLessons = mockLessons.map((lesson) => ({
            ...lesson,
            status: 'locked' as const,
        }))
        render(<TimelineContent lessons={lockedLessons} />)

        const lockedTexts = screen.getAllByText('Locked')
        expect(lockedTexts).toHaveLength(3)
    })

    it('should handle lessons with different positions', () => {
        render(<TimelineContent lessons={mockLessons} />)

        // Check that lessons are rendered (position affects styling but not content)
        expect(screen.getByText('Clock Face')).toBeInTheDocument()
        expect(screen.getByText('The Hour Hand')).toBeInTheDocument()
        expect(screen.getByText('Minute Hand')).toBeInTheDocument()
    })

    it('should handle active lesson without progress', () => {
        const activeLessonNoProgress = {
            id: 2,
            title: 'The Hour Hand',
            status: 'active' as const,
            position: 'right' as const,
        }

        render(<TimelineContent lessons={[activeLessonNoProgress]} />)
        expect(screen.getByText('The Hour Hand')).toBeInTheDocument()
        expect(screen.getByText('LEARNING...')).toBeInTheDocument()
    })
})
