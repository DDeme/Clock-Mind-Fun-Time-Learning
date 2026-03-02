import { Game, type ClockTime } from './Game'

import type { Meta, StoryObj } from '@storybook/react-vite'

// Mock Math.random for deterministic stories
const mockMathRandom = (value: number) => {
    const originalRandom = Math.random
    Math.random = () => value
    return () => {
        Math.random = originalRandom
    }
}

const makeQuestions = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
        answer: {
            options: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
            ] as number[][],
            type: 'numeric-answer' as const,
        },
        id: String(i + 1),
        question: {
            questionType: 'analog-clock' as const,
            text: 'Look at the clock! What time is it?',
            value: { hours: (i % 12) + 1, minutes: (i % 12) * 5 } as ClockTime,
        },
        scoreValue: { negativeScore: 0, positiveScore: 30 },
    }))

const meta = {
    argTypes: {},
    component: Game,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Game',
} satisfies Meta<typeof Game>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ShortGame: Story = {
    args: {
        questions: makeQuestions(3),
    },
}

export const LongGame: Story = {
    args: {
        questions: makeQuestions(15),
    },
}

export const NumericAnswerMode: Story = {
    decorators: [
        (Story) => {
            const restoreRandom = mockMathRandom(0.3) // Forces numeric-answer mode
            const result = Story()
            restoreRandom()
            return result
        },
    ],
}

export const SingleChoiceMode: Story = {
    decorators: [
        (Story) => {
            const restoreRandom = mockMathRandom(0.7) // Forces single-choice mode
            const result = Story()
            restoreRandom()
            return result
        },
    ],
}

export const DeterministicTime: Story = {
    decorators: [
        (Story) => {
            const restoreRandom = mockMathRandom(0.1) // Predictable random values
            const result = Story()
            restoreRandom()
            return result
        },
    ],
}

export const MixedModeGame: Story = {
    decorators: [
        (Story) => {
            let callCount = 0
            const originalRandom = Math.random
            Math.random = () => {
                callCount++
                // Alternate between modes for variety
                return callCount % 2 === 0 ? 0.3 : 0.7
            }
            const result = Story()
            Math.random = originalRandom
            return result
        },
    ],
}

export const WithCustomQuestionCount: Story = {
    args: {
        questions: makeQuestions(5),
    },
    decorators: [
        (Story) => {
            const restoreRandom = mockMathRandom(0.6)
            const result = Story()
            restoreRandom()
            return result
        },
    ],
}
