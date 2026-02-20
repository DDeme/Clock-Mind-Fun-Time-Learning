import type { Meta, StoryObj } from '@storybook/react-vite'
import { TimelineProgress } from './TimelineProgress'

const meta = {
    title: 'Components/TimelineProgress',
    component: TimelineProgress,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TimelineProgress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
