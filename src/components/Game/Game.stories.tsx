import { type ClockTime } from '../../utils/gameGenerator/gameGenerator'

import { Game } from './Game'

import type { Meta, StoryObj } from '@storybook/react-vite'

const numericOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

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

export const Default: Story = {
    args: {
        id: 'default-game',
        onComplete: () => {},
        questions: makeQuestions(5),
    },
}

export const ShortGame: Story = {
    args: {
        id: 'short-game',
        onComplete: () => {},
        questions: makeQuestions(3),
    },
}

export const LongGame: Story = {
    args: {
        id: 'long-game',
        onComplete: () => {},
        questions: makeQuestions(15),
    },
}

export const NumericAnswerMode: Story = {
    args: {
        id: 'numeric-answer-mode',
        onComplete: () => {},
        questions: Array.from({ length: 5 }, (_, i) => ({
            answer: {
                options: numericOptions,
                type: 'numeric-answer' as const,
            },
            id: String(i + 1),
            question: {
                questionType: 'analog-clock' as const,
                text: 'Look at the clock! What time is it?',
                value: { hours: (i % 12) + 1, minutes: (i % 12) * 5 },
            },
            scoreValue: { negativeScore: 0, positiveScore: 30 },
        })),
    },
}

export const SingleChoiceMode: Story = {
    args: {
        id: 'single-choice-mode',
        onComplete: () => {},
        questions: Array.from({ length: 5 }, (_, i) => {
            const value = { hours: (i % 12) + 1, minutes: (i % 12) * 5 }
            return {
                answer: {
                    options: [
                        ...Array.from({ length: 3 }, () => ({
                            hours: ((i + 1) % 12) + 1,
                            minutes: ((i + 1) % 12) * 5,
                        })),
                        value,
                    ].sort(() => Math.random() - 0.5),
                    type: 'single-choice' as const,
                },
                id: String(i + 1),
                question: {
                    questionType: 'analog-clock' as const,
                    text: 'Look at the clock! What time is it?',
                    value,
                },
                scoreValue: { negativeScore: 0, positiveScore: 30 },
            }
        }),
    },
}

export const DeterministicTime: Story = {
    args: {
        id: 'deterministic-time',
        onComplete: () => {},
        questions: Array.from({ length: 5 }, (_, i) => ({
            answer: {
                options: [
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
                ],
                type: 'numeric-answer' as const,
            },
            id: String(i + 1),
            question: {
                questionType: 'analog-clock' as const,
                text: 'Look at the clock! What time is it?',
                value: { hours: 1, minutes: 0 },
            },
            scoreValue: { negativeScore: 0, positiveScore: 30 },
        })),
    },
}

export const MixedModeGame: Story = {
    args: {
        id: 'mixed-mode-game',
        onComplete: () => {},
        questions: Array.from({ length: 5 }, (_, i) => {
            const value = { hours: (i % 12) + 1, minutes: (i % 12) * 5 }
            const isNumeric = i % 2 === 0
            return {
                answer: {
                    options: isNumeric
                        ? [
                              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                              [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
                          ]
                        : [
                              ...Array.from({ length: 3 }, () => ({
                                  hours: ((i + 1) % 12) + 1,
                                  minutes: ((i + 1) % 12) * 5,
                              })),
                              value,
                          ].sort(() => Math.random() - 0.5),
                    type: isNumeric
                        ? ('numeric-answer' as const)
                        : ('single-choice' as const),
                },
                id: String(i + 1),
                question: {
                    questionType: 'analog-clock' as const,
                    text: 'Look at the clock! What time is it?',
                    value,
                },
                scoreValue: { negativeScore: 0, positiveScore: 30 },
            }
        }),
    },
}

export const WithCustomQuestionCount: Story = {
    args: {
        id: 'custom-question-count',
        onComplete: () => {},
        questions: makeQuestions(5),
    },
}
