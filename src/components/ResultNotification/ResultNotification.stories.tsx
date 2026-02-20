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
        correctTimeLabel: '3:45',
    },
}

export const Incorrect: Story = {
    args: {
        isCorrect: false,
        correctTimeLabel: '3:45',
    },
}
