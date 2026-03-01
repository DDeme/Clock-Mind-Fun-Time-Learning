import { Play } from 'lucide-react'
import { ProgressHeader } from '../ProgressHeader/ProgressHeader'
import { TimelineContent } from '../TimelineContent/TimelineContent'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../Layout'

export const TimelineProgress = () => {
    const navigate = useNavigate()

    const lessons = [
        {
            id: 1,
            position: 'left' as const,
            status: 'completed' as const,
            title: 'Clock Face',
        },
        {
            id: 2,
            position: 'right' as const,
            progress: 43,
            status: 'active' as const,
            title: 'The Hour Hand',
        },
        {
            id: 3,
            position: 'left' as const,
            status: 'locked' as const,
            title: 'Minute Hand',
        },
        {
            id: 4,
            position: 'right' as const,
            status: 'locked' as const,
            title: 'Half Past & Quarter',
        },
        {
            id: 5,
            position: 'left' as const,
            status: 'locked' as const,
            title: 'Seconds',
        },
    ]

    return (
        <Layout>
            <ProgressHeader
                title="Clock Master"
                level="Level 2: The Hour Hand"
                currentLessons={3}
                totalLessons={10}
            />

            <TimelineContent lessons={lessons} />

            {/* Dynamic Floating Action Button */}
            <button
                aria-label="Start lesson"
                className="absolute right-6 bottom-28 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl transition-transform active:scale-95"
            >
                <Play
                    className="size-6 fill-white"
                    onClick={() => navigate('/game')}
                />
            </button>
        </Layout>
    )
}
