import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton, SkeletonLoader, AnimatedSkeletonIcon } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
    argTypes: {
        animate: {
            control: 'boolean',
        },
        height: {
            control: 'text',
        },
        variant: {
            control: 'select',
            options: ['circle', 'square', 'text'],
        },
        width: {
            control: 'text',
        },
    },
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/Skeleton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Square: Story = {
    args: {
        height: 100,
        variant: 'square',
        width: 100,
    },
}

export const Circle: Story = {
    args: {
        height: 80,
        variant: 'circle',
        width: 80,
    },
}

export const Text: Story = {
    args: {
        variant: 'text',
        width: '200px',
    },
}

export const Static: Story = {
    args: {
        animate: false,
        height: 120,
        variant: 'square',
        width: 120,
    },
}

export const CustomSize: Story = {
    args: {
        height: 60,
        variant: 'circle',
        width: 60,
    },
}

export const SkeletonLoaderStory: Story = {
    name: 'Skeleton Loader',
    render: () => (
        <div className="w-96 rounded-lg border p-4">
            <SkeletonLoader isLoading={true} />
        </div>
    ),
}

export const AnimatedIconCircle: Story = {
    name: 'Animated Circle Icon',
    render: () => (
        <div className="flex items-center space-x-4">
            <AnimatedSkeletonIcon
                type="circle"
                size={32}
            />
            <AnimatedSkeletonIcon
                type="circle"
                size={24}
            />
            <AnimatedSkeletonIcon
                type="circle"
                size={16}
            />
        </div>
    ),
}

export const AnimatedIconSquare: Story = {
    name: 'Animated Square Icon',
    render: () => (
        <div className="flex items-center space-x-4">
            <AnimatedSkeletonIcon
                type="square"
                size={32}
            />
            <AnimatedSkeletonIcon
                type="square"
                size={24}
            />
            <AnimatedSkeletonIcon
                type="square"
                size={16}
            />
        </div>
    ),
}

export const CustomColor: Story = {
    name: 'Custom Colors',
    render: () => (
        <div className="flex items-center space-x-4">
            <AnimatedSkeletonIcon
                type="circle"
                size={32}
                color="#3B82F6"
            />
            <AnimatedSkeletonIcon
                type="square"
                size={32}
                color="#10B981"
            />
            <AnimatedSkeletonIcon
                type="circle"
                size={32}
                color="#F59E0B"
            />
        </div>
    ),
}

export const CardSkeleton: Story = {
    name: 'Card Skeleton',
    render: () => (
        <div className="w-80 rounded-lg border p-4 shadow-sm">
            <div className="mb-4 flex items-start space-x-3">
                <Skeleton
                    variant="circle"
                    width={48}
                    height={48}
                />
                <div className="flex-1 space-y-2">
                    <Skeleton
                        variant="text"
                        width="70%"
                    />
                    <Skeleton
                        variant="text"
                        width="50%"
                    />
                </div>
            </div>
            <Skeleton
                variant="square"
                height={120}
                className="mb-3"
            />
            <div className="space-y-2">
                <Skeleton variant="text" />
                <Skeleton
                    variant="text"
                    width="85%"
                />
                <Skeleton
                    variant="text"
                    width="60%"
                />
            </div>
        </div>
    ),
}

export const ListSkeleton: Story = {
    name: 'List Skeleton',
    render: () => (
        <div className="w-80 space-y-3">
            {[1, 2, 3, 4].map((item) => (
                <div
                    key={item}
                    className="flex items-center space-x-3 rounded border p-2"
                >
                    <Skeleton
                        variant="circle"
                        width={32}
                        height={32}
                    />
                    <div className="flex-1">
                        <Skeleton
                            variant="text"
                            width="60%"
                            className="mb-1"
                        />
                        <Skeleton
                            variant="text"
                            width="40%"
                        />
                    </div>
                </div>
            ))}
        </div>
    ),
}
