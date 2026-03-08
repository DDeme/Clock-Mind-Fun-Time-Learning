import { ClipboardCheck, Home, Settings, User } from 'lucide-react'

import { BottomNavigationItem } from './BottomNavigationItem'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: BottomNavigationItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/BottomNavigationItem',
} satisfies Meta<typeof BottomNavigationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        ariaLabel: 'Go to home',
        icon: Home,
        label: 'Home',
    },
}

export const Active: Story = {
    args: {
        ariaLabel: 'Go to home',
        icon: Home,
        isActive: true,
        label: 'Home',
    },
}

export const WithSettingsIcon: Story = {
    args: {
        ariaLabel: 'Go to settings',
        icon: Settings,
        label: 'Settings',
    },
}

export const WithUserIcon: Story = {
    args: {
        ariaLabel: 'View profile',
        icon: User,
        label: 'Profile',
    },
}

export const WithQuizIcon: Story = {
    args: {
        ariaLabel: 'Take quiz',
        icon: ClipboardCheck,
        label: 'Quiz',
    },
}

export const ActiveSettings: Story = {
    args: {
        ariaLabel: 'Go to settings',
        icon: Settings,
        isActive: true,
        label: 'Settings',
    },
}

export const WithClickHandler: Story = {
    args: {
        ariaLabel: 'Go to home',
        icon: Home,
        label: 'Home',
        onClick: () => alert('Home clicked!'),
    },
}

export const AllStates: Story = {
    args: {
        ariaLabel: 'Go to home',
        icon: Home,
        label: 'Home',
    },
    render: (args) => (
        <div className="flex gap-4 p-4">
            <BottomNavigationItem
                {...args}
                isActive={true}
            />
            <BottomNavigationItem
                ariaLabel="Go to settings"
                icon={Settings}
                label="Settings"
            />
            <BottomNavigationItem
                ariaLabel="View profile"
                icon={User}
                label="Profile"
            />
            <BottomNavigationItem
                ariaLabel="Take quiz"
                icon={ClipboardCheck}
                label="Quiz"
            />
        </div>
    ),
}
