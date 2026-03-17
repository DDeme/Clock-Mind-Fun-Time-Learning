import { LessonContent } from '../../features/content/LessonContent/LessonContent'
import { PlayButton } from '../../features/game/PlayButton'
import { ProgressHeader } from '../../features/game/ProgressHeader/ProgressHeader'
import { Layout } from '../../ui'

export interface Lesson {
    id: number
    title: string
    status: 'completed' | 'active' | 'locked'
    position: 'left' | 'right'
    progress?: number
    games: string[]
}

export interface LessonProgressProps {
    lessons: Lesson[]
}

export const LessonProgress = ({ lessons }: LessonProgressProps) => {
    const currentLesson = lessons.find((lesson) => lesson.status === 'active')
    const level = currentLesson ? lessons.indexOf(currentLesson) + 1 : 1

    return (
        <Layout>
            <ProgressHeader
                title={currentLesson?.title || ''}
                level={`Level ${level}: ${currentLesson?.title || ''}`}
                currentLessons={
                    lessons.filter((lesson) => lesson.status === 'completed')
                        .length
                }
                totalLessons={lessons.length}
            />
            <LessonContent lessons={lessons} />
            <PlayButton />
        </Layout>
    )
}
