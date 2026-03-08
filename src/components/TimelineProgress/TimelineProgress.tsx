import { Layout } from '../Layout'
import { PlayButton } from '../PlayButton'
import { ProgressHeader } from '../ProgressHeader/ProgressHeader'
import { TimelineContent } from '../TimelineContent/TimelineContent'

export interface Lesson {
    id: number
    title: string
    status: 'completed' | 'active' | 'locked'
    position: 'left' | 'right'
    progress?: number
    games: string[]
}

export interface TimelineProgressProps {
    lessons: Lesson[]
}

export const TimelineProgress = ({ lessons }: TimelineProgressProps) => {
    const currentLesson = lessons.find((lesson) => lesson.status === 'active')
    const level = currentLesson ? lessons.indexOf(currentLesson) + 1 : 1

    return (
        <Layout>
            <ProgressHeader
                title="Clock Master"
                level={`Level ${level}: ${currentLesson?.title}`}
                currentLessons={
                    lessons.filter((lesson) => lesson.status === 'completed')
                        .length
                }
                totalLessons={lessons.length}
            />
            <TimelineContent lessons={lessons} />
            <PlayButton />
        </Layout>
    )
}
