import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn, within, userEvent, expect } from 'storybook/test'
import { SingleChoice } from './SingleChoice'

const meta = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
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
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        value: null,
    },
}

export const WithSelection: Story = {
    args: {
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        value: { hours: 3, minutes: 45 },
    },
}

export const TwoOptions: Story = {
    args: {
        options: [
            { hours: 6, minutes: 0 },
            { hours: 12, minutes: 0 },
        ],
        value: null,
    },
}

export const ClickOption: Story = {
    args: {
        options: [
            { hours: 3, minutes: 45 },
            { hours: 6, minutes: 30 },
            { hours: 9, minutes: 15 },
            { hours: 12, minutes: 0 },
        ],
        value: null,
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const option = canvas.getByText('6:30')
        await userEvent.click(option)
        await expect(args.onChange).toHaveBeenCalledWith({
            hours: 6,
            minutes: 30,
        })
    },
}
