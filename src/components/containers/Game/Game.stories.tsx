import { Game } from './Game'

import type { Meta, StoryObj } from '@storybook/react-vite'

const numericOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

const makeQuestions = (count: number) =>
    Array.from({ length: count }, (_, i) => ({
        answer: {
            options: numericOptions.flat().map(String),
            type: 'numeric-answer' as const,
        },
        id: String(i + 1),
        question: {
            questionType: 'analog-clock' as const,
            text: 'Look at the clock! What time is it?',
            value: `${(i % 12) + 1}:${((i % 12) * 5).toString().padStart(2, '0')}`,
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
    title: 'Containers/Game',
} satisfies Meta<typeof Game>

export default meta
type Story = StoryObj<typeof meta>

const commonArgs = {
    description: 'A default game with 5 questions',
    id: 'default-game',
    onComplete: () => {},
    title: 'Default Game',
}

export const Default: Story = {
    args: {
        ...commonArgs,
        questions: makeQuestions(5),
    },
}

export const ShortGame: Story = {
    args: {
        ...commonArgs,
        description: 'A short game with 3 questions',
        id: 'short-game',
        questions: makeQuestions(3),
    },
}

export const LongGame: Story = {
    args: {
        ...commonArgs,
        description: 'A long game with 15 questions',
        id: 'long-game',
        questions: makeQuestions(15),
    },
}

export const NumericAnswerMode: Story = {
    args: {
        ...commonArgs,
        id: 'numeric-answer-mode',
        questions: Array.from({ length: 5 }, (_, i) => ({
            answer: {
                options: numericOptions.flat().map(String),
                type: 'numeric-answer' as const,
            },
            id: String(i + 1),
            question: {
                questionType: 'analog-clock' as const,
                text: 'Look at the clock! What time is it?',
                value: `${(i % 12) + 1}:${((i % 12) * 5).toString().padStart(2, '0')}`,
            },
            scoreValue: { negativeScore: 0, positiveScore: 30 },
        })),
    },
}

export const SingleChoiceMode: Story = {
    args: {
        ...commonArgs,
        id: 'single-choice-mode',
        questions: Array.from({ length: 5 }, (_, i) => {
            const value = { hours: (i % 12) + 1, minutes: (i % 12) * 5 }
            const correctTime = `${value.hours}:${value.minutes.toString().padStart(2, '0')}`
            const distractors = Array.from({ length: 3 }, (_, j) => {
                const h = ((i + j + 1) % 12) + 1
                const m = ((i + j + 1) % 12) * 5
                return `${h}:${m.toString().padStart(2, '0')}`
            })
            return {
                answer: {
                    options: [...distractors, correctTime].sort(
                        () => Math.random() - 0.5,
                    ),
                    type: 'single-choice' as const,
                },
                id: String(i + 1),
                question: {
                    questionType: 'analog-clock' as const,
                    text: 'Look at the clock! What time is it?',
                    value: correctTime,
                },
                scoreValue: { negativeScore: 0, positiveScore: 30 },
            }
        }),
    },
}

export const DeterministicTime: Story = {
    args: {
        ...commonArgs,
        id: 'deterministic-time',
        questions: Array.from({ length: 5 }, (_, i) => ({
            answer: {
                options: numericOptions.flat().map(String),
                type: 'numeric-answer' as const,
            },
            id: String(i + 1),
            question: {
                questionType: 'analog-clock' as const,
                text: 'Look at the clock! What time is it?',
                value: `${(i % 12) + 1}:${((i % 12) * 5).toString().padStart(2, '0')}`,
            },
            scoreValue: { negativeScore: 0, positiveScore: 30 },
        })),
    },
}

export const MixedModeGame: Story = {
    args: {
        ...commonArgs,
        id: 'mixed-mode-game',
        questions: Array.from({ length: 5 }, (_, i) => {
            const value = { hours: (i % 12) + 1, minutes: (i % 12) * 5 }
            const correctTime = `${value.hours}:${value.minutes.toString().padStart(2, '0')}`
            const isNumeric = i % 2 === 0
            return {
                answer: {
                    options: isNumeric
                        ? numericOptions.flat().map(String)
                        : [
                              ...Array.from({ length: 3 }, (_, j) => {
                                  const h = ((i + j + 1) % 12) + 1
                                  const m = ((i + j + 1) % 12) * 5
                                  return `${h}:${m.toString().padStart(2, '0')}`
                              }),
                              correctTime,
                          ].sort(() => Math.random() - 0.5),
                    type: isNumeric
                        ? ('numeric-answer' as const)
                        : ('single-choice' as const),
                },
                id: String(i + 1),
                question: {
                    questionType: 'analog-clock' as const,
                    text: 'Look at the clock! What time is it?',
                    value: correctTime,
                },
                scoreValue: { negativeScore: 0, positiveScore: 30 },
            }
        }),
    },
}

export const WithCustomQuestionCount: Story = {
    args: {
        ...commonArgs,
        id: 'custom-question-count',
        questions: makeQuestions(5),
    },
}
