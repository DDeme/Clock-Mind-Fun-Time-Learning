import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { Layout } from '../../ui'

import { ContinueLearning } from './ContinueLearning'
import { LearningTopics } from './LearningTopics'
import { TopicsHeader } from './TopicsHeader'

export const Topics = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <Layout>
            <TopicsHeader
                userName="Alex"
                streak={7}
                stars={120}
            />

            <ContinueLearning
                lessonName={t('topics.digitalVsAnalog.title')}
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
