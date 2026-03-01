import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockHands } from './ClockHands'

const meta = {
    argTypes: {
        hideSeconds: {
            control: { type: 'boolean' },
            description: 'Hide the second hand',
        },
        hours: {
            control: { max: 25, min: 0, type: 'number' },
            description: 'Hours (0-23)',
        },
        minutes: {
            control: { max: 62, min: 0, type: 'number' },
            description: 'Minutes (0-59)',
        },
        seconds: {
            control: { max: 62, min: 0, type: 'number' },
            description: 'Seconds (0-59)',
        },
    },
    component: ClockHands,
    decorators: [
        (Story) => (
            <div
                style={{
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '50%',
                    height: 200,
                    position: 'relative',
                    width: 200,
                }}
            >
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/AnalogClock/ClockHands',
} satisfies Meta<typeof ClockHands>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        hours: 3,
        minutes: 15,
        seconds: 30,
    },
}

export const TwelveOClock: Story = {
    args: {
        hours: 12,
        minutes: 0,
        seconds: 0,
    },
}

export const ThreeThirty: Story = {
    args: {
        hours: 3,
        minutes: 30,
        seconds: 45,
    },
}

export const SixFifteen: Story = {
    args: {
        hours: 6,
        minutes: 15,
        seconds: 20,
    },
}

export const NineFortyFive: Story = {
    args: {
        hours: 9,
        minutes: 45,
        seconds: 10,
    },
}

export const WithoutSeconds: Story = {
    args: {
        hideSeconds: true,
        hours: 7,
        minutes: 25,
        seconds: 0,
    },
}

export const Midnight: Story = {
    args: {
        hours: 0,
        minutes: 0,
        seconds: 0,
    },
}
