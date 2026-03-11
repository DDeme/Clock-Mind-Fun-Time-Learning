import { TopicsHeader } from './TopicsHeader'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: TopicsHeader,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Containers/Topics/TopicsHeader',
} satisfies Meta<typeof TopicsHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        stars: 120,
        streak: 7,
        userName: 'Time Traveler',
    },
}

export const NewUser: Story = {
    args: {
        stars: 0,
        streak: 0,
        userName: 'Newbie',
    },
}
