import type { Meta, StoryObj } from '@storybook/react-vite'
import { BottomNav } from './BottomNav'

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
