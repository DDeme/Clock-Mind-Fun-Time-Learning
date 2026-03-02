import { Medal, Sparkles, Zap } from 'lucide-react'

import { StrengthsSection } from './StrengthsSection'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: StrengthsSection,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/StrengthsSection',
} satisfies Meta<typeof StrengthsSection>

export default meta
type Story = StoryObj<typeof meta>

const defaultStrengths = [
    {
        bgColor: 'bg-amber-50',
        icon: <Medal className="h-8 w-8 fill-amber-500/20 text-amber-500" />,
        id: 'hour',
        title: 'Hour Hand Expert',
    },
    {
        bgColor: 'bg-blue-50',
        icon: <Sparkles className="h-8 w-8 fill-blue-500/20 text-blue-500" />,
        id: 'minute',
        title: 'Minute Master',
    },
    {
        bgColor: 'bg-emerald-50',
        icon: <Zap className="h-8 w-8 fill-emerald-500/20 text-emerald-500" />,
        id: 'quick',
        title: 'Quick Thinker',
    },
]

export const Default: Story = {
    args: {
        strengths: defaultStrengths,
    },
}

export const SingleStrength: Story = {
    args: {
        strengths: [defaultStrengths[0]],
    },
}

export const ManyStrengths: Story = {
    args: {
        strengths: [
            ...defaultStrengths,
            {
                bgColor: 'bg-purple-50',
                icon: <Medal className="h-8 w-8 fill-purple-500/20 text-purple-500" />,
                id: 'accuracy',
                title: 'Accuracy Pro',
            },
            {
                bgColor: 'bg-rose-50',
                icon: <Sparkles className="h-8 w-8 fill-rose-500/20 text-rose-500" />,
                id: 'consistent',
                title: 'Consistent Player',
            },
            {
                bgColor: 'bg-indigo-50',
                icon: <Zap className="h-8 w-8 fill-indigo-500/20 text-indigo-500" />,
                id: 'focused',
                title: 'Focused Mind',
            },
        ],
    },
}

export const EmptyStrengths: Story = {
    args: {
        strengths: [],
    },
}
