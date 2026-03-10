import { ActionFooter } from './ActionFooter'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: ActionFooter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/ActionFooter',
} satisfies Meta<typeof ActionFooter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <button className="rounded bg-blue-600 px-4 py-2 text-white">
                Action Button
            </button>
        ),
    },
}

export const WithMultipleActions: Story = {
    args: {
        children: (
            <div className="flex gap-2">
                <button className="rounded bg-gray-500 px-4 py-2 text-white">
                    Cancel
                </button>
                <button className="rounded bg-blue-600 px-4 py-2 text-white">
                    Submit
                </button>
            </div>
        ),
    },
}