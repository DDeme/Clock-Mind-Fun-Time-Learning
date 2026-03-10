import React from 'react'

type NavButtonProps = {
    icon: string
    label: string
    active: boolean
    fill?: boolean
}

export const NavButton: React.FC<NavButtonProps> = ({
    icon,
    label,
    active,
    fill,
}) => (
    <button
        className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-blue-600' : 'text-slate-600'}`}
    >
        <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: fill ? "'FILL' 1" : undefined }}
        >
            {icon}
        </span>
        <span className="text-[9px] font-black tracking-widest">{label}</span>
    </button>
)
