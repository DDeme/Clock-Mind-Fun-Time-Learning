import { fn } from 'storybook/test'

import { LearningTopics } from './LearningTopics'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: LearningTopics,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    title: 'Containers/Topics/LearningTopics',
} satisfies Meta<typeof LearningTopics>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        onSeeAll: fn(),
        onTopicStart: fn(),
    },
}
