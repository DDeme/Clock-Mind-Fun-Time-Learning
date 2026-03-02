import { useState, type ComponentProps, useCallback } from 'react'
import { useNavigate } from 'react-router'

import { ActionFooter } from '../ActionFooter'
import { Answers } from '../Answers'
import { Header } from '../Header'
import { Layout } from '../Layout'
import { MascotBubble } from '../MascotBubble/MascotBubble'
import { QuestionRenderer } from '../QuestionRenderer/QuestionRenderer'
import { ResultNotification } from '../ResultNotification'

import type { QuestionRendererProps } from '../QuestionRenderer/QuestionRenderer'

export type AnswerType = ComponentProps<typeof Answers>['type']

export type GameState = {
    currentQuestion: number
    totalQuestions: number
    score: number
    type: AnswerType
}

export type ClockTime = {
    hours: number
    minutes: number
}

export type GameDefinition = {
    questions: number
    initialMode?: AnswerType
}

const numericOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

type Question = {
    id: string
    answer: {
        options:
            | {
                  hours: number
                  minutes: number
              }[]
            | number[][]
        type: 'single-choice' | 'numeric-answer'
    }
    question: {
        questionType: 'analog-clock'
        text: string
        value: ClockTime
    }
    scoreValue: {
        negativeScore: number
        positiveScore: number
    }
}

type GameProps = {
    id?: string
    questions?: Question[]
    onComplete?: (score: number) => void
}

const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1
    const minutes = Math.floor(Math.random() * 12) * 5 // Use 5 min intervals for beginner
    return { hours, minutes }
}

const generateOptions = (
    type: AnswerType,
    value: ClockTime,
): ClockTime[] | number[][] => {
    if (type === 'single-choice') {
        const correct = value
        const distractors = new Set<ClockTime>()
        while (distractors.size < 3) {
            const d = generateRandomTime()
            if (d !== correct) distractors.add(d)
        }
        const allOptions = Array.from(distractors)
        allOptions.splice(Math.floor(Math.random() * 4), 0, correct)
        return allOptions
    }
    return numericOptions
}

const questionsGenerator = (count: number): Question[] => {
    return Array.from({ length: count }, (_, i) => {
        const type: AnswerType =
            Math.random() > 0.5 ? 'numeric-answer' : 'single-choice'

        const value = generateRandomTime()

        return {
            answer: {
                options: generateOptions(type, value),
                type,
            },
            id: String(i + 1),
            question: {
                questionType: 'analog-clock',
                text: 'Look at the clock! What time is it?',
                value,
            },
            scoreValue: {
                negativeScore: 0,
                positiveScore: 30,
            },
        }
    })
}

const g = questionsGenerator(5)

export const Game = ({ id, questions = g, onComplete }: GameProps) => {
    const navigate = useNavigate()
    const game = {
        id: id || 'default',
        onComplete: onComplete || (() => {}),
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
        if (currentStep < totalQuestions) {
            setCurrentStep((prev) => prev + 1)
            startNewQuestion()
        } else {
            // Game over logic could go here
            // implements socreboard screen
            alert('Practice complete! Great job!')
            setCurrentStep(1)
            setScore(0)
            startNewQuestion()
        }
    }

    const questionProps: Question = game.questions[currentStep]
    const props: {
        question: QuestionRendererProps & { text: string }
        answer: ComponentProps<typeof Answers>
        footer: Omit<ComponentProps<typeof ActionFooter>, 'feedback'>
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
            <main
                className="flex flex-1 flex-col items-center justify-between gap-3 overflow-y-auto p-6"
                role="main"
                aria-label="Game content"
            >
                {props.question.text && (
                    <MascotBubble message={props.question.text} />
                )}
                <QuestionRenderer {...props.question} />
                <Answers {...props.answer} />
                <ActionFooter
                    {...props.footer}
                    feedback={
                        <ResultNotification
                            isCorrect={props.footer.isCorrect}
                            correctAnswer={formatTime(props.question.value)}
                            earnedStars={props.scoreValue.positiveScore}
                        />
                    }
                />
            </main>
            {/* Game state announcement for screen readers */}
            <div
                aria-live="polite"
                aria-atomic="true"
                className="sr-only"
            >
                Question {currentStep + 1} of {totalQuestions}, Score: {score}{' '}
                points
            </div>
        </Layout>
    )
}
