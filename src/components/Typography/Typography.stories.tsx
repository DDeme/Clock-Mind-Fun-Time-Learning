import { Typography } from './Typography'

import type { TypographyColor, TypographyVariant } from './Typography'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    argTypes: {
        as: {
            control: { type: 'text' },
            description: 'Override the rendered HTML element',
        },
        color: {
            control: { type: 'select' },
            options: [
                'default',
                'primary',
                'accent',
                'accent-dark',
                'heading',
                'dark',
                'muted',
                'subtle',
                'faint',
                'white',
            ] satisfies TypographyColor[],
        },
        variant: {
            control: { type: 'select' },
            options: [
                'display',
                'h1',
                'h1-sm',
                'h2',
                'h2-hero',
                'h3',
                'h3-sm',
                'h4',
                'body-lg',
                'body',
                'body-bold',
                'body-strong',
                'caption',
                'caption-bold',
                'label',
                'overline',
                'score',
                'clock-display',
            ] satisfies TypographyVariant[],
        },
    },
    component: Typography,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        children: 'The quick brown fox jumps over the lazy dog',
        color: 'dark',
        variant: 'body',
    },
}

export const Display: Story = {
    args: {
        children: 'Learn to Read Clocks',
        color: 'primary',
        variant: 'display',
    },
}

export const H1: Story = {
    args: {
        children: 'Great Job, Alex!',
        color: 'white',
        variant: 'h1',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
}

export const H1Small: Story = {
    args: {
        children: 'Clock Reading',
        color: 'dark',
        variant: 'h1-sm',
    },
}

export const H2: Story = {
    args: {
        children: 'Clock Mastery',
        color: 'heading',
        variant: 'h2',
    },
}

export const H2Hero: Story = {
    args: {
        children: 'Digital Clock',
        color: 'heading',
        variant: 'h2-hero',
    },
}

export const H3: Story = {
    args: {
        children: 'Continue Learning',
        color: 'heading',
        variant: 'h3',
    },
}

export const H3Small: Story = {
    args: {
        children: 'Language Settings',
        color: 'dark',
        variant: 'h3-sm',
    },
}

export const H4: Story = {
    args: {
        children: 'The Basics',
        color: 'dark',
        variant: 'h4',
    },
}

export const BodyLarge: Story = {
    args: {
        children:
            'Master the art of telling time with our fun, interactive lessons designed for kids.',
        color: 'muted',
        variant: 'body-lg',
    },
}

export const Body: Story = {
    args: {
        children: 'Lesson 4 of 10',
        color: 'subtle',
        variant: 'body',
    },
}

export const BodyBold: Story = {
    args: {
        children: 'Half Past the Hour',
        color: 'muted',
        variant: 'body-bold',
    },
}

export const BodyStrong: Story = {
    args: {
        children: 'Correct!',
        color: 'white',
        variant: 'body-strong',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
}

export const Caption: Story = {
    args: {
        children: 'Stars: 8/10',
        color: 'subtle',
        variant: 'caption',
    },
}

export const CaptionBold: Story = {
    args: {
        children: '4.9 (2k+)',
        color: 'faint',
        variant: 'caption-bold',
    },
}

export const Label: Story = {
    args: {
        children: 'Digital Time',
        color: 'accent-dark',
        variant: 'label',
    },
}

export const Overline: Story = {
    args: {
        children: 'Ready to learn?',
        color: 'subtle',
        variant: 'overline',
    },
}

export const Score: Story = {
    args: {
        children: 'Stars: 7/10',
        color: 'accent',
        variant: 'score',
    },
}

export const ClockDisplay: Story = {
    args: {
        children: '3:30',
        color: 'accent-dark',
        variant: 'clock-display',
    },
}

export const ElementOverride: Story = {
    args: {
        as: 'p',
        children: 'Rendered as <p> but styled as h2',
        color: 'heading',
        variant: 'h2',
    },
}

export const CustomColorViaClassName: Story = {
    args: {
        children: 'Custom color via className',
        className: 'text-emerald-600',
        variant: 'h3',
    },
}

export const AllVariants: Story = {
    args: {
        children: '',
        variant: 'body',
    },
    render: () => (
        <div className="space-y-4 p-4">
            <Typography
                variant="display"
                color="primary"
            >
                display — Learn to Read Clocks
            </Typography>
            <Typography
                variant="h1"
                color="dark"
            >
                h1 — Great Job, Alex!
            </Typography>
            <Typography
                variant="h1-sm"
                color="dark"
            >
                h1-sm — Clock Reading
            </Typography>
            <Typography
                variant="h2"
                color="heading"
            >
                h2 — Clock Mastery
            </Typography>
            <Typography
                variant="h2-hero"
                color="heading"
            >
                h2-hero — Digital Clock
            </Typography>
            <Typography
                variant="h3"
                color="heading"
            >
                h3 — Continue Learning
            </Typography>
            <Typography
                variant="h3-sm"
                color="dark"
            >
                h3-sm — Language Settings
            </Typography>
            <Typography
                variant="h4"
                color="dark"
            >
                h4 — The Basics
            </Typography>
            <Typography
                variant="body-lg"
                color="muted"
            >
                body-lg — Master the art of telling time with our fun lessons.
            </Typography>
            <Typography
                variant="body"
                color="subtle"
            >
                body — Lesson 4 of 10
            </Typography>
            <Typography
                variant="body-bold"
                color="muted"
            >
                body-bold — Half Past the Hour
            </Typography>
            <Typography
                variant="body-strong"
                color="heading"
            >
                body-strong — Correct!
            </Typography>
            <Typography
                variant="caption"
                color="subtle"
            >
                caption — Stars: 8/10
            </Typography>
            <Typography
                variant="caption-bold"
                color="faint"
            >
                caption-bold — 4.9 (2k+)
            </Typography>
            <Typography
                variant="label"
                color="accent-dark"
            >
                label — Digital Time
            </Typography>
            <Typography
                variant="overline"
                color="subtle"
            >
                overline — Ready to learn?
            </Typography>
            <Typography
                variant="score"
                color="accent"
            >
                score — 7/10
            </Typography>
            <Typography
                variant="clock-display"
                color="accent-dark"
            >
                3:30
            </Typography>
        </div>
    ),
}
