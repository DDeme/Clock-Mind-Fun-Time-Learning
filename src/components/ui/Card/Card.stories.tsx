import { Card } from './Card'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        border: {
            control: 'boolean',
        },
        padding: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
        },
        rounded: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
        },
        shadow: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'],
        },
    },
    args: {
        children: 'Card Content',
    },
    component: Card,
    tags: ['autodocs'],
    title: 'UI/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: (
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Standard Card</h3>
                <p className="text-slate-600">
                    This is a standard card with default settings.
                </p>
            </div>
        ),
    },
}

export const Shadows: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-2 gap-8 p-4">
            <Card shadow="none">
                <p className="text-center font-medium">None</p>
            </Card>
            <Card shadow="sm">
                <p className="text-center font-medium">Small (Default)</p>
            </Card>
            <Card shadow="md">
                <p className="text-center font-medium">Medium</p>
            </Card>
            <Card shadow="lg">
                <p className="text-center font-medium">Large</p>
            </Card>
            <Card shadow="xl">
                <p className="text-center font-medium">Extra Large</p>
            </Card>
            <Card shadow="2xl">
                <p className="text-center font-medium">2X Large</p>
            </Card>
            <Card shadow="inner">
                <p className="text-center font-medium">Inner Shadow</p>
            </Card>
        </div>
    ),
}

export const Rounded: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-2 gap-8 p-4">
            <Card rounded="none">
                <p className="text-center font-medium">None</p>
            </Card>
            <Card rounded="md">
                <p className="text-center font-medium">Medium</p>
            </Card>
            <Card rounded="xl">
                <p className="text-center font-medium">Extra Large</p>
            </Card>
            <Card rounded="2xl">
                <p className="text-center font-medium">2X Large (Default)</p>
            </Card>
            <Card rounded="3xl">
                <p className="text-center font-medium">3X Large</p>
            </Card>
            <Card rounded="full">
                <p className="text-center font-medium text-nowrap">
                    Full (Pill)
                </p>
            </Card>
        </div>
    ),
}

export const Padding: Story = {
    args: {},
    render: () => (
        <div className="flex flex-col gap-8 p-4">
            <Card padding="none">
                <div className="bg-slate-100 p-2 text-center">Padding None</div>
            </Card>
            <Card padding="xs">
                <div className="bg-slate-100 text-center">
                    Padding Extra Small
                </div>
            </Card>
            <Card padding="sm">
                <div className="bg-slate-100 text-center">Padding Small</div>
            </Card>
            <Card padding="md">
                <div className="bg-slate-100 text-center">
                    Padding Medium (Default)
                </div>
            </Card>
            <Card padding="lg">
                <div className="bg-slate-100 text-center">Padding Large</div>
            </Card>
            <Card padding="xl">
                <div className="bg-slate-100 text-center">
                    Padding Extra Large
                </div>
            </Card>
        </div>
    ),
}
