import { createBrowserRouter } from 'react-router'

import { GamePage } from '../pages/Game'
import { GameResults } from '../pages/GameResults'
import { IntroPage } from '../pages/Intro'
import { SettingsPage } from '../pages/Settings'
import { TimelinePage } from '../pages/Timeline'

export const router = createBrowserRouter([
    {
        element: <IntroPage />,
        path: '/',
    },
    {
        element: <GamePage />,
        path: '/game',
    },
    {
        element: <SettingsPage />,
        path: '/settings',
    },
    {
        element: <TimelinePage />,
        path: '/timeline',
    },
    {
        element: <GameResults />,
        path: '/results',
    },
])
