import { NoData } from './NoData'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof NoData> = {
    argTypes: {
        message: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
    },
    component: NoData,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/NoData',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomMessage: Story = {
    args: {
        message:
            'No games found for your current filter. Try adjusting your search criteria.',
        title: 'No Games Available',
    },
}

export const WithAction: Story = {
    args: {
        action: {
            label: 'Clear Filters',
            onClick: () => alert('Action clicked!'),
        },
        message: 'No results found with the current filters.',
        title: 'No Results',
    },
}

export const WithIcon: Story = {
    args: {
        icon: (
            <svg
                className="h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        ),
        message: 'No documents have been uploaded yet.',
        title: 'No Documents',
    },
}
