import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressHeader } from './ProgressHeader'

const meta = {
    argTypes: {
        currentLessons: {
            control: { min: 0, type: 'number' },
            description: 'Number of completed lessons',
        },
        level: {
            control: { type: 'text' },
            description: 'Level or subtitle text',
        },
        title: {
            control: { type: 'text' },
            description: 'Main title displayed in the header',
        },
        totalLessons: {
            control: { min: 1, type: 'number' },
            description: 'Total number of lessons',
        },
    },
    component: ProgressHeader,
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
    title: 'Components/ProgressHeader',
} satisfies Meta<typeof ProgressHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        currentLessons: 3,
        level: 'Level 2: The Hour Hand',
        title: 'Clock Master',
        totalLessons: 10,
    },
}

export const Beginning: Story = {
    args: {
        currentLessons: 0,
        level: 'Level 1: Addition',
        title: 'Math Basics',
        totalLessons: 8,
    },
}

export const MidProgress: Story = {
    args: {
        currentLessons: 5,
        level: 'Level 3: Advanced Text',
        title: 'Reading Comprehension',
        totalLessons: 12,
    },
}

export const NearlyComplete: Story = {
    args: {
        currentLessons: 9,
        level: 'Level 4: Chemistry',
        title: 'Science Explorer',
        totalLessons: 10,
    },
}

export const Complete: Story = {
    args: {
        currentLessons: 15,
        level: 'Level 5: World History',
        title: 'History Master',
        totalLessons: 15,
    },
}

export const LongTitle: Story = {
    args: {
        currentLessons: 7,
        level: 'Level 10: Full Stack Engineering',
        title: 'Advanced Programming and Software Development',
        totalLessons: 25,
    },
}
