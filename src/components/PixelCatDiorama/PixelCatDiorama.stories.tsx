import { PixelCatDiorama } from './PixelCatDiorama'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        className: {
            control: { type: 'text' },
            description: 'Additional CSS classes for styling',
        },
        onMeow: {
            action: 'meow',
            description: 'Callback function when meow interaction occurs',
        },
    },
    component: PixelCatDiorama,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/PixelCatDiorama',
} satisfies Meta<typeof PixelCatDiorama>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}

export const WithCallback: Story = {
    args: {
        onMeow: () => console.log('Pixel cat wants to meow!'),
    },
}

export const CustomStyling: Story = {
    args: {
        className: 'border-4 border-blue-500 rounded-lg',
    },
}

export const Small: Story = {
    args: {
        className: 'max-w-[200px]',
    },
}

export const Large: Story = {
    args: {
        className: 'max-w-[600px]',
    },
}
