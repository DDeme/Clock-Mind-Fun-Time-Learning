import { BottomNav } from './BottomNav'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: BottomNav,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/BottomNav',
} satisfies Meta<typeof BottomNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
