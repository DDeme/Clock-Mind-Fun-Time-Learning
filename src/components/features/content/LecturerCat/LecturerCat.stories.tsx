import { LecturerCat } from './LecturerCat'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: LecturerCat,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Components/LecturerCat',
} satisfies Meta<typeof LecturerCat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    render: () => <LecturerCat />,
}

export const Interactive: Story = {
    play: async ({ canvasElement }) => {
        const canvas = canvasElement.parentElement
        if (!canvas) return

        // Find the "SAY HI" button
        const sayHiButton = canvas.querySelector('button')
        if (sayHiButton) {
            // Click the button to trigger meow
            await sayHiButton.click()

            // Wait for the meow animation
            await new Promise((resolve) => setTimeout(resolve, 100))

            // Check if meow text appears
            const meowText = canvas.querySelector('.text-green-400')
            if (meowText) {
                console.log('✅ Meow animation triggered successfully')
            }
        }
    },
    render: () => <LecturerCat />,
}

export const WithCustomStyling: Story = {
    render: () => (
        <div className="bg-gray-100 p-8">
            <h2 className="mb-4 text-center text-gray-800">
                Custom Styled LecturerCat
            </h2>
            <LecturerCat />
        </div>
    ),
}
