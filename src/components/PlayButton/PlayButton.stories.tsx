import { within, userEvent, expect } from 'storybook/test'

import { PlayButton } from './PlayButton'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    args: {
        onClick: () => {},
    },
    component: PlayButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/PlayButton',
} satisfies Meta<typeof PlayButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}

export const CustomLabel: Story = {
    args: {
        ariaLabel: 'Start playing',
    },
}

export const CustomOnClick: Story = {
    args: {
        ariaLabel: 'Custom action',
        onClick: () => console.log('Custom action clicked'),
    },
}

export const AccessibilityTest: Story = {
    args: {
        ariaLabel: 'Start lesson',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button')

        // Test basic button properties
        await expect(button).toBeInTheDocument()
        await expect(button).toHaveAttribute('aria-label', 'Start lesson')

        // Test focus management by simulating user interaction
        button.focus()
        await expect(button).toHaveFocus()

        // Test keyboard interaction - Enter key
        await userEvent.keyboard('{Enter}')

        // Test keyboard interaction - Space key
        await userEvent.keyboard('{ }')
    },
}
