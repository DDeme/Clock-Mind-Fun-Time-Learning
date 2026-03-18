import { Medal, Sparkles, Zap } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import { QuestionsResult } from '../../features/clock/QuestionsResult'
import { GameResultsHeader } from '../../GameResultsHeader'
import { ActionFooter, Button, Layout, Main, StrengthsSection } from '../../ui'

import type { GameResult } from '../Game'

export const GameResults = ({
    totalScore,
    questionsAnswers,
    maxScore,
}: GameResult) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const STRENGTHS = [
        {
            bgColor: 'bg-amber-50',
            icon: (
                <Medal className="h-8 w-8 fill-amber-500/20 text-amber-500" />
            ),
            id: 'hour',
            title: t('topics.strengths.hourTitle'),
        },
        {
            bgColor: 'bg-blue-50',
            icon: (
                <Sparkles className="h-8 w-8 fill-blue-500/20 text-blue-500" />
            ),
            id: 'minute',
            title: t('topics.strengths.minuteTitle'),
        },
        {
            bgColor: 'bg-emerald-50',
            icon: (
                <Zap className="h-8 w-8 fill-emerald-500/20 text-emerald-500" />
            ),
            id: 'quick',
            title: t('topics.strengths.quickTitle'),
        },
    ]

    return (
        <Layout hideNavigation>
            <GameResultsHeader
                totalScore={totalScore}
                userName="Alex"
                maxScore={maxScore}
            />

            <Main ariaLabel={t('accessibility.gameResults')}>
                {/* Clock Mastery Section */}
                <QuestionsResult
                    results={questionsAnswers}
                    title={t('topics.clockMastery')}
                />

                {/* Strengths Section */}
                <StrengthsSection strengths={STRENGTHS} />

                {/* Action Buttons */}
                <ActionFooter>
                    <Button
                        variant="dark"
                        onClick={() => navigate('/lesson')}
                    >
                        {t('common.backToLessons')}
                    </Button>
                </ActionFooter>
            </Main>
        </Layout>
    )
}
