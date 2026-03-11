import { TimeToHumanText } from './TimeToHuman'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        hours: {
            control: 'number',
            max: 23,
            min: 0,
        },
        minutes: {
            control: 'number',
            max: 59,
            min: 0,
        },
    },
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
    title: 'Features/Clock/TimeToHuman',
} satisfies Meta<typeof TimeToHumanText>

export default meta
type Story = StoryObj<typeof meta>

export const CurrentTime: Story = {
    args: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
    },
}

export const Midnight: Story = {
    args: {
        hours: 0,
        minutes: 0,
    },
}

export const Noon: Story = {
    args: {
        hours: 12,
        minutes: 0,
    },
}

export const QuarterPast: Story = {
    args: {
        hours: 3,
        minutes: 15,
    },
}

export const HalfPast: Story = {
    args: {
        hours: 5,
        minutes: 30,
    },
}

export const QuarterTo: Story = {
    args: {
        hours: 8,
        minutes: 45,
    },
}

export const EarlyMorning: Story = {
    args: {
        hours: 1,
        minutes: 7,
    },
}

export const Morning: Story = {
    args: {
        hours: 6,
        minutes: 10,
    },
}

export const LateMorning: Story = {
    args: {
        hours: 9,
        minutes: 59,
    },
}

export const LateEvening: Story = {
    args: {
        hours: 23,
        minutes: 29,
    },
}
