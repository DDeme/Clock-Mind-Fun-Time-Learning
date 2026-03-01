import type { Meta, StoryObj } from '@storybook/react-vite'
import { MascotBubble } from './MascotBubble'

const meta = {
    argTypes: {
        message: {
            control: 'text',
            description: 'The message displayed in the speech bubble',
        },
    },
    component: MascotBubble,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/MascotBubble',
} satisfies Meta<typeof MascotBubble>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        message: 'Look at the clock! What time is it?',
    },
}

export const ShortMessage: Story = {
    args: {
        message: 'Great job!',
    },
}

export const LongMessage: Story = {
    args: {
        message:
            'Can you tell me what time the clock is showing? Take your time and look carefully at both the hour and minute hands!',
    },
}

export const Encouragement: Story = {
    args: {
        message: "You're doing amazing! Keep it up! 🌟",
    },
}
