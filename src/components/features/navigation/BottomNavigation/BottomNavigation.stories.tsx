import { BottomNavigation } from './BottomNavigation'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: BottomNavigation,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/BottomNavigation',
} satisfies Meta<typeof BottomNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithHoverStates: Story = {
    play: async ({ canvasElement: _canvasElement }) => {
        // This story demonstrates hover states
        // In Storybook, you can hover over the navigation items to see the hover effects
    },
}
