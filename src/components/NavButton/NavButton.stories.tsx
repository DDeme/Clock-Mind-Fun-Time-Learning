import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavButton } from './NavButton'

const meta = {
    argTypes: {
        active: {
            control: 'boolean',
            description: 'Whether the button is in active state',
        },
        fill: {
            control: 'boolean',
            description: 'Whether to use the filled icon variant',
        },
        icon: {
            control: 'text',
            description: 'Material Symbols icon name',
        },
        label: {
            control: 'text',
            description: 'Button label text',
        },
    },
    component: NavButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    title: 'Components/NavButton',
} satisfies Meta<typeof NavButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        active: false,
        icon: 'menu_book',
        label: 'LEARN',
    },
}

export const Active: Story = {
    args: {
        active: true,
        fill: true,
        icon: 'videogame_asset',
        label: 'PLAY',
    },
}

export const Inactive: Story = {
    args: {
        active: false,
        icon: 'emoji_events',
        label: 'AWARDS',
    },
}

export const Profile: Story = {
    args: {
        active: false,
        icon: 'person',
        label: 'PROFILE',
    },
}

export const ActiveWithoutFill: Story = {
    args: {
        active: true,
        fill: false,
        icon: 'menu_book',
        label: 'LEARN',
    },
}

export const AllNavButtons: Story = {
    args: {
        active: false,
        icon: 'menu_book',
        label: 'LEARN',
    },
    render: () => (
        <nav className="flex items-center justify-around gap-8 border-t border-slate-100 bg-white px-6 pt-3 pb-8">
            <NavButton
                icon="menu_book"
                label="LEARN"
                active={false}
            />
            <NavButton
                icon="videogame_asset"
                label="PLAY"
                active={true}
                fill={true}
            />
            <NavButton
                icon="emoji_events"
                label="AWARDS"
                active={false}
            />
            <NavButton
                icon="person"
                label="PROFILE"
                active={false}
            />
        </nav>
    ),
}
