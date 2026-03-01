import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClockShowcase } from './ClockShowcase'

const meta = {
    component: ClockShowcase,
    decorators: [
        (Story) => (
            <div style={{ height: '100vh', margin: 0, padding: 0 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile',
            viewports: {
                mobile: {
                    name: 'Mobile',
                    styles: {
                        height: '812px',
                        width: '375px',
                    },
                },
                tablet: {
                    name: 'Tablet',
                    styles: {
                        height: '1024px',
                        width: '768px',
                    },
                },
            },
        },
    },
    tags: ['autodocs'],
    title: 'Components/ClockShowcase',
} satisfies Meta<typeof ClockShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InteractiveMode: Story = {
    parameters: {
        docs: {
            description: {
                story: 'This story shows the ClockShowcase in its default state with live time updates. Users can interact with the clock hands to set manual time, toggle between 12/24 hour format, and switch between AM/PM periods.',
            },
        },
    },
}

export const ManualTimeDemo: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates manual time setting by dragging clock hands. The component shows "Manual Mode" indicator when time is manually set.',
            },
        },
    },
}

export const EducationalContent: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Shows the educational "Did you know?" section that provides time-related facts based on the current minute position.',
            },
        },
    },
}

export const ResponsiveDesign: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Shows how the ClockShowcase adapts to different screen sizes. The component is designed primarily for mobile but scales appropriately.',
            },
        },
        viewport: {
            defaultViewport: 'tablet',
        },
    },
}
