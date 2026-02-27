import type { Meta, StoryObj } from '@storybook/react-vite'
import { ResultNotification } from './ResultNotification'

const meta = {
    title: 'Components/ResultNotification',
    component: ResultNotification,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ResultNotification>

export default meta
type Story = StoryObj<typeof meta>

export const Correct: Story = {
    args: {
        isCorrect: true,
        correctAnswer: '3:45',
        earnedStars: 20,
    },
}

export const Incorrect: Story = {
    args: {
        isCorrect: false,
        correctAnswer: '3:45',
        earnedStars: 0,
    },
}

export const CorrectHighStars: Story = {
    args: {
        isCorrect: true,
        correctAnswer: '12:00',
        earnedStars: 50,
    },
}

export const IncorrectNoon: Story = {
    args: {
        isCorrect: false,
        correctAnswer: '12:00',
        earnedStars: 0,
    },
}

export const CorrectMinimalStars: Story = {
    args: {
        isCorrect: true,
        correctAnswer: '6:30',
        earnedStars: 5,
    },
}
