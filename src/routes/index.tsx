import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router'

import { Loading } from '../components/Loading/Loading'

const GamePage = lazy(() => import('../pages/Game'))
const LessonPage = lazy(() => import('../pages/Lesson'))
const GameResults = lazy(() => import('../pages/GameResults'))
const IntroPage = lazy(() => import('../pages/Intro'))
const SettingsPage = lazy(() => import('../pages/Settings'))
const TopicsPage = lazy(() => import('../pages/Topics'))

export const router = createBrowserRouter([
    {
        element: (
            <Suspense fallback={<Loading />}>
                <IntroPage />
            </Suspense>
        ),
        path: '/',
    },
    {
        element: (
            <Suspense fallback={<Loading />}>
                <TopicsPage />
            </Suspense>
        ),
        path: '/topics',
    },
    {
        element: (
            <Suspense fallback={<Loading />}>
                <GamePage />
            </Suspense>
        ),
        path: '/game/:id',
    },
    {
        element: (
            <Suspense fallback={<Loading />}>
                <SettingsPage />
            </Suspense>
        ),
        path: '/settings',
    },
    {
        element: (
            <Suspense fallback={<Loading />}>
                <LessonPage />
            </Suspense>
        ),
        path: '/lesson',
    },
    {
        element: (
            <Suspense fallback={<Loading />}>
                <GameResults />
            </Suspense>
        ),
        path: '/results',
    },
])
