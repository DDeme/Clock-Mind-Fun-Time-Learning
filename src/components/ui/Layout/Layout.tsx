import { BottomNavigation } from '../../features/navigation/BottomNavigation'

import type { PropsWithChildren } from 'react'

interface LayoutProps {
    hideNavigation?: boolean
    'data-testid'?: string
}

export const Layout = ({
    children,
    hideNavigation = false,
    'data-testid': dataTestId,
}: PropsWithChildren<LayoutProps>) => {
    return (
        <div
            className="bg-background-light relative mx-auto flex min-h-screen max-w-md flex-col"
            data-testid={dataTestId}
        >
            {children}
            {hideNavigation ? null : <BottomNavigation />}
        </div>
    )
}
