import React from 'react'

export type TypographyVariant =
    | 'display'
    | 'h1'
    | 'h1-sm'
    | 'h2'
    | 'h2-hero'
    | 'h3'
    | 'h3-sm'
    | 'h4'
    | 'body-lg'
    | 'body'
    | 'body-bold'
    | 'body-strong'
    | 'caption'
    | 'caption-bold'
    | 'label'
    | 'overline'
    | 'score'
    | 'clock-display'

export type TypographyColor =
    | 'default'
    | 'primary'
    | 'accent'
    | 'accent-dark'
    | 'heading'
    | 'dark'
    | 'muted'
    | 'subtle'
    | 'faint'
    | 'white'

type TypographyProps<T extends React.ElementType = React.ElementType> = {
    variant: TypographyVariant
    color?: TypographyColor
    as?: T
    className?: string
    children?: React.ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, 'color' | 'className' | 'children'>

const variantMap: Record<
    TypographyVariant,
    { classes: string; defaultTag: React.ElementType }
> = {
    body: { classes: 'text-sm font-medium', defaultTag: 'p' },
    'body-bold': { classes: 'text-sm font-semibold', defaultTag: 'p' },
    'body-lg': { classes: 'text-lg', defaultTag: 'p' },
    'body-strong': { classes: 'text-lg font-black', defaultTag: 'p' },
    caption: { classes: 'text-xs', defaultTag: 'span' },
    'caption-bold': { classes: 'text-xs font-bold', defaultTag: 'span' },
    'clock-display': {
        classes: 'text-7xl font-extrabold tracking-tighter',
        defaultTag: 'span',
    },
    display: { classes: 'text-4xl font-extrabold', defaultTag: 'h1' },
    h1: { classes: 'text-3xl font-extrabold tracking-tight', defaultTag: 'h1' },
    'h1-sm': {
        classes: 'text-2xl font-bold tracking-tight',
        defaultTag: 'h1',
    },
    h2: { classes: 'text-xl font-bold', defaultTag: 'h2' },
    'h2-hero': {
        classes: 'text-xl font-extrabold tracking-tight',
        defaultTag: 'h2',
    },
    h3: { classes: 'text-lg font-bold', defaultTag: 'h3' },
    'h3-sm': { classes: 'text-lg font-semibold', defaultTag: 'h3' },
    h4: { classes: 'text-sm font-bold', defaultTag: 'h4' },
    label: {
        classes: 'text-xs font-bold tracking-widest uppercase',
        defaultTag: 'span',
    },
    overline: {
        classes: 'text-xs font-semibold tracking-wider uppercase',
        defaultTag: 'span',
    },
    score: { classes: 'text-2xl font-bold', defaultTag: 'span' },
}

const colorMap: Record<TypographyColor, string> = {
    accent: 'text-blue-700',
    'accent-dark': 'text-blue-800',
    dark: 'text-slate-900',
    default: '',
    faint: 'text-slate-400',
    heading: 'text-slate-800',
    muted: 'text-slate-600',
    primary: 'text-blue-600',
    subtle: 'text-slate-500',
    white: 'text-white',
}

export const Typography = <T extends React.ElementType = React.ElementType>({
    variant,
    color = 'default',
    as,
    className,
    children,
    ...rest
}: TypographyProps<T>) => {
    const { classes, defaultTag } = variantMap[variant]
    const colorClass = colorMap[color]
    const Tag = (as ?? defaultTag) as React.ElementType

    const composedClass = [classes, colorClass, className]
        .filter(Boolean)
        .join(' ')

    return (
        <Tag
            className={composedClass}
            {...rest}
        >
            {children}
        </Tag>
    )
}
