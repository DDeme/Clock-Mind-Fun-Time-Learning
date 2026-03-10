import { Loading } from './Loading'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Loading> = {
    component: Loading,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/Loading',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithCustomBackground: Story = {
    render: () => (
        <div className="h-96 bg-gray-100">
            <Loading />
        </div>
    ),
}