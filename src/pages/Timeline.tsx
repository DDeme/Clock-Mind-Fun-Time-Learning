import { GameSkeleton } from '../components/Game/Game.skeleton'
import { TimelineProgress } from '../components/TimelineProgress'
import { useLessonData } from '../hooks/useLessonData'

const TimelineProgressPage = () => {
    const { data, isLoading, isSuccess } = useLessonData('time-clock')

    return (
        <>
            {isLoading && <GameSkeleton />}
            {isSuccess && data && <TimelineProgress lessons={data} />}
        </>
    )
}
export default TimelineProgressPage
