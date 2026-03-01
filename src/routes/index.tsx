import { createBrowserRouter } from 'react-router-dom'

import { GamePage } from '../pages/Game'
import { IntroPage } from '../pages/Intro'
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
        element: <TimelinePage />,
        path: '/timeline',
    },
])
