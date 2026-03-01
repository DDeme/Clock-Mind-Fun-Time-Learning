import { createBrowserRouter } from 'react-router-dom'
import { IntroPage } from '../pages/Intro'
import { GamePage } from '../pages/Game'
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
