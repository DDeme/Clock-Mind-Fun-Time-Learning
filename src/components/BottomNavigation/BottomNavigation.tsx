import { Home, ClipboardCheck, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'

import { BottomNavigationItem } from '../BottomNavigationItem/BottomNavigationItem'

export const BottomNavigation = () => {
    const location = useLocation()
    const navigation = useNavigate()
    const { t } = useTranslation()

    const items = [
        {
            ariaLabel: 'Go to home',
            icon: Home,
            label: t('navigation.home'),
            to: '/timeline',
        },
        {
            ariaLabel: 'Game',
            icon: ClipboardCheck,
            label: t('navigation.game'),
            to: '/game',
        },
        {
            ariaLabel: 'Settings',
            icon: User,
            label: t('navigation.settings'),
            to: '/settings',
        },
    ]

    return (
        <nav
            role="navigation"
            aria-label={t('navigation.main')}
            className="sticky bottom-0 z-30 w-full border-t border-slate-200 bg-white/95 px-6 pt-4 pb-8 backdrop-blur-lg"
        >
            <div className="flex items-center justify-between gap-2">
                {items.map((item) => (
                    <BottomNavigationItem
                        key={item.to}
                        icon={item.icon}
                        label={item.label}
                        ariaLabel={item.ariaLabel}
                        isActive={location.pathname === item.to}
                        onClick={() => navigation(item.to)}
                    />
                ))}
            </div>
        </nav>
    )
}
