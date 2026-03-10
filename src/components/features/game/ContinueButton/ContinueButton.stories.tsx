import { ContinueButton } from './ContinueButton'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    args: {
        onNext: () => {},
    },
    component: ContinueButton,
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
    title: 'Components/ContinueButton',
} satisfies Meta<typeof ContinueButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
