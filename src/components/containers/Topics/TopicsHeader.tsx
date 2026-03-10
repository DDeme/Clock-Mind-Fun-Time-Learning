import { Flame, Star } from 'lucide-react'
import React from 'react'

import { Typography } from '../../ui'

interface TopicsHeaderProps {
    userName?: string
    streak?: number
    stars?: number
}

export const TopicsHeader: React.FC<TopicsHeaderProps> = ({
    userName = 'Time Traveler',
    streak = 7,
    stars = 120,
}) => {
    return (
        <header className="mt-4 flex items-center justify-between p-6 pb-2">
            <div className="flex items-center gap-3">
                <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-600/20">
                    {/* Avatar placeholder */}
                </div>
                <div>
                    <Typography
                        variant="h3"
                        as="h2"
                        className="leading-tight font-extrabold tracking-tight"
                    >
                        Hi there, {userName}!
                    </Typography>
                    <Typography
                        variant="overline"
                        color="subtle"
                        className="mt-0.5"
                    >
                        Ready to learn?
                    </Typography>
                </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
                <Typography
                    variant="h4"
                    as="span"
                >
                    {streak}
                </Typography>
                <div className="mx-1 h-3 w-[1px] bg-slate-200"></div>
                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                <Typography
                    variant="h4"
                    as="span"
                >
                    {stars}
                </Typography>
            </div>
        </header>
    )
}
