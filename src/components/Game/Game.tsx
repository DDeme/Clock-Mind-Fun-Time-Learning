import { useState, useEffect, useCallback, type ComponentProps } from 'react'
import { MascotBubble } from '../MascotBubble/MascotBubble'
import { ActionFooter } from '../ActionFooter'
import { Answers } from '../Answers'
import { Header } from '../Header'
import { QuestionRenderer } from '../QuestionRenderer/QuestionRenderer'
import type { QuestionRendererProps } from '../QuestionRenderer/QuestionRenderer'
import { ResultNotification } from '../ResultNotification'

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

export type GameProps = {
    totalQuestions?: number
    initialMode?: AnswerType
}

const numericOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

const question = {
    id: 1,
    title: 'Look at the clock! What time is it?',
    type: 'analog-clock',
    value: {
        hours: 3,
        minutes: 45,
    },
}

export const Game = () => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(1)
    const [totalQuestions] = useState(10)
    const [score, setScore] = useState(0)
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [type, setType] = useState<'single-choice' | 'numeric-answer'>(
        'single-choice',
    )
    const [questionValue, setQuestionValue] = useState<ClockTime>({
        hours: 0,
        minutes: 0,
    })
    const [answer, setAnswer] = useState<ClockTime | null>(null)

    const [options, setOptions] = useState<ClockTime[] | number[][]>([])
    const [isFeedbackVisible, setIsFeedbackVisible] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const generateRandomTime = useCallback(() => {
        const hours = Math.floor(Math.random() * 12) + 1
        const minutes = Math.floor(Math.random() * 12) * 5 // Use 5 min intervals for beginner
        return { hours, minutes }
    }, [])

    const formatTime = (time: ClockTime) => {
        const h = time.hours
        const m = time.minutes.toString().padStart(2, '0')
        return `${h}:${m}`
    }

    const startNewQuestion = useCallback(() => {
        const newTime = generateRandomTime()
        setQuestionValue(newTime)
        setAnswer(null)
        setIsFeedbackVisible(false)
        setIsCorrect(null)

        // Swap modes for variety
        const newType: AnswerType =
            Math.random() > 0.5 ? 'numeric-answer' : 'single-choice'
        setType(newType)

        if (newType === 'single-choice') {
            const correct = newTime
            const distractors = new Set<ClockTime>()
            while (distractors.size < 3) {
                const d = generateRandomTime()
                if (d !== correct) distractors.add(d)
            }
            const allOptions = Array.from(distractors)
            allOptions.splice(Math.floor(Math.random() * 4), 0, correct)
            setOptions(allOptions)
        }
        if (newType === 'numeric-answer') {
            setOptions(numericOptions)
        }
    }, [generateRandomTime])

    useEffect(() => {
        startNewQuestion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onCheckAnswer = () => {
        let correct = false
        if (
            questionValue.hours === answer?.hours &&
            questionValue.minutes === answer?.minutes
        ) {
            correct = true
        }

        setIsCorrect(correct)
        setIsFeedbackVisible(true)
        if (correct) {
            setScore((s) => s + 20)
        }
    }

    const onNext = () => {
        if (currentQuestionIdx < totalQuestions) {
            setCurrentQuestionIdx((prev) => prev + 1)
            startNewQuestion()
        } else {
            // Game over logic could go here
            // implements socreboard screen
            alert('Practice complete! Great job!')
            setCurrentQuestionIdx(1)
            setScore(0)
            startNewQuestion()
        }
    }

    const gameProps = {
        answer: {
            options: options as {
                hours: number
                minutes: number
            }[],
            type: type,
        },
        question: {
            questionType: 'analog-clock' as const,
            text: 'Look at the clock! What time is it?',
            value: questionValue,
        },
        scoreValue: {
            negativeScore: 0,
            positiveScore: 20,
        },
    }

    const props: {
        question: QuestionRendererProps & { text: string }
        answer: ComponentProps<typeof Answers>
        footer: Omit<ComponentProps<typeof ActionFooter>, 'feedback'>
        scoreValue: {
            positiveScore: number
            negativeScore: number
        }
    } = {
        ...gameProps,
        answer: {
            ...gameProps.answer,
            isDisabled: isFeedbackVisible,
            onChange: setAnswer,
            value: answer,
        },
        footer: {
            isCorrect,
            isDisabled: answer === null,
            isFeedbackVisible,
            onCheckAnswer,
            onNext,
        },
    }
    return (
        <div className="bg-background-light relative mx-auto flex min-h-screen max-w-md flex-col overflow-hidden p-6">
            <Header
                currentQuestionIdx={currentQuestionIdx}
                totalQuestions={totalQuestions}
                score={score}
            />
            <main className="flex flex-1 flex-col items-center justify-between gap-3 overflow-y-auto">
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
            {/* <BottomNav /> */}
        </div>
    )
}
