import type { PropsWithChildren } from 'react'

type MainProps = {
    ariaLabel: string
}

export const Main = ({ children, ariaLabel }: PropsWithChildren<MainProps>) => {
    return (
        <main
            className="flex flex-1 flex-col items-center justify-between gap-3 overflow-y-auto p-6"
            role="main"
            aria-label={ariaLabel}
        >
            {children}
        </main>
    )
}