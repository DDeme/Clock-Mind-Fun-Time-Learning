import React, { type PropsWithChildren } from 'react'

export const ActionFooter: React.FC<PropsWithChildren> = ({ children }) => (
    <footer className="z-20 flex w-full flex-col gap-4 border-t border-slate-100 bg-white">
        {children}
    </footer>
)