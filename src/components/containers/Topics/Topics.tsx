import { useNavigate } from 'react-router'

import { Layout } from '../../ui'

import { ContinueLearning } from './ContinueLearning'
import { LearningTopics } from './LearningTopics'
import { TopicsHeader } from './TopicsHeader'

export const Topics = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <TopicsHeader
                userName="Time Traveler"
                streak={7}
                stars={120}
            />

            <ContinueLearning
                lessonName="Half Past the Hour"
                lessonProgress={4}
                lessonTotal={10}
                onAction={() => navigate('/game/math')}
            />

            <LearningTopics
                onSeeAll={() => console.log('See All')}
                onTopicStart={(topicId) => navigate(`/game/${topicId}`)}
            />
        </Layout>
    )
}
