import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimelineContent } from './TimelineContent'

const meta = {
    argTypes: {
        lessons: {
            control: { type: 'object' },
            description:
                'Array of lesson objects with id, title, status, position, and optional progress',
        },
    },
    component: TimelineContent,
    decorators: [
        (Story) => (
            <div style={{ height: 600, maxWidth: 448, overflow: 'hidden' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/TimelineContent',
} satisfies Meta<typeof TimelineContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        lessons: [
            {
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Clock Face',
            },
            {
                id: 2,
                position: 'right',
                progress: 43,
                status: 'active',
                title: 'The Hour Hand',
            },
            {
                id: 3,
                position: 'left',
                status: 'locked',
                title: 'Minute Hand',
            },
            {
                id: 4,
                position: 'right',
                status: 'locked',
                title: 'Half Past & Quarter',
            },
            {
                id: 5,
                position: 'left',
                status: 'locked',
                title: 'Seconds',
            },
        ],
    },
}

export const AllCompleted: Story = {
    args: {
        lessons: [
            {
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Introduction',
            },
            {
                id: 2,
                position: 'right',
                status: 'completed',
                title: 'Basic Concepts',
            },
            {
                id: 3,
                position: 'left',
                status: 'completed',
                title: 'Advanced Topics',
            },
            {
                id: 4,
                position: 'right',
                status: 'completed',
                title: 'Practice Exercises',
            },
        ],
    },
}

export const AllLocked: Story = {
    args: {
        lessons: [
            {
                id: 1,
                position: 'left',
                status: 'locked',
                title: 'Lesson 1',
            },
            {
                id: 2,
                position: 'right',
                status: 'locked',
                title: 'Lesson 2',
            },
            {
                id: 3,
                position: 'left',
                status: 'locked',
                title: 'Lesson 3',
            },
        ],
    },
}

export const SingleActive: Story = {
    args: {
        lessons: [
            {
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Getting Started',
            },
            {
                id: 2,
                position: 'right',
                progress: 75,
                status: 'active',
                title: 'Current Lesson',
            },
            {
                id: 3,
                position: 'left',
                status: 'locked',
                title: 'Next Lesson',
            },
        ],
    },
}

export const HighProgress: Story = {
    args: {
        lessons: [
            {
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Module 1',
            },
            {
                id: 2,
                position: 'right',
                status: 'completed',
                title: 'Module 2',
            },
            {
                id: 3,
                position: 'left',
                status: 'completed',
                title: 'Module 3',
            },
            {
                id: 4,
                position: 'right',
                status: 'completed',
                title: 'Module 4',
            },
            {
                id: 5,
                position: 'left',
                status: 'completed',
                title: 'Module 5',
            },
            {
                id: 6,
                position: 'right',
                status: 'completed',
                title: 'Module 6',
            },
            {
                id: 7,
                position: 'left',
                progress: 90,
                status: 'active',
                title: 'Current Module',
            },
            {
                id: 8,
                position: 'right',
                status: 'locked',
                title: 'Future Module',
            },
        ],
    },
}
