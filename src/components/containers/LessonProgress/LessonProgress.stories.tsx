import { LessonProgress } from './LessonProgress'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: LessonProgress,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/LessonProgress',
} satisfies Meta<typeof LessonProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        lessons: [
            {
                games: [],
                id: 1,
                position: 'left',
                status: 'completed',
                title: 'Lesson 1',
            },
            {
                games: [],
                id: 2,
                position: 'right',
                status: 'active',
                title: 'Lesson 2',
            },
            {
                games: [],
                id: 3,
                position: 'left',
                status: 'locked',
                title: 'Lesson 3',
            },
        ],
    },
}
