import type { Meta, StoryObj } from '@storybook/react-vite'
import { within, userEvent, expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
    args: {
        onClick: () => {},
    },
    component: Button,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'CHECK ANSWER',
        variant: 'primary',
    },
}

export const PrimaryDisabled: Story = {
    args: {
        children: 'CHECK ANSWER',
        disabled: true,
        variant: 'primary',
    },
}

export const Dark: Story = {
    args: {
        children: 'CONTINUE',
        variant: 'dark',
    },
}

export const DarkDisabled: Story = {
    args: {
        children: 'CONTINUE',
        disabled: true,
        variant: 'dark',
    },
}

export const Success: Story = {
    args: {
        children: 'SUCCESS',
        variant: 'success',
    },
}

export const SuccessDisabled: Story = {
    args: {
        children: 'SUCCESS',
        disabled: true,
        variant: 'success',
    },
}

export const Warning: Story = {
    args: {
        children: 'WARNING',
        variant: 'warning',
    },
}

export const WarningDisabled: Story = {
    args: {
        children: 'WARNING',
        disabled: true,
        variant: 'warning',
    },
}

export const Error: Story = {
    args: {
        children: 'ERROR',
        variant: 'error',
    },
}

export const ErrorDisabled: Story = {
    args: {
        children: 'ERROR',
        disabled: true,
        variant: 'error',
    },
}

export const WithAccessibilityProps: Story = {
    args: {
        ariaDescribedBy: 'answer-help',
        ariaLabel: 'Submit your answer to check if it is correct',
        children: 'Submit Answer',
        variant: 'primary',
    },
    parameters: {
        docs: {
            description: {
                story: 'Button with accessibility props for screen readers. The ariaLabel provides a descriptive label, and ariaDescribedBy links to additional help text.',
            },
        },
    },
}

export const AccessibilityTest: Story = {
    args: {
        children: 'Test Button',
        variant: 'primary',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button')

        // Test basic button properties
        await expect(button).toBeInTheDocument()
        await expect(button).toHaveAttribute('type', 'button')

        // Test focus management by simulating user interaction
        button.focus()
        await expect(button).toHaveFocus()

        // Test keyboard interaction - Enter key
        await userEvent.keyboard('{Enter}')

        // Test keyboard interaction - Space key
        await userEvent.keyboard('{ }')
    },
}
