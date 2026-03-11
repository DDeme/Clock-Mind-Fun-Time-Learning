import { fn } from 'storybook/test'

import { ContinueLearning } from './ContinueLearning'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: ContinueLearning,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Containers/Topics/ContinueLearning',
} satisfies Meta<typeof ContinueLearning>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        lessonName: 'Half Past the Hour',
        lessonProgress: 4,
        lessonTotal: 10,
        onAction: fn(),
    },
}

export const NearlyFinished: Story = {
    args: {
        lessonName: 'Military Time',
        lessonProgress: 9,
        lessonTotal: 10,
        onAction: fn(),
    },
}

export const JustStarted: Story = {
    args: {
        lessonName: 'The Basics',
        lessonProgress: 1,
        lessonTotal: 5,
        onAction: fn(),
    },
}
