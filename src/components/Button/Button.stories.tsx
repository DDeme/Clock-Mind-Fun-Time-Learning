import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        onClick: () => {},
    },
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'CHECK ANSWER',
    },
}

export const PrimaryDisabled: Story = {
    args: {
        variant: 'primary',
        disabled: true,
        children: 'CHECK ANSWER',
    },
}

export const Dark: Story = {
    args: {
        variant: 'dark',
        children: 'CONTINUE',
    },
}

export const DarkDisabled: Story = {
    args: {
        variant: 'dark',
        disabled: true,
        children: 'CONTINUE',
    },
}

export const Success: Story = {
    args: {
        variant: 'success',
        children: 'SUCCESS',
    },
}

export const SuccessDisabled: Story = {
    args: {
        variant: 'success',
        disabled: true,
        children: 'SUCCESS',
    },
}

export const Warning: Story = {
    args: {
        variant: 'warning',
        children: 'WARNING',
    },
}

export const WarningDisabled: Story = {
    args: {
        variant: 'warning',
        disabled: true,
        children: 'WARNING',
    },
}

export const Error: Story = {
    args: {
        variant: 'error',
        children: 'ERROR',
    },
}

export const ErrorDisabled: Story = {
    args: {
        variant: 'error',
        disabled: true,
        children: 'ERROR',
    },
}
