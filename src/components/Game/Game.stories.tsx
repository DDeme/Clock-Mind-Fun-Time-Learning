import type { Meta, StoryObj } from '@storybook/react-vite'
import { Game } from './Game'

// Mock Math.random for deterministic stories
const mockMathRandom = (value: number) => {
    const originalRandom = Math.random
    Math.random = () => value
    return () => {
        Math.random = originalRandom
    }
}

const meta = {
    argTypes: {
        totalQuestions: {
            control: { max: 20, min: 1, type: 'number' },
            description: 'Total number of questions in the game',
        },
    },
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
        totalQuestions: 3,
    },
}

export const LongGame: Story = {
    args: {
        totalQuestions: 15,
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
        totalQuestions: 5,
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
