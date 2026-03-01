import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResultNotification } from './ResultNotification'

const meta = {
    component: ResultNotification,
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
    title: 'Components/ResultNotification',
} satisfies Meta<typeof ResultNotification>

export default meta
type Story = StoryObj<typeof meta>

export const Correct: Story = {
    args: {
        correctAnswer: '3:45',
        earnedStars: 20,
        isCorrect: true,
    },
}

export const Incorrect: Story = {
    args: {
        correctAnswer: '3:45',
        earnedStars: 0,
        isCorrect: false,
    },
}

export const CorrectHighStars: Story = {
    args: {
        correctAnswer: '12:00',
        earnedStars: 50,
        isCorrect: true,
    },
}

export const IncorrectNoon: Story = {
    args: {
        correctAnswer: '12:00',
        earnedStars: 0,
        isCorrect: false,
    },
}

export const CorrectMinimalStars: Story = {
    args: {
        correctAnswer: '6:30',
        earnedStars: 5,
        isCorrect: true,
    },
}
