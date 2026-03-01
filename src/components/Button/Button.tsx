import React from 'react'

type ButtonVariant = 'primary' | 'dark' | 'success' | 'warning' | 'error'

type ButtonProps = {
    children: React.ReactNode
    onClick: () => void
    disabled?: boolean
    variant?: ButtonVariant
}

const variantStyles: Record<
    ButtonVariant,
    { enabled: string; disabled: string }
> = {
    dark: {
        disabled: 'bg-slate-200 text-slate-400 cursor-not-allowed',
        enabled: 'bg-slate-900 text-white shadow-xl active:scale-95',
    },
    error: {
        disabled: 'bg-slate-200 text-slate-400 cursor-not-allowed',
        enabled:
            'bg-red-500 hover:bg-red-600 text-white shadow-red-500/30 active:translate-y-1 active:shadow-none shadow-lg',
    },
    primary: {
        disabled: 'bg-slate-200 text-slate-400 cursor-not-allowed',
        enabled:
            'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30 active:translate-y-1 active:shadow-none shadow-lg',
    },
    success: {
        disabled: 'bg-slate-200 text-slate-400 cursor-not-allowed',
        enabled:
            'bg-green-500 hover:bg-green-600 text-white shadow-green-500/30 active:translate-y-1 active:shadow-none shadow-lg',
    },
    warning: {
        disabled: 'bg-slate-200 text-slate-400 cursor-not-allowed',
        enabled:
            'bg-yellow-500 hover:bg-yellow-600 text-white shadow-yellow-500/30 active:translate-y-1 active:shadow-none shadow-lg',
    },
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = 'primary',
}) => {
    const styles = variantStyles[variant]

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-extrabold transition-all ${disabled ? styles.disabled : styles.enabled} `}
        >
            {children}
        </button>
    )
}
