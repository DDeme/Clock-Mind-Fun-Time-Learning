import { Medal, Sparkles, Zap } from 'lucide-react'
import { useNavigate } from 'react-router'

import { QuestionsResult } from '../../features/clock/QuestionsResult'
import { GameResultsHeader } from '../../GameResultsHeader'
import { ActionFooter, Button, Layout, Main, StrengthsSection } from '../../ui'

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

export const GameResults = ({
    totalScore,
    questionsAnswers,
    maxScore,
}: GameResult) => {
    const navigate = useNavigate()

    return (
        <Layout hideNavigation>
            <GameResultsHeader
                totalScore={totalScore}
                userName="Alex"
                maxScore={maxScore}
            />

            <Main ariaLabel="Game results">
                {/* Clock Mastery Section */}
                <QuestionsResult
                    results={questionsAnswers}
                    title="Clock Mastery"
                />

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
                        onClick={() => navigate('/lesson')}
                    >
                        Back to Lessons
                    </Button>
                </ActionFooter>
            </Main>
        </Layout>
    )
}
