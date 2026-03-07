import { Star, type LucideIcon } from 'lucide-react'
import React from 'react'

import { Typography } from '../Typography'

interface TopicCardProps {
    title: string
    icon: LucideIcon
    rating: string
    reviews: string
    iconBgColor: string
    iconTextColor: string
    onStart?: () => void
}

export const TopicCard: React.FC<TopicCardProps> = ({
    title,
    icon: Icon,
    rating,
    reviews,
    iconBgColor,
    iconTextColor,
    onStart,
}) => {
    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
            <div
                className={`flex size-12 items-center justify-center rounded-xl ${iconBgColor}`}
            >
                <Icon className={`h-6 w-6 ${iconTextColor}`} />
            </div>
            <div>
                <Typography
                    variant="h4"
                    as="h4"
                    className="leading-tight"
                >
                    {title}
                </Typography>
                <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <Typography
                        variant="caption-bold"
                        color="subtle"
                    >
                        {rating} ({reviews})
                    </Typography>
                </div>
            </div>
            <button
                onClick={onStart}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 transition-transform active:scale-95"
            >
                Start
            </button>
        </div>
    )
}
