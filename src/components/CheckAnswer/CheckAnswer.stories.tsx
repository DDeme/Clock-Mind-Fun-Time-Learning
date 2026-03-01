import type { Meta, StoryObj } from '@storybook/react-vite'
import { CheckAnswer } from './CheckAnswer'

const meta = {
    args: {
        onCheckAnswer: () => {},
    },
    component: CheckAnswer,
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
    title: 'Components/CheckAnswer',
} satisfies Meta<typeof CheckAnswer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        isDisabled: false,
    },
}

export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
}
