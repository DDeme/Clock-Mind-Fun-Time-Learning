import { ContinueLearning } from './ContinueLearning'
import { LearningTopics } from './LearningTopics'
import { TopicsHeader } from './TopicsHeader'

export const Topics = () => {
    return (
        <div className="flex min-h-screen justify-center bg-slate-100">
            <div className="relative flex min-h-screen w-full max-w-[430px] flex-col overflow-hidden bg-gradient-to-b from-sky-100 to-white pb-24 shadow-xl">
                <TopicsHeader
                    userName="Time Traveler"
                    streak={7}
                    stars={120}
                />

                <ContinueLearning
                    lessonName="Half Past the Hour"
                    lessonProgress={4}
                    lessonTotal={10}
                    onAction={() => console.log('Resume Lesson')}
                />

                <LearningTopics
                    onSeeAll={() => console.log('See All')}
                    onTopicStart={(topicId) =>
                        console.log('Start Topic:', topicId)
                    }
                />
            </div>
        </div>
    )
}
