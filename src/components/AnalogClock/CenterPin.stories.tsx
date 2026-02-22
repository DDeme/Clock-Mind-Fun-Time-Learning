import type { Meta, StoryObj } from '@storybook/react-vite'
import { CenterPin } from './CenterPin'

const meta = {
    title: 'Components/AnalogClock/CenterPin',
    component: CenterPin,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 200, height: 200, position: 'relative', backgroundColor: '#f3f4f6' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof CenterPin>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
