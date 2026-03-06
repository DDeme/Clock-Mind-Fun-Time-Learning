import { Main } from './Main'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Main,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Main',
} satisfies Meta<typeof Main>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        ariaLabel: 'Main content area',
        children: (
            <div className="rounded bg-blue-100 p-4">
                Main content goes here
            </div>
        ),
    },
}

export const WithCustomAriaLabel: Story = {
    args: {
        ariaLabel: 'Custom main content',
        children: (
            <div className="rounded bg-green-100 p-4">Custom content</div>
        ),
    },
}
