import { Clock, PieChart, ArrowLeftRight, Medal } from 'lucide-react'
import React from 'react'

import { TopicCard } from './TopicCard'
import { Typography } from '../Typography'

interface LearningTopicsProps {
    onSeeAll?: () => void
    onTopicStart?: (topicId: string) => void
}

const TOPICS_DATA = [
    {
        color: 'text-emerald-600',
        icon: Clock,
        iconBg: 'bg-emerald-100',
        id: 'basics',
        rating: '4.9',
        reviews: '2k+',
        title: 'The Basics',
    },
    {
        color: 'text-orange-600',
        icon: PieChart,
        iconBg: 'bg-orange-100',
        id: 'quarter',
        rating: '4.8',
        reviews: '1k+',
        title: 'Quarter To & Past',
    },
    {
        color: 'text-purple-600',
        icon: ArrowLeftRight,
        iconBg: 'bg-purple-100',
        id: 'digital-vs-analog',
        rating: '4.7',
        reviews: '800',
        title: 'Digital vs Analog',
    },
    {
        color: 'text-pink-600',
        icon: Medal,
        iconBg: 'bg-pink-100',
        id: 'military',
        rating: '4.9',
        reviews: '500',
        title: 'Military Time',
    },
]

export const LearningTopics: React.FC<LearningTopicsProps> = ({
    onSeeAll,
    onTopicStart,
}) => {
    return (
        <section className="px-6 py-4">
            <div className="mb-4 flex items-center justify-between">
                <Typography
                    variant="h2"
                    as="h3"
                >
                    Learning Topics
                </Typography>
                <button
                    onClick={onSeeAll}
                    className="text-sm font-bold text-[#0369a1] active:scale-95"
                >
                    See All
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
