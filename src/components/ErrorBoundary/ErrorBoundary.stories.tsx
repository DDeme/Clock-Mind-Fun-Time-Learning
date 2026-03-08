import { ErrorBoundary } from './ErrorBoundary'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: ErrorBoundary,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/ErrorBoundary',
} satisfies Meta<typeof ErrorBoundary>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: <div>Normal content</div>,
    },
}

export const WithError: Story = {
    args: {
        children: (
            <div>
                <button
                    onClick={() => {
                        throw new Error('Test error')
                    }}
                >
                    Trigger Error
                </button>
            </div>
        ),
    },
}

export const WithCustomFallback: Story = {
    args: {
        children: <div>Normal content</div>,
        fallback: (
            <div className="rounded bg-red-100 p-4 text-red-700">
                Custom fallback UI
            </div>
        ),
    },
}
