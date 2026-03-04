import { TimeToHumanText } from './RelativeTime'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        dateISOString: {
            control: 'date',
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
    title: 'Components/RelativeTime',
} satisfies Meta<typeof TimeToHumanText>

export default meta
type Story = StoryObj<typeof meta>

export const CurrentTime: Story = {
    args: {},
}

export const Midnight: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 0, 0).toISOString(),
    },
}

export const Noon: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 12, 0).toISOString(),
    },
}

export const QuarterPast: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 3, 15).toISOString(),
    },
}

export const HalfPast: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 5, 30).toISOString(),
    },
}

export const QuarterTo: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 8, 45).toISOString(),
    },
}

export const EarlyMorning: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 1, 7).toISOString(),
    },
}

export const Morning: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 6, 10).toISOString(),
    },
}

export const LateMorning: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 9, 59).toISOString(),
    },
}

export const LateEvening: Story = {
    args: {
        dateISOString: new Date(2024, 0, 1, 11, 29).toISOString(),
    },
}
