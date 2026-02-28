import type { Meta, StoryObj } from '@storybook/react-vite'
import { QuestionRenderer } from './QuestionRenderer'

const meta = {
    title: 'Components/QuestionRenderer',
    component: QuestionRenderer,
    tags: ['autodocs'],
    argTypes: {
        questionType: {
            control: { type: 'select' },
            options: ['analog-clock', 'digital-clock'],
            description: 'Type of question to render',
        },
        value: {
            control: { type: 'object' },
            description: 'Props for the specific question component',
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof QuestionRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const AnalogClockQuestion: Story = {
    args: {
        questionType: 'analog-clock',
        value: {
            hours: 3,
            minutes: 30,
            seconds: 0,
            size: 200,
        },
    },
}

export const AnalogClockTwelveOClock: Story = {
    args: {
        questionType: 'analog-clock',
        value: {
            hours: 12,
            minutes: 0,
            seconds: 0,
            size: 200,
        },
    },
}

export const AnalogClockQuarterPast: Story = {
    args: {
        questionType: 'analog-clock',
        value: {
            hours: 9,
            minutes: 15,
            seconds: 30,
            size: 200,
        },
    },
}

export const AnalogClockSmall: Story = {
    args: {
        questionType: 'analog-clock',
        value: {
            hours: 6,
            minutes: 45,
            seconds: 0,
            size: 150,
        },
    },
}

export const AnalogClockLarge: Story = {
    args: {
        questionType: 'analog-clock',
        value: {
            hours: 4,
            minutes: 20,
            seconds: 15,
            size: 300,
        },
    },
}
