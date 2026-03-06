import { Trophy, Medal, Sparkles, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router'

import { ActionFooter } from '../ActionFooter'
import { Button } from '../Button'
import { ClockMastery } from '../ClockMastery'
import { Layout } from '../Layout'
import { Main } from '../Main/Main'
import { StrengthsSection } from '../StrengthsSection'

import type { GameResult } from '../Game'

const STRENGTHS = [
    {
        bgColor: 'bg-amber-50',
        icon: <Medal className="h-8 w-8 fill-amber-500/20 text-amber-500" />,
        id: 'hour',
        title: 'Hour Hand Expert',
    },
    {
        bgColor: 'bg-blue-50',
        icon: <Sparkles className="h-8 w-8 fill-blue-500/20 text-blue-500" />,
        id: 'minute',
        title: 'Minute Master',
    },
    {
        bgColor: 'bg-emerald-50',
        icon: <Zap className="h-8 w-8 fill-emerald-500/20 text-emerald-500" />,
        id: 'quick',
        title: 'Quick Thinker',
    },
]

export const GameResults = ({ totalScore, questionsAnswers }: GameResult) => {
    const navigate = useNavigate()
    return (
        <Layout hideNavigation>
            {/* Header Section */}
            <header className="relative overflow-hidden rounded-b-[3rem] bg-blue-700 px-6 pt-6 pb-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="mb-6 rounded-full bg-white/20 p-5 shadow-inner backdrop-blur-md">
                        <Trophy className="h-16 w-16 fill-white/20 text-white" />
                    </div>
                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                        Great Job, Alex!
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-3 rounded-full bg-white px-8 py-3 shadow-xl"
                    >
                        <span className="text-2xl font-bold text-blue-700">
                            Stars: {totalScore}/10
                        </span>
                    </motion.div>
                </motion.div>
            </header>

            <Main ariaLabel="Game results">
                {/* Clock Mastery Section */}
                <ClockMastery results={questionsAnswers} />

                {/* Strengths Section */}
                <StrengthsSection strengths={STRENGTHS} />

                {/* Action Buttons */}
                <ActionFooter>
                    {/* <Button
                        variant="primary"
                        onClick={() => navigate('/review')}
                    >
                        Review Mistakes
                    </Button> */}

                    <Button
                        variant="dark"
                        onClick={() => navigate('/timeline')}
                    >
                        Back to Timeline
                    </Button>
                </ActionFooter>
            </Main>
        </Layout>
    )
}
