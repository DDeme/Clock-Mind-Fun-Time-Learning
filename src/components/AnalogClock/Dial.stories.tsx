import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dial } from './Dial'

const meta = {
    title: 'Components/AnalogClock/Dial',
    component: Dial,
    tags: ['autodocs'],
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
} satisfies Meta<typeof Dial>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
