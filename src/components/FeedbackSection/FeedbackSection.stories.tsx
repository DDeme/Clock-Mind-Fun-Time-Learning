import type { Meta, StoryObj } from '@storybook/react-vite'
import { FeedbackSection } from './FeedbackSection'

const meta = {
    title: 'Components/FeedbackSection',
    component: FeedbackSection,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 400, padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof FeedbackSection>

export default meta
type Story = StoryObj<typeof meta>

export const NotVisible: Story = {
    args: {
        isFeedbackVisible: false,
        isCorrect: false,
        correctAnswer: '3:45',
        earnedStars: 0,
    },
}

export const CorrectAnswer: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: true,
        correctAnswer: '3:45',
        earnedStars: 20,
    },
}

export const IncorrectAnswer: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: false,
        correctAnswer: '3:45',
        earnedStars: 0,
    },
}

export const CorrectAnswerNoon: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: true,
        correctAnswer: '12:00',
        earnedStars: 25,
    },
}

export const IncorrectAnswerMidnight: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: false,
        correctAnswer: '00:00',
        earnedStars: 0,
    },
}

export const CorrectAnswerWithMinutes: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: true,
        correctAnswer: '6:30',
        earnedStars: 15,
    },
}

export const IncorrectAnswerComplex: Story = {
    args: {
        isFeedbackVisible: true,
        isCorrect: false,
        correctAnswer: '9:47',
        earnedStars: 0,
    },
}
