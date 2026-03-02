import { GameResults } from './GameResults'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: GameResults,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/GameResults',
} satisfies Meta<typeof GameResults>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }
