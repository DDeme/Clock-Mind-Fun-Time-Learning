import { Topics } from './Topics'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Topics,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Containers/Topics',
} satisfies Meta<typeof Topics>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
