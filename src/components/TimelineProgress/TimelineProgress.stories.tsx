import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimelineProgress } from './TimelineProgress'

const meta = {
    component: TimelineProgress,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/TimelineProgress',
} satisfies Meta<typeof TimelineProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
