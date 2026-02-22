import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProgressHeader } from './ProgressHeader'

const meta = {
    title: 'Components/ProgressHeader',
    component: ProgressHeader,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: 'text' },
            description: 'Main title displayed in the header',
        },
        level: {
            control: { type: 'text' },
            description: 'Level or subtitle text',
        },
        currentLessons: {
            control: { type: 'number', min: 0 },
            description: 'Number of completed lessons',
        },
        totalLessons: {
            control: { type: 'number', min: 1 },
            description: 'Total number of lessons',
        },
    },
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ProgressHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Clock Master',
        level: 'Level 2: The Hour Hand',
        currentLessons: 3,
        totalLessons: 10,
    },
}

export const Beginning: Story = {
    args: {
        title: 'Math Basics',
        level: 'Level 1: Addition',
        currentLessons: 0,
        totalLessons: 8,
    },
}

export const MidProgress: Story = {
    args: {
        title: 'Reading Comprehension',
        level: 'Level 3: Advanced Text',
        currentLessons: 5,
        totalLessons: 12,
    },
}

export const NearlyComplete: Story = {
    args: {
        title: 'Science Explorer',
        level: 'Level 4: Chemistry',
        currentLessons: 9,
        totalLessons: 10,
    },
}

export const Complete: Story = {
    args: {
        title: 'History Master',
        level: 'Level 5: World History',
        currentLessons: 15,
        totalLessons: 15,
    },
}

export const LongTitle: Story = {
    args: {
        title: 'Advanced Programming and Software Development',
        level: 'Level 10: Full Stack Engineering',
        currentLessons: 7,
        totalLessons: 25,
    },
}
