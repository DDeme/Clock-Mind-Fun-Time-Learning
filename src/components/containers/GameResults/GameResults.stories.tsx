import { GameResults } from './GameResults'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: GameResults,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Containers/GameResults',
} satisfies Meta<typeof GameResults>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        finished: new Date(new Date().setMinutes(new Date().getMinutes() + 5)),
        id: '2',
        questionsAnswers: [
            {
                answer: '5:45',
                finished: new Date(
                    new Date().setMinutes(new Date().getMinutes() + 1),
                ).getTime(),
                id: '10',
                isCorrect: false,
                scoreDiff: 0,
                started: new Date(
                    new Date().setMinutes(new Date().getMinutes() - 1),
                ).getTime(),
            },
        ],
        started: new Date(),
        totalScore: 0,
    },
    globals: {
        a11y: {
            // This option disables all automatic a11y checks on this story
            manual: true,
        },
    },
}
