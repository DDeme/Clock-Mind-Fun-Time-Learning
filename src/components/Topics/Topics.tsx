import { Layout } from '../Layout'

import { ContinueLearning } from './ContinueLearning'
import { LearningTopics } from './LearningTopics'
import { TopicsHeader } from './TopicsHeader'

export const Topics = () => {
    return (
        <Layout>
            <div className="flex flex-1 flex-col bg-gradient-to-b from-sky-100 to-white pb-24">
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
        </Layout>
    )
}
