import type { Meta, StoryObj } from '@storybook/react-vite'
import { ContinueButton } from './ContinueButton'

const meta = {
    title: 'Components/ContinueButton',
    component: ContinueButton,
    tags: ['autodocs'],
    args: {
        onNext: () => {},
    },
    parameters: {
        layout: 'padded',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: 448 }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof ContinueButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
