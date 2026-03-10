import { Clock, PieChart, ArrowLeftRight, Medal } from 'lucide-react'
import { fn } from 'storybook/test'

import { TopicCard } from './TopicCard'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: ['Clock', 'PieChart', 'ArrowLeftRight', 'Medal'],
        },
    },
    component: TopicCard,
    decorators: [
        (Story) => (
            <div className="w-[200px]">
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Topics/TopicCard',
} satisfies Meta<typeof TopicCard>

export default meta
type Story = StoryObj<typeof meta>

export const Basics: Story = {
    args: {
        icon: Clock,
        iconBgColor: 'bg-emerald-100',
        iconTextColor: 'text-emerald-600',
        onStart: fn(),
        rating: '4.9',
        reviews: '2k+',
        title: 'The Basics',
    },
}

export const Quarter: Story = {
    args: {
        icon: PieChart,
        iconBgColor: 'bg-orange-100',
        iconTextColor: 'text-orange-600',
        onStart: fn(),
        rating: '4.8',
        reviews: '1k+',
        title: 'Quarter To & Past',
    },
}

export const Digital: Story = {
    args: {
        icon: ArrowLeftRight,
        iconBgColor: 'bg-purple-100',
        iconTextColor: 'text-purple-600',
        onStart: fn(),
        rating: '4.7',
        reviews: '800',
        title: 'Digital vs Analog',
    },
}

export const Military: Story = {
    args: {
        icon: Medal,
        iconBgColor: 'bg-pink-100',
        iconTextColor: 'text-pink-600',
        onStart: fn(),
        rating: '4.9',
        reviews: '500',
        title: 'Military Time',
    },
}
