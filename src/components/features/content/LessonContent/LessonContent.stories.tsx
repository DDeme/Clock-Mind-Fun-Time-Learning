import { LessonContent } from './LessonContent'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        lessons: {
            control: { type: 'object' },
            description:
                'Array of lesson objects with id, title, status, position, and optional progress',
        },
    },
    component: LessonContent,
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
    title: 'Features/Content/LessonContent',
} satisfies Meta<typeof LessonContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        lessons: [
            {
                games: ['clock-face-game'],
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Clock Face',
            },
            {
                games: ['hour-hand-game'],
                id: 2,
                position: 'right',
                progress: 43,
                status: 'active',
                title: 'The Hour Hand',
            },
            {
                games: ['minute-hand-game'],
                id: 3,
                position: 'left',
                status: 'locked',
                title: 'Minute Hand',
            },
            {
                games: ['quarter-game'],
                id: 4,
                position: 'right',
                status: 'locked',
                title: 'Half Past & Quarter',
            },
            {
                games: ['seconds-game'],
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
                games: ['intro-game'],
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Introduction',
            },
            {
                games: ['basic-concepts-game'],
                id: 2,
                position: 'right',
                status: 'completed',
                title: 'Basic Concepts',
            },
            {
                games: ['advanced-game'],
                id: 3,
                position: 'left',
                status: 'completed',
                title: 'Advanced Topics',
            },
            {
                games: ['practice-game'],
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
                games: ['lesson1-game'],
                id: 1,
                position: 'left',
                status: 'locked',
                title: 'Lesson 1',
            },
            {
                games: ['lesson2-game'],
                id: 2,
                position: 'right',
                status: 'locked',
                title: 'Lesson 2',
            },
            {
                games: ['lesson3-game'],
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
                games: ['getting-started-game'],
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Getting Started',
            },
            {
                games: ['current-lesson-game'],
                id: 2,
                position: 'right',
                progress: 75,
                status: 'active',
                title: 'Current Lesson',
            },
            {
                games: ['next-lesson-game'],
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
                games: ['module1-game'],
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Module 1',
            },
            {
                games: ['module2-game'],
                id: 2,
                position: 'right',
                status: 'completed',
                title: 'Module 2',
            },
            {
                games: ['module3-game'],
                id: 3,
                position: 'left',
                status: 'completed',
                title: 'Module 3',
            },
            {
                games: ['module4-game'],
                id: 4,
                position: 'right',
                status: 'completed',
                title: 'Module 4',
            },
            {
                games: ['module5-game'],
                id: 5,
                position: 'left',
                status: 'completed',
                title: 'Module 5',
            },
            {
                games: ['module6-game'],
                id: 6,
                position: 'right',
                status: 'completed',
                title: 'Module 6',
            },
            {
                games: ['current-module-game'],
                id: 7,
                position: 'left',
                progress: 90,
                status: 'active',
                title: 'Current Module',
            },
            {
                games: ['future-module-game'],
                id: 8,
                position: 'right',
                status: 'locked',
                title: 'Future Module',
            },
        ],
    },
}
