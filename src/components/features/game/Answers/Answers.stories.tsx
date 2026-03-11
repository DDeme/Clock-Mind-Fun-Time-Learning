import { fn, within, userEvent, expect } from 'storybook/test'

import { Answers } from './Answers'

import type { Meta, StoryObj } from '@storybook/react-vite'

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
    title: 'Features/Game/Answers',
} satisfies Meta<typeof Answers>

export default meta
type Story = StoryObj<typeof Answers>

export const SingleChoice: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: ['3:45', '6:30', '9:15', '12:00'],
        type: 'single-choice' as const,
        value: null,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const option = canvas.getByText('6:30')
        await userEvent.click(option)
        await expect(args.onChange).toHaveBeenCalledWith('6:30')
    },
}

export const SingleChoiceSelected: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: ['3:45', '6:30', '9:15', '12:00'],
        type: 'single-choice' as const,
        value: '3:45',
    },
}

export const NumericAnswer: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [], // This gets overridden by numOptions in Answers component
        type: 'numeric-answer' as const,
        value: '0:00',
    },
}

export const NumericAnswerWithValues: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [], // This gets overridden by numOptions in Answers component
        type: 'numeric-answer' as const,
        value: '3:45',
    },
}

export const ThreeOptions: Story = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: ['3:45', '6:30', '9:15'],
        type: 'single-choice',
        value: null,
    },

    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const option = canvas.getByText('6:30')
        await userEvent.click(option)
        await expect(args.onChange).toHaveBeenCalledWith('6:30')
    },
}
