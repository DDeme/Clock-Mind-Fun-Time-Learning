import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockHands } from './ClockHands'

const meta = {
    title: 'Components/AnalogClock/ClockHands',
    component: ClockHands,
    tags: ['autodocs'],
    argTypes: {
        minutes: {
            control: { type: 'number', min: 0, max: 59 },
            description: 'Minutes (0-59)',
        },
        hours: {
            control: { type: 'number', min: 0, max: 23 },
            description: 'Hours (0-23)',
        },
        seconds: {
            control: { type: 'number', min: 0, max: 59 },
            description: 'Seconds (0-59)',
        },
        hideSeconds: {
            control: { type: 'boolean' },
            description: 'Hide the second hand',
        },
    },
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 200, height: 200, position: 'relative', backgroundColor: 'white', border: '2px solid #e5e7eb', borderRadius: '50%' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ClockHands>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        minutes: 15,
        hours: 3,
        seconds: 30,
    },
}

export const TwelveOClock: Story = {
    args: {
        minutes: 0,
        hours: 12,
        seconds: 0,
    },
}

export const ThreeThirty: Story = {
    args: {
        minutes: 30,
        hours: 3,
        seconds: 45,
    },
}

export const SixFifteen: Story = {
    args: {
        minutes: 15,
        hours: 6,
        seconds: 20,
    },
}

export const NineFortyFive: Story = {
    args: {
        minutes: 45,
        hours: 9,
        seconds: 10,
    },
}

export const WithoutSeconds: Story = {
    args: {
        minutes: 25,
        hours: 7,
        seconds: 0,
        hideSeconds: true,
    },
}

export const Midnight: Story = {
    args: {
        minutes: 0,
        hours: 0,
        seconds: 0,
    },
}
