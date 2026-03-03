import { useState, type ComponentProps, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

import {
    type AnswerType,
    type ClockTime,
    type Question,
} from '../../utils/gameGenerator/gameGenerator'
import { Answers } from '../Answers'
import { GameFooter } from '../GameFooter'
import { Header } from '../Header'
import { Layout } from '../Layout'
import { Main } from '../Main/Main'
import { MascotBubble } from '../MascotBubble/MascotBubble'
import { QuestionRenderer } from '../QuestionRenderer/QuestionRenderer'
import { ResultNotification } from '../ResultNotification'

import type { QuestionRendererProps } from '../QuestionRenderer/QuestionRenderer'

export type GameState = {
    currentQuestion: number
    totalQuestions: number
    score: number
    type: AnswerType
}

export type GameDefinition = {
    questions: number
    initialMode?: AnswerType
}

type GameProps = {
    id: string
    questions: Question[]
    onComplete: (score: number) => void
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
    const [answer, setAnswer] = useState<ClockTime | null>(null)

    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const formatTime = (time: ClockTime) => {
        const h = time.hours
        const m = time.minutes.toString().padStart(2, '0')
        return `${h}:${m}`
    }

    const startNewQuestion = useCallback(() => {
        setAnswer(null)
        setIsFeedbackVisible(false)
        setIsCorrect(null)
    }, [])

    const onCheckAnswer = () => {
        let correct = false
        if (
            game.questions[currentStep].question.value.hours ===
                answer?.hours &&
            game.questions[currentStep].question.value.minutes ===
                answer?.minutes
        ) {
            correct = true
        }

        setIsCorrect(correct)
        setIsFeedbackVisible(true)
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
            onComplete(score)
            setCurrentStep(0)
            setScore(0)
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
            onCheckAnswer,
            onNext,
        },
    }

    return (
        <Layout hideNavigation>
            <Header
                currentStep={currentStep + 1}
                totalQuestions={totalQuestions}
                score={score}
                onClose={() => navigate('/timeline')}
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
                            correctAnswer={formatTime(props.question.value)}
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
                {t('game.gameState', { current: currentStep + 1, score, total: totalQuestions })}{' '}
                points
            </div>
        </Layout>
    )
}
