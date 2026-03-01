import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
    argTypes: {
        currentQuestionIdx: {
            control: { max: 20, min: 1, type: 'number' },
            description: 'Current question number',
        },
        onClose: {
            action: 'close',
            description: 'Called when the close button is clicked',
        },
        score: {
            control: { min: 0, type: 'number' },
            description: 'Current score',
        },
        totalQuestions: {
            control: { max: 20, min: 1, type: 'number' },
            description: 'Total number of questions',
        },
    },
    component: Header,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        currentQuestionIdx: 1,
        score: 120,
        totalQuestions: 5,
    },
}

export const MidProgress: Story = {
    args: {
        currentQuestionIdx: 3,
        score: 60,
        totalQuestions: 5,
    },
}

export const LastQuestion: Story = {
    args: {
        currentQuestionIdx: 5,
        score: 200,
        totalQuestions: 5,
    },
}

export const ZeroScore: Story = {
    args: {
        currentQuestionIdx: 1,
        score: 0,
        totalQuestions: 10,
    },
}

export const HighScore: Story = {
    args: {
        currentQuestionIdx: 8,
        score: 9999,
        totalQuestions: 10,
    },
}
