import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimeToHumanText } from './RelativeTime'

const meta = {
    component: TimeToHumanText,
    decorators: [
        (Story) => (
            <div style={{ fontSize: '18px', padding: '20px' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/RelativeTime',
} satisfies Meta<typeof TimeToHumanText>

export default meta
type Story = StoryObj<typeof meta>

export const CurrentTime: Story = {
    args: {},
}

export const Midnight: Story = {
    args: {
        date: new Date(2024, 0, 1, 0, 0),
    },
}

export const Noon: Story = {
    args: {
        date: new Date(2024, 0, 1, 12, 0),
    },
}

export const QuarterPast: Story = {
    args: {
        date: new Date(2024, 0, 1, 3, 15),
    },
}

export const HalfPast: Story = {
    args: {
        date: new Date(2024, 0, 1, 5, 30),
    },
}

export const QuarterTo: Story = {
    args: {
        date: new Date(2024, 0, 1, 8, 45),
    },
}

export const EarlyMorning: Story = {
    args: {
        date: new Date(2024, 0, 1, 1, 7),
    },
}

export const Morning: Story = {
    args: {
        date: new Date(2024, 0, 1, 6, 10),
    },
}

export const LateMorning: Story = {
    args: {
        date: new Date(2024, 0, 1, 9, 59),
    },
}

export const LateEvening: Story = {
    args: {
        date: new Date(2024, 0, 1, 11, 29),
    },
}
