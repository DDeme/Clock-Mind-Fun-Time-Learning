import { fn, within, userEvent, expect } from 'storybook/test'

import { SingleChoice } from './SingleChoice'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: ['3:45', '6:30', '9:15', '12:00'],
        value: null,
    },
    component: SingleChoice,
    decorators: [
        (Story) => (
            <div style={{ width: 400 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/SingleChoice',
} satisfies Meta<typeof SingleChoice>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        isDisabled: false,
        options: ['3:45', '6:30', '9:15', '12:00'],
        value: null,
    },
}

export const WithSelection: Story = {
    args: {
        options: ['3:45', '6:30', '9:15', '12:00'],
        value: '3:45',
    },
}

export const TwoOptions: Story = {
    args: {
        options: ['6:00', '12:00'],
        value: null,
    },
}

export const ClickOption: Story = {
    args: {
        options: ['3:45', '6:30', '9:15', '12:00'],
        value: null,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const option = canvas.getByText('6:30')
        await userEvent.click(option)
        await expect(args.onChange).toHaveBeenCalledWith('6:30')
    },
}

export const AccessibilityDemo: Story = {
    args: {
        isDisabled: false,
        options: ['3:45', '6:30', '9:15', '12:00'],
        value: '3:45',
    },
    parameters: {
        docs: {
            description: {
                story: 'SingleChoice component with proper ARIA attributes. Uses role="radiogroup", role="radio", aria-checked, and aria-label for screen reader compatibility. Supports keyboard navigation and focus management.',
            },
        },
    },
}
