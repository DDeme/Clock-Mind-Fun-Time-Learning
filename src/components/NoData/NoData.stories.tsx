import { within, userEvent, expect } from 'storybook/test'

import { NoData } from './NoData'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof NoData> = {
    component: NoData,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/NoData',
} satisfies Meta<typeof NoData>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomTitle: Story = {
    args: {
        message: 'There are no questions available for this topic yet.',
        title: 'No Questions Found',
    },
}

export const WithIcon: Story = {
    args: {
        icon: (
            <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        message: 'Your search did not return any results.',
        title: 'No Results',
    },
}

export const WithAction: Story = {
    args: {
        action: {
            label: 'Add First Item',
            onClick: () => console.log('Action clicked'),
        },
        message: 'Start by adding your first item to see it here.',
        title: 'No Data Available',
    },
}

export const Complete: Story = {
    args: {
        action: {
            label: 'Start Learning',
            onClick: () => console.log('Start learning clicked'),
        },
        icon: (
            <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
        message: 'You haven\'t practiced any clock exercises yet. Start learning to track your progress!',
        title: 'No Clock Data',
    },
}

export const Minimal: Story = {
    args: {
        message: '',
        title: 'Empty',
    },
}

export const WithActionTest: Story = {
    args: {
        action: {
            label: 'Test Button',
            onClick: () => console.log('Test action clicked'),
        },
        message: 'Click the button below to test the action.',
        title: 'Test Action',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const button = canvas.getByRole('button', { name: 'Test Button' })

        // Test button exists and is clickable
        await expect(button).toBeInTheDocument()
        await expect(button).toHaveTextContent('Test Button')

        // Test click interaction
        await userEvent.click(button)
    },
}
