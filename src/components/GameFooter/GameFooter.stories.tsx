import { GameFooter } from './GameFooter'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    args: {
        onCheckAnswer: () => {},
        onNext: () => {},
    },
    component: GameFooter,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/GameFooter',
} satisfies Meta<typeof GameFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        feedback: null,
        isCorrect: null,
        isDisabled: false,
        isFeedbackVisible: false,
    },
}

export const Disabled: Story = {
    args: {
        feedback: null,
        isCorrect: null,
        isDisabled: true,
        isFeedbackVisible: false,
    },
}

export const CorrectFeedback: Story = {
    args: {
        feedback: <div className="p-4 text-green-700">Great job!</div>,
        isCorrect: true,
        isDisabled: false,
        isFeedbackVisible: true,
    },
}

export const IncorrectFeedback: Story = {
    args: {
        feedback: <div className="p-4 text-red-600">Try again!</div>,
        isCorrect: false,
        isDisabled: false,
        isFeedbackVisible: true,
    },
}
