import { QuestionsResult } from './QuestionsResult'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: QuestionsResult,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/QuestionsResult',
} satisfies Meta<typeof QuestionsResult>

export default meta
type Story = StoryObj<typeof meta>

const defaultResults = [
    { id: '1', isCorrect: true },
    { id: '2', isCorrect: true },
    { id: '3', isCorrect: false },
    { id: '4', isCorrect: true },
    { id: '5', isCorrect: true },
    { id: '6', isCorrect: true },
    { id: '7', isCorrect: false },
    { id: '8', isCorrect: true },
    { id: '9', isCorrect: true },
    { id: '10', isCorrect: true },
]

export const Default: Story = {
    args: {
        results: defaultResults,
        title: 'Questions Result',
    },
}

export const PerfectScore: Story = {
    args: {
        results: defaultResults.map((item) => ({ ...item, isCorrect: true })),
        title: 'Perfect Score',
    },
}

export const MixedResults: Story = {
    args: {
        results: [
            { id: '1', isCorrect: true },
            { id: '2', isCorrect: false },
            { id: '3', isCorrect: true },
            { id: '4', isCorrect: false },
            { id: '5', isCorrect: true },
            { id: '6', isCorrect: false },
            { id: '7', isCorrect: true },
            { id: '8', isCorrect: false },
            { id: '9', isCorrect: true },
            { id: '10', isCorrect: false },
        ],
        title: 'Mixed Results',
    },
}

export const LowScore: Story = {
    args: {
        results: [
            { id: '1', isCorrect: true },
            { id: '2', isCorrect: false },
            { id: '3', isCorrect: false },
            { id: '4', isCorrect: false },
            { id: '5', isCorrect: true },
            { id: '6', isCorrect: false },
            { id: '7', isCorrect: false },
            { id: '8', isCorrect: false },
            { id: '9', isCorrect: true },
            { id: '10', isCorrect: false },
        ],
        title: 'Low Score',
    },
}

export const FewResults: Story = {
    args: {
        results: [
            { id: '1', isCorrect: true },
            { id: '2', isCorrect: false },
            { id: '3', isCorrect: true },
        ],
        title: 'Few Results',
    },
}
