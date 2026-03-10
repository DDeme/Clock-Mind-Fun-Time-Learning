import { Dial } from './Dial'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Dial,
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
    title: 'Components/AnalogClock/Dial',
} satisfies Meta<typeof Dial>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
