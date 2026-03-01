import type { Meta, StoryObj } from '@storybook/react-vite'
import { Answers } from './Answers'
import { fn } from 'storybook/test'
import { within, userEvent, expect } from 'storybook/test'

const meta = {
    component: Answers,
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Answers',
} satisfies Meta<typeof Answers>

export default meta
type Story = StoryObj<typeof Answers>

export const SingleChoice: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        type: 'single-choice' as const,
        value: null,
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
        isDisabled: false,
        onChange: fn(),
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        type: 'single-choice' as const,
        value: { hours: 3, minutes: 45 },
    },
}

export const NumericAnswer: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ],
        type: 'numeric-answer' as const,
        value: { hours: 0, minutes: 0 },
    },
}

export const NumericAnswerWithValues: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ],
        type: 'numeric-answer' as const,
        value: { hours: 3, minutes: 45 },
    },
}
