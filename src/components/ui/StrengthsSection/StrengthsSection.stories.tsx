import { StrengthsSection } from './StrengthsSection'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof StrengthsSection> = {
    component: StrengthsSection,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/StrengthsSection',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        strengths: [
            {
                bgColor: 'bg-amber-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-amber-500/20 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'hour',
                title: 'Hour Hand Expert',
            },
            {
                bgColor: 'bg-blue-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-blue-500/20 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'minute',
                title: 'Minute Master',
            },
            {
                bgColor: 'bg-green-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-green-500/20 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'digital',
                title: 'Digital Time Pro',
            },
            {
                bgColor: 'bg-purple-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-purple-500/20 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'speed',
                title: 'Quick Reader',
            },
            {
                bgColor: 'bg-pink-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-pink-500/20 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'passion',
                title: 'Time Enthusiast',
            },
        ],
    },
}

export const Minimal: Story = {
    args: {
        strengths: [
            {
                bgColor: 'bg-amber-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-amber-500/20 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'hour',
                title: 'Hour Hand',
            },
            {
                bgColor: 'bg-blue-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-blue-500/20 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'minute',
                title: 'Minutes',
            },
        ],
    },
}

export const LongTitles: Story = {
    args: {
        strengths: [
            {
                bgColor: 'bg-amber-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-amber-500/20 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'hour',
                title: 'Expert Hour Hand Reading',
            },
            {
                bgColor: 'bg-blue-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-blue-500/20 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'minute',
                title: 'Advanced Minute Recognition',
            },
            {
                bgColor: 'bg-green-50',
                icon: (
                    <svg
                        className="h-8 w-8 fill-green-500/20 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                ),
                id: 'digital',
                title: 'Digital Clock Mastery',
            },
        ],
    },
}