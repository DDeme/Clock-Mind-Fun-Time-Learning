import { Home, User, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router'

import { Card } from '../../../ui'
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
            to: '/topics',
        },
        {
            ariaLabel: 'Current Lesson',
            icon: BookOpen,
            label: t('navigation.currentLesson'),
            to: '/lesson',
        },
        {
            ariaLabel: 'Settings',
            icon: User,
            label: t('navigation.settings'),
            to: '/settings',
        },
    ]

    return (
        <Card
            as="nav"
            role="navigation"
            aria-label={t('navigation.main')}
            rounded="none"
            shadow="none"
            padding="none"
            border={false}
            className="sticky bottom-0 z-30 w-full border-t border-slate-100 bg-white/95 px-6 py-3 backdrop-blur-lg"
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
        </Card>
    )
}
