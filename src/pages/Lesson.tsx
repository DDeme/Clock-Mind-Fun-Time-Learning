import { useParams } from 'react-router'

import { GameSkeleton } from '../components/containers/Game/Game.skeleton'
import { LessonProgress } from '../components/containers/LessonProgress'
import { useLessonData } from '../hooks/useLessonData'

const LessonPage = () => {
    const { id } = useParams<{ id: string }>()
    const { data, isLoading, isSuccess } = useLessonData(id || 'math')

    return (
        <>
            {isLoading && <GameSkeleton />}
            {isSuccess && data && <LessonProgress lessons={data} />}
        </>
    )
}
export default LessonPage
