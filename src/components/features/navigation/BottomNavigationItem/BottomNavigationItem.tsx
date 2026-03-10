import type { LucideIcon } from 'lucide-react'

export interface BottomNavigationItemProps {
    icon: LucideIcon
    label: string
    ariaLabel: string
    isActive?: boolean
    onClick?: () => void
}

export const BottomNavigationItem = ({
    icon: Icon,
    label,
    ariaLabel,
    isActive = false,
    onClick,
}: BottomNavigationItemProps) => {
    return (
        <button
            aria-label={ariaLabel}
            className={`flex flex-1 flex-col items-center gap-1 transition-colors ${
                isActive
                    ? 'text-blue-600'
                    : 'text-slate-500 hover:text-blue-600'
            }`}
            onClick={onClick}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isActive ? 'bg-blue-500/10' : ''
                }`}
            >
                <Icon className={`size-5 ${isActive ? 'fill-blue-500' : ''}`} />
            </div>
            <span className="text-[10px] font-bold tracking-tight uppercase">
                {label}
            </span>
        </button>
    )
}
