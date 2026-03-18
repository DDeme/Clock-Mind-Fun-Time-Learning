import { Clock, PieChart, ArrowLeftRight, Medal } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { Typography } from '../../ui'

import { TopicCard } from './TopicCard'

interface LearningTopicsProps {
    onSeeAll?: () => void
    onTopicStart?: (topicId: string) => void
}

export const LearningTopics: React.FC<LearningTopicsProps> = ({
    onSeeAll,
    onTopicStart,
}) => {
    const { t } = useTranslation()

    const TOPICS_DATA = [
        {
            color: 'text-emerald-600',
            icon: Clock,
            iconBg: 'bg-emerald-100',
            id: '1',
            rating: '4.9',
            reviews: '2k+',
            title: t('topics.basics.title'),
        },
        {
            color: 'text-orange-600',
            icon: PieChart,
            iconBg: 'bg-orange-100',
            id: '2',
            rating: '4.8',
            reviews: '1k+',
            title: t('topics.quarter.title'),
        },
        {
            color: 'text-purple-600',
            icon: ArrowLeftRight,
            iconBg: 'bg-purple-100',
            id: 'digital-vs-analog',
            rating: '4.7',
            reviews: '800',
            title: t('topics.digitalVsAnalog.title'),
        },
        {
            color: 'text-pink-600',
            icon: Medal,
            iconBg: 'bg-pink-100',
            id: 'military',
            rating: '4.9',
            reviews: '500',
            title: t('topics.militaryTime.title'),
        },
    ]

    return (
        <section className="px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
                <Typography
                    variant="h2"
                    as="h3"
                >
                    {t('topics.learningTopics')}
                </Typography>
                <button
                    onClick={onSeeAll}
                    className="text-sm font-bold text-blue-600 active:scale-95"
                >
                    {t('topics.seeAll')}
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {TOPICS_DATA.map((topic) => (
                    <TopicCard
                        key={topic.id}
                        title={topic.title}
                        icon={topic.icon}
                        rating={topic.rating}
                        reviews={topic.reviews}
                        iconBgColor={topic.iconBg}
                        iconTextColor={topic.color}
                        onStart={() => onTopicStart?.(topic.id)}
                    />
                ))}
            </div>
        </section>
    )
}
