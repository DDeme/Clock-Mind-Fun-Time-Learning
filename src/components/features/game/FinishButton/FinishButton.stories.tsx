import { FinishButton } from './FinishButton'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof FinishButton> = {
    argTypes: {},
    component: FinishButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onClick: () => console.log('Finish clicked'),
    },
}
