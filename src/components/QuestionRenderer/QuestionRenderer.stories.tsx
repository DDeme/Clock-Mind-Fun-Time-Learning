import { QuestionRenderer } from './QuestionRenderer'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        questionType: {
            control: { type: 'select' },
            description: 'Type of question to render',
            options: ['analog-clock', 'digital-clock', 'text-clock', 'text'],
        },
        value: {
            control: { type: 'text' },
            description: 'Time string in format "HH:MM" or text content',
        },
    },
    component: QuestionRenderer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/QuestionRenderer',
} satisfies Meta<typeof QuestionRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const AnalogClockQuestion: Story = {
    args: {
        questionType: 'analog-clock',
        value: '3:30',
    },
}

export const AnalogClockTwelveOClock: Story = {
    args: {
        questionType: 'analog-clock',
        value: '12:00',
    },
}

export const AnalogClockQuarterPast: Story = {
    args: {
        questionType: 'analog-clock',
        value: '9:15',
    },
}

export const AnalogClockSmall: Story = {
    args: {
        questionType: 'analog-clock',
        value: '6:45',
    },
}

export const AnalogClockLarge: Story = {
    args: {
        questionType: 'analog-clock',
        value: '4:20',
    },
}

export const TextClockQuestion: Story = {
    args: {
        questionType: 'text-clock',
        value: '2:45',
    },
}

export const TextClockMidnight: Story = {
    args: {
        questionType: 'text-clock',
        value: '12:00',
    },
}

export const TextClockQuarterTo: Story = {
    args: {
        questionType: 'text-clock',
        value: '10:45',
    },
}

export const TextQuestion: Story = {
    args: {
        questionType: 'text',
        value: 'What time is shown on the clock?',
    },
}

export const TextMathProblem: Story = {
    args: {
        questionType: 'text',
        value: 'If the clock shows 3:15, what time will it be in 30 minutes?',
    },
}

export const TextWordProblem: Story = {
    args: {
        questionType: 'text',
        value: 'Sarah starts her homework at 4:30 PM and finishes at 5:15 PM. How long did she spend on homework?',
    },
}

export const EdgeCases: Story = {
    args: {
        questionType: 'analog-clock',
        value: '3:30',
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-2 text-lg font-semibold">Edge Case: 1:00</h3>
                <QuestionRenderer
                    questionType="analog-clock"
                    value="1:00"
                />
            </div>
            <div>
                <h3 className="mb-2 text-lg font-semibold">Edge Case: 11:59</h3>
                <QuestionRenderer
                    questionType="analog-clock"
                    value="11:59"
                />
            </div>
            <div>
                <h3 className="mb-2 text-lg font-semibold">
                    Edge Case: 0:05 (12:05 AM)
                </h3>
                <QuestionRenderer
                    questionType="analog-clock"
                    value="0:05"
                />
            </div>
        </div>
    ),
}

export const AllQuestionTypes: Story = {
    args: {
        questionType: 'analog-clock',
        value: '3:30',
    },
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-2 text-lg font-semibold">Analog Clock</h3>
                <QuestionRenderer
                    questionType="analog-clock"
                    value="3:30"
                />
            </div>
            <div>
                <h3 className="mb-2 text-lg font-semibold">Text Clock</h3>
                <QuestionRenderer
                    questionType="text-clock"
                    value="3:30"
                />
            </div>
            <div>
                <h3 className="mb-2 text-lg font-semibold">Text Question</h3>
                <QuestionRenderer
                    questionType="text"
                    value="What time is it?"
                />
            </div>
        </div>
    ),
}
