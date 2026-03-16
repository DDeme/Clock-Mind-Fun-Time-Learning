import { clsx, type ClassValue } from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export type CardPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type CardShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner'
export type CardRounded =
    | 'none'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'full'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    padding?: CardPadding
    shadow?: CardShadow
    rounded?: CardRounded
    border?: boolean
    children: React.ReactNode
    as?: React.ElementType
    // Allow common button/input attributes even if not specifically button
    disabled?: boolean
    type?: string
}

const paddingStyles: Record<CardPadding, string> = {
    lg: 'p-6',
    md: 'p-4',
    none: 'p-0',
    sm: 'p-3',
    xl: 'p-8',
    xs: 'p-2',
}

const shadowStyles: Record<CardShadow, string> = {
    '2xl': 'shadow-2xl',
    inner: 'shadow-inner',
    lg: 'shadow-lg',
    md: 'shadow-md',
    none: 'shadow-none',
    sm: 'shadow-sm',
    xl: 'shadow-xl',
}

const roundedStyles: Record<CardRounded, string> = {
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
    lg: 'rounded-lg',
    md: 'rounded-md',
    none: 'rounded-none',
    sm: 'rounded-sm',
    xl: 'rounded-xl',
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
    (
        {
            padding = 'md',
            shadow = 'sm',
            rounded = '2xl',
            border = true,
            as: Component = 'div',
            className,
            children,
            ...props
        },
        ref,
    ) => {
        return (
            <Component
                ref={ref}
                className={cn(
                    'bg-white',
                    paddingStyles[padding],
                    shadowStyles[shadow],
                    roundedStyles[rounded],
                    border && 'border border-slate-100',
                    className,
                )}
                {...props}
            >
                {children}
            </Component>
        )
    },
)

Card.displayName = 'Card'
