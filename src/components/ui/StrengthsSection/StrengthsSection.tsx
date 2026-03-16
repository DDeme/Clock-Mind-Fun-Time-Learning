import { motion } from 'motion/react'
import React from 'react'

import { Card } from '../Card'

const MotionCard = motion(Card)

type Strength = {
    id: string
    title: string
    icon: React.ReactNode
    bgColor: string
}

type StrengthsSectionProps = {
    strengths: Strength[]
}

export const StrengthsSection = ({ strengths }: StrengthsSectionProps) => {
    return (
        <section className="flex w-full flex-col">
            <h2 className="mb-5 text-xl font-bold text-slate-800">
                Your Strengths
            </h2>
            <div
                className="no-scrollbar -mx-6 flex snap-x gap-4 overflow-x-auto px-6 pb-4"
                role="region"
                aria-label="Strengths carousel"
                tabIndex={0}
            >
                {strengths.map((strength) => (
                    <MotionCard
                        key={strength.id}
                        whileHover={{ y: -5 }}
                        padding="lg"
                        rounded="3xl"
                        className="flex w-36 shrink-0 snap-center flex-col items-center text-center"
                    >
                        <div
                            className={`h-16 w-16 rounded-full ${strength.bgColor} mb-4 flex items-center justify-center`}
                        >
                            {strength.icon}
                        </div>
                        <p className="text-sm leading-tight font-bold text-slate-700">
                            {strength.title}
                        </p>
                    </MotionCard>
                ))}
                {/* Spacer for scroll end */}
                <div className="w-2 shrink-0" />
            </div>
        </section>
    )
}
