import { Clock } from 'lucide-react'
import React from 'react'

import { Typography, Card } from '../../ui'

interface ContinueLearningProps {
    lessonName?: string
    lessonProgress?: number
    lessonTotal?: number
    onAction?: () => void
}

export const ContinueLearning: React.FC<ContinueLearningProps> = ({
    lessonName = 'Násobenie',
    lessonProgress = 4,
    lessonTotal = 10,
    onAction,
}) => {
    const percentage = Math.round((lessonProgress / lessonTotal) * 100)

    return (
        <section className="px-6 py-4">
            <Typography
                variant="h2"
                as="h3"
                className="mb-4"
            >
                Continue Learning
            </Typography>
            <Card
                padding="lg"
                rounded="3xl"
                className="flex flex-col gap-5"
            >
                <div className="flex items-center gap-4">
                    <div className="flex size-16 items-center justify-center rounded-2xl border border-blue-600/20 bg-blue-600/10">
                        <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <Typography
                            variant="h3"
                            as="p"
                            className="leading-tight font-bold"
                        >
                            {lessonName}
                        </Typography>
                        <Typography
                            variant="body"
                            color="subtle"
                            className="mt-1"
                        >
                            Lesson {lessonProgress} of {lessonTotal}
                        </Typography>
                    </div>
                </div>
                <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between">
                        <Typography
                            variant="label"
                            color="subtle"
                            className="tracking-tighter"
                        >
                            Progress
                        </Typography>
                        <Typography
                            variant="label"
                            className="tracking-tighter text-blue-600"
                        >
                            {percentage}%
                        </Typography>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                        <div
                            className="h-full rounded-full bg-blue-600"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>
                <button
                    onClick={onAction}
                    className="mt-1 w-full rounded-xl bg-blue-600 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-transform active:scale-95"
                >
                    Resume Lesson
                </button>
            </Card>
        </section>
    )
}
