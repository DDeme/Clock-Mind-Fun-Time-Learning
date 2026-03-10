import { useState, type ComponentProps, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import {
    type AnswerType,
    type Question,
} from '../../../utils/gameGenerator/gameGenerator'
import { MascotBubble } from '../../features/content/MascotBubble/MascotBubble'
import { Answers } from '../../features/game/Answers'
import { GameFooter } from '../../features/game/GameFooter'
import { Header } from '../../features/game/Header'
import { QuestionRenderer } from '../../features/game/QuestionRenderer/QuestionRenderer'
import { ResultNotification } from '../../features/game/ResultNotification'
import { Layout, Main } from '../../ui'

import type { QuestionRendererProps } from '../../features/game/QuestionRenderer/QuestionRenderer'

export type GameResult = {
    id: string
    started: Date
    finished: Date
    totalScore: number
    questionsAnswers: {
        id: string
        started: number
        finished: number
        answer: string
        isCorrect: boolean
        scoreDiff: number
    }[]
}

export type GameState = {
    currentQuestion: number
    totalQuestions: number
    score: number
    type: AnswerType
}

export type GameDefinition = {
    questions: number
}

type GameProps = {
    id: string
    title: string
    description: string
    questions: Question[]
    onComplete: (gameResult: GameResult) => void
}

export const Game = ({ id, questions, onComplete }: GameProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    const game = {
        id: id || 'default',
        onComplete,
        questions,
    }

    const [currentStep, setCurrentStep] = useState(0)
    const [totalQuestions] = useState(game.questions.length)
    const [score, setScore] = useState(0)
    const [answer, setAnswer] = useState<string | null>(null)
    const [gameStartTime] = useState(() => new Date())
    const [questionStartTime, setQuestionStartTime] = useState(() => Date.now())
    const [questionsAnswers, setQuestionsAnswers] = useState<
        {
            id: string
            started: number
            finished: number
            answer: string
            isCorrect: boolean
            scoreDiff: number
        }[]
    >([])

    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const startNewQuestion = useCallback(() => {
        setAnswer(null)
        setIsFeedbackVisible(false)
        setIsCorrect(null)
        setQuestionStartTime(Date.now())
    }, [])

    const onCheckAnswer = () => {
        let correct = false
        if (game.questions[currentStep].question.value === answer) {
            correct = true
        }

        setIsCorrect(correct)
        setIsFeedbackVisible(true)

        const scoreDiff = correct
            ? game.questions[currentStep].scoreValue.positiveScore
            : game.questions[currentStep].scoreValue.negativeScore

        // Record the question answer data
        setQuestionsAnswers((prev) => [
            ...prev,
            {
                answer: answer || '',
                finished: Date.now(),
                id: game.questions[currentStep].id,
                isCorrect: correct,
                scoreDiff: scoreDiff,
                started: questionStartTime,
            },
        ])

        if (correct) {
            setScore(
                (s) => s + game.questions[currentStep].scoreValue.positiveScore,
            )
        }
    }

    const onNext = () => {
        if (currentStep < totalQuestions - 1) {
            setCurrentStep((prev) => prev + 1)
            startNewQuestion()
        } else {
            // Create GameResult object
            const gameResult: GameResult = {
                finished: new Date(),
                id: game.id,
                questionsAnswers: questionsAnswers,
                started: gameStartTime,
                totalScore: score,
            }
            onComplete(gameResult)
            setCurrentStep(0)
            setScore(0)
            setQuestionsAnswers([])
            startNewQuestion()
        }
    }

    const questionProps: Question = game.questions[currentStep]
    const props: {
        question: QuestionRendererProps & { text: string }
        answer: ComponentProps<typeof Answers>
        footer: Omit<ComponentProps<typeof GameFooter>, 'feedback'>
        scoreValue: {
            positiveScore: number
            negativeScore: number
        }
    } = {
        ...questionProps,
        answer: {
            ...questionProps.answer,
            isDisabled: isFeedbackVisible,
            onChange: setAnswer,
            value: answer,
        } as ComponentProps<typeof Answers>,
        footer: {
            isCorrect,
            isDisabled: answer === null,
            isFeedbackVisible,
            isLastQuestion: currentStep === totalQuestions - 1,
            onCheckAnswer,
            onNext,
        },
    }

    return (
        <Layout hideNavigation>
            <div data-testid="game-container">
                <Header
                    currentStep={currentStep + 1}
                    totalQuestions={totalQuestions}
                    score={score}
                    onClose={() => navigate('/lesson')}
                />
                <Main ariaLabel={t('game.gameContent')}>
                    {props.question.text && (
                        <MascotBubble message={props.question.text} />
                    )}
                    <QuestionRenderer {...props.question} />
                    <Answers {...props.answer} />
                    <GameFooter
                        {...props.footer}
                        feedback={
                            <ResultNotification
                                isCorrect={props.footer.isCorrect}
                                correctAnswer={props.question.value}
                                earnedStars={props.scoreValue.positiveScore}
                            />
                        }
                    />
                </Main>
                {/* Game state announcement for screen readers */}
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className="sr-only"
                >
                    {t('game.gameState', {
                        current: currentStep + 1,
                        score,
                        total: totalQuestions,
                    })}{' '}
                    points
                </div>
            </div>
        </Layout>
    )
}
