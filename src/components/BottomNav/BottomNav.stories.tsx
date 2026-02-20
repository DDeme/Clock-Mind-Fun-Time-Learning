import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNav } from './BottomNav'

const meta = {
    title: 'Components/BottomNav',
    component: BottomNav,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof BottomNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
