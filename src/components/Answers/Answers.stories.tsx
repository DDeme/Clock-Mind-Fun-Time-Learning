import type { Meta, StoryObj } from '@storybook/react-vite'
import { Answers } from './Answers'
import { fn } from 'storybook/test'
import { within, userEvent, expect } from 'storybook/test'

const meta = {
    title: 'Components/Answers',
    component: Answers,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Answers>

export default meta
type Story = StoryObj<typeof Answers>

export const SingleChoice: Story = {
    args: {
        type: 'single-choice' as const,
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        value: null,
        onChange: fn(),
        isDisabled: false,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const option = canvas.getByText('6:30')
        await userEvent.click(option)
        await expect(args.onChange).toHaveBeenCalledWith({
            hours: 6,
            minutes: 30,
        })
    },
}

export const SingleChoiceSelected: Story = {
    args: {
        type: 'single-choice' as const,
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        value: { hours: 3, minutes: 45 },
        onChange: fn(),
        isDisabled: false,
    },
}

export const NumericAnswer: Story = {
    args: {
        type: 'numeric-answer' as const,
        options: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ],
        value: { hours: 0, minutes: 0 },
        onChange: fn(),
        isDisabled: false,
    },
}

export const NumericAnswerWithValues: Story = {
    args: {
        type: 'numeric-answer' as const,
        options: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ],
        value: { hours: 3, minutes: 45 },
        onChange: fn(),
        isDisabled: false,
    },
}
