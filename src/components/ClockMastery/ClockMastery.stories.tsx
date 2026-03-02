import { ClockMastery } from './ClockMastery'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: ClockMastery,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/ClockMastery',
} satisfies Meta<typeof ClockMastery>

export default meta
type Story = StoryObj<typeof meta>

const defaultResults = [
    { correct: true, id: 1 },
    { correct: true, id: 2 },
    { correct: false, id: 3 },
    { correct: true, id: 4 },
    { correct: true, id: 5 },
    { correct: true, id: 6 },
    { correct: false, id: 7 },
    { correct: true, id: 8 },
    { correct: true, id: 9 },
    { correct: true, id: 10 },
]

export const Default: Story = {
    args: {
        results: defaultResults,
    },
}

export const PerfectScore: Story = {
    args: {
        results: defaultResults.map(item => ({ ...item, correct: true })),
    },
}

export const MixedResults: Story = {
    args: {
        results: [
            { correct: true, id: 1 },
            { correct: false, id: 2 },
            { correct: true, id: 3 },
            { correct: false, id: 4 },
            { correct: true, id: 5 },
            { correct: false, id: 6 },
            { correct: true, id: 7 },
            { correct: false, id: 8 },
            { correct: true, id: 9 },
            { correct: false, id: 10 },
        ],
    },
}

export const LowScore: Story = {
    args: {
        results: [
            { correct: true, id: 1 },
            { correct: false, id: 2 },
            { correct: false, id: 3 },
            { correct: false, id: 4 },
            { correct: true, id: 5 },
            { correct: false, id: 6 },
            { correct: false, id: 7 },
            { correct: false, id: 8 },
            { correct: true, id: 9 },
            { correct: false, id: 10 },
        ],
    },
}

export const FewResults: Story = {
    args: {
        results: [
            { correct: true, id: 1 },
            { correct: false, id: 2 },
            { correct: true, id: 3 },
        ],
    },
}
