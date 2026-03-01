import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn, within, userEvent, expect } from 'storybook/test'
import { NumericAnswer } from './NumericAnswer'

const meta = {
    args: {
        isDisabled: false,
        onChange: fn(),
        options: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
        ],
        value: { hours: 0, minutes: 0 },
    },
    component: NumericAnswer,
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
    title: 'Components/NumericAnswer',
} satisfies Meta<typeof NumericAnswer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        value: { hours: 0, minutes: 0 },
    },
}

export const WithValues: Story = {
    args: {
        value: { hours: 3, minutes: 45 },
    },
}

export const Empty: Story = {
    args: {
        value: { hours: 0, minutes: 0 },
    },
}

export const SelectHour: Story = {
    args: {
        value: { hours: 0, minutes: 0 },
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const hourSelect = canvas.getByLabelText('Hours')
        await userEvent.selectOptions(hourSelect, '6')
        await expect(args.onChange).toHaveBeenCalledWith({
            hours: 6,
            minutes: 0,
        })
    },
}

export const SelectMinute: Story = {
    args: {
        value: { hours: 0, minutes: 0 },
    },
    play: async ({ canvasElement, args }) => {
        const canvas = within(canvasElement)
        const minuteSelect = canvas.getByLabelText('Minutes')
        await userEvent.selectOptions(minuteSelect, '30')
        await expect(args.onChange).toHaveBeenCalledWith({
            hours: 0,
            minutes: 30,
        })
    },
}

export const FullTime: Story = {
    args: {
        value: { hours: 12, minutes: 55 },
    },
}
