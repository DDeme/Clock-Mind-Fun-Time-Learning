import type { Meta, StoryObj } from '@storybook/react-vite'
import { CenterPin } from './CenterPin'

const meta = {
    component: CenterPin,
    decorators: [
        (Story) => (
            <div
                style={{
                    backgroundColor: '#f3f4f6',
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
    title: 'Components/AnalogClock/CenterPin',
} satisfies Meta<typeof CenterPin>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
