import { Layout } from '../Layout'
import { PlayButton } from '../PlayButton'
import { ProgressHeader } from '../ProgressHeader/ProgressHeader'
import { TimelineContent } from '../TimelineContent/TimelineContent'

interface Lesson {
    id: number
    title: string
    status: 'completed' | 'active' | 'locked'
    position: 'left' | 'right'
    progress?: number
}

interface TimelineProgressProps {
    lessons?: Lesson[]
}

const exampleLessons: Lesson[] = [
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

export const TimelineProgress = ({
    lessons = exampleLessons,
}: TimelineProgressProps) => {
    return (
        <Layout>
            <ProgressHeader
                title="Clock Master"
                level="Level 2: The Hour Hand"
                currentLessons={3}
                totalLessons={10}
            />

            <TimelineContent lessons={lessons} />

            <PlayButton />
        </Layout>
    )
}
