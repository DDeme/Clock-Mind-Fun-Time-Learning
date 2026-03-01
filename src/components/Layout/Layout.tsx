import type { PropsWithChildren } from 'react'
import { BottomNavigation } from '../BottomNavigation'

interface LayoutProps {
    hideNavigation?: boolean
}

export const Layout = ({
    children,
    hideNavigation = false,
}: PropsWithChildren<LayoutProps>) => {
    return (
        <div className="bg-background-light relative mx-auto flex min-h-screen max-w-md flex-col overflow-hidden p-6">
            {children}
            {hideNavigation ? null : <BottomNavigation />}
        </div>
    )
}
