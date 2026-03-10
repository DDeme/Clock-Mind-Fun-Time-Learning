import { GameSkeleton } from '../components/containers/Game/Game.skeleton'
import { LessonProgress } from '../components/containers/LessonProgress'
import { useLessonData } from '../hooks/useLessonData'

const LessonPage = () => {
    const { data, isLoading, isSuccess } = useLessonData('1')

    return (
        <>
            {isLoading && <GameSkeleton />}
            {isSuccess && data && <LessonProgress lessons={data} />}
        </>
    )
}
export default LessonPage
