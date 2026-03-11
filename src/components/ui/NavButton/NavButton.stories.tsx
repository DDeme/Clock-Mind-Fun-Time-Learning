import { NavButton } from './NavButton'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof NavButton> = {
    argTypes: {
        active: {
            control: 'boolean',
        },
        fill: {
            control: 'boolean',
        },
        icon: {
            control: 'text',
        },
        label: {
            control: 'text',
        },
    },
    component: NavButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'UI/NavButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        active: false,
        icon: 'home',
        label: 'Home',
    },
}

export const Active: Story = {
    args: {
        active: true,
        icon: 'home',
        label: 'Home',
    },
}

export const Filled: Story = {
    args: {
        active: true,
        fill: true,
        icon: 'home',
        label: 'Home',
    },
}

export const NavigationGroup: Story = {
    render: () => (
        <div className="flex gap-8 rounded-lg bg-white p-4 shadow-sm">
            <NavButton
                active={true}
                icon="home"
                label="Home"
            />
            <NavButton
                active={false}
                icon="school"
                label="Learn"
            />
            <NavButton
                active={false}
                icon="person"
                label="Profile"
            />
            <NavButton
                active={false}
                icon="settings"
                label="Settings"
            />
        </div>
    ),
}

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-4 text-sm font-medium text-slate-600">
                    Inactive State
                </h3>
                <div className="flex gap-8 rounded-lg bg-white p-4 shadow-sm">
                    <NavButton
                        active={false}
                        icon="home"
                        label="Home"
                    />
                    <NavButton
                        active={false}
                        icon="school"
                        label="Learn"
                    />
                    <NavButton
                        active={false}
                        fill={true}
                        icon="person"
                        label="Profile"
                    />
                </div>
            </div>

            <div>
                <h3 className="mb-4 text-sm font-medium text-slate-600">
                    Active State
                </h3>
                <div className="flex gap-8 rounded-lg bg-white p-4 shadow-sm">
                    <NavButton
                        active={true}
                        icon="home"
                        label="Home"
                    />
                    <NavButton
                        active={true}
                        icon="school"
                        label="Learn"
                    />
                    <NavButton
                        active={true}
                        fill={true}
                        icon="person"
                        label="Profile"
                    />
                </div>
            </div>
        </div>
    ),
}
