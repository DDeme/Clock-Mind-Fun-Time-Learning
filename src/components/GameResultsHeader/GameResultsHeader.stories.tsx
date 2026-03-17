import { GameResultsHeader } from './GameResultsHeader'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        maxScore: {
            control: { max: 20, min: 1, step: 1, type: 'number' },
            description: 'Maximum possible score (default: 10)',
        },
        totalScore: {
            control: { max: 10, min: 0, step: 1, type: 'number' },
            description: 'Total score achieved by the user (0-10)',
        },
        userName: {
            control: { type: 'text' },
            description:
                'Name of the user to display in the greeting (default: "Alex")',
        },
    },
    component: GameResultsHeader,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/GameResultsHeader',
} satisfies Meta<typeof GameResultsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        maxScore: 10,
        totalScore: 7,
        userName: 'Alex',
    },
}

export const PerfectScore: Story = {
    args: {
        maxScore: 10,
        totalScore: 10,
        userName: 'Alex',
    },
}

export const LowScore: Story = {
    args: {
        maxScore: 10,
        totalScore: 2,
        userName: 'Alex',
    },
}

export const ZeroScore: Story = {
    args: {
        maxScore: 10,
        totalScore: 0,
        userName: 'Alex',
    },
}

export const HighScore: Story = {
    args: {
        maxScore: 10,
        totalScore: 9,
        userName: 'Alex',
    },
}

export const CustomUserName: Story = {
    args: {
        maxScore: 10,
        totalScore: 8,
        userName: 'Sarah',
    },
}

export const DifferentMaxScore: Story = {
    args: {
        maxScore: 20,
        totalScore: 15,
        userName: 'Mike',
    },
}

export const CustomUserAndMaxScore: Story = {
    args: {
        maxScore: 15,
        totalScore: 5,
        userName: 'Emma',
    },
}
