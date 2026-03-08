import { Loading } from './Loading'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Loading,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Loading',
} satisfies Meta<typeof Loading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
