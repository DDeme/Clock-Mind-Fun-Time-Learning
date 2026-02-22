import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimelineContent } from './TimelineContent'

const meta = {
    title: 'Components/TimelineContent',
    component: TimelineContent,
    tags: ['autodocs'],
    argTypes: {
        lessons: {
            control: { type: 'object' },
            description: 'Array of lesson objects with id, title, status, position, and optional progress',
        },
    },
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448, height: 600, overflow: 'hidden' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TimelineContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        lessons: [
            {
                id: 1,
                title: 'Clock Face',
                status: 'completed',
                position: 'left',
            },
            {
                id: 2,
                title: 'The Hour Hand',
                status: 'active',
                position: 'right',
                progress: 43,
            },
            {
                id: 3,
                title: 'Minute Hand',
                status: 'locked',
                position: 'left',
            },
            {
                id: 4,
                title: 'Half Past & Quarter',
                status: 'locked',
                position: 'right',
            },
            {
                id: 5,
                title: 'Seconds',
                status: 'locked',
                position: 'left',
            },
        ],
    },
}

export const AllCompleted: Story = {
    args: {
        lessons: [
            {
                id: 1,
                title: 'Introduction',
                status: 'completed',
                position: 'left',
            },
            {
                id: 2,
                title: 'Basic Concepts',
                status: 'completed',
                position: 'right',
            },
            {
                id: 3,
                title: 'Advanced Topics',
                status: 'completed',
                position: 'left',
            },
            {
                id: 4,
                title: 'Practice Exercises',
                status: 'completed',
                position: 'right',
            },
        ],
    },
}

export const AllLocked: Story = {
    args: {
        lessons: [
            {
                id: 1,
                title: 'Lesson 1',
                status: 'locked',
                position: 'left',
            },
            {
                id: 2,
                title: 'Lesson 2',
                status: 'locked',
                position: 'right',
            },
            {
                id: 3,
                title: 'Lesson 3',
                status: 'locked',
                position: 'left',
            },
        ],
    },
}

export const SingleActive: Story = {
    args: {
        lessons: [
            {
                id: 1,
                title: 'Getting Started',
                status: 'completed',
                position: 'left',
            },
            {
                id: 2,
                title: 'Current Lesson',
                status: 'active',
                position: 'right',
                progress: 75,
            },
            {
                id: 3,
                title: 'Next Lesson',
                status: 'locked',
                position: 'left',
            },
        ],
    },
}

export const HighProgress: Story = {
    args: {
        lessons: [
            {
                id: 1,
                title: 'Module 1',
                status: 'completed',
                position: 'left',
            },
            {
                id: 2,
                title: 'Module 2',
                status: 'completed',
                position: 'right',
            },
            {
                id: 3,
                title: 'Module 3',
                status: 'completed',
                position: 'left',
            },
            {
                id: 4,
                title: 'Module 4',
                status: 'completed',
                position: 'right',
            },
            {
                id: 5,
                title: 'Module 5',
                status: 'completed',
                position: 'left',
            },
            {
                id: 6,
                title: 'Module 6',
                status: 'completed',
                position: 'right',
            },
            {
                id: 7,
                title: 'Current Module',
                status: 'active',
                position: 'left',
                progress: 90,
            },
            {
                id: 8,
                title: 'Future Module',
                status: 'locked',
                position: 'right',
            },
        ],
    },
}
