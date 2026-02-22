import { useState, useEffect, useCallback } from 'react'
import { AnalogClock } from '../AnalogClock/AnalogClock'
import { MascotBubble } from '../MascotBubble/MascotBubble'
import { ActionFooter } from '../ActionFooter'
import { Answers } from '../Answers'
import { Header } from '../Header'

export type QuestionType = 'input' | 'multiple-choice'

export type GameState = {
    currentQuestion: number
    totalQuestions: number
    score: number
    mode: QuestionType
}

export type ClockTime = {
    hours: number
    minutes: number
}

export type GameProps = {
    totalQuestions?: number
    initialMode?: QuestionType
}
// const parseClockTime = (timeString: string): ClockTime => {
//     const match = timeString.match(/^(\d{1,2}):(\d{2})$/)
//     if (!match) return { hours: 0, minutes: 0 }

//     const hours = parseInt(match[1], 10)
//     const minutes = parseInt(match[2], 10)

//     if (hours < 1 || hours > 12 || minutes < 0 || minutes >= 60)
//         return { hours: 0, minutes: 0 }

//     return { hours, minutes }
// }

const questionText = 'Look at the clock! What time is it?'
const QuestionComponent = AnalogClock

// type Question = {
//     question: string
//     answer: string
//     type: QuestionType
//     options?: string[]
// }

// const questions: Question[] = [
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it? huh',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
//     {
//         question: 'What time is it?',
//         answer: '3:45',
//         type: 'multiple-choice',
//         options: ['3:45', '6:30', '9:15', '12:00'],
//     },
// ]

export const Game = () => {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(1)
    const [totalQuestions] = useState(10)
    const [score, setScore] = useState(0)
    // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [mode, setMode] = useState<QuestionType>('multiple-choice')
    const [targetTime, setTargetTime] = useState<ClockTime>({
        hours: 0,
        minutes: 0,
    })
    const [options, setOptions] = useState<string[]>([])
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [userInputHours, setUserInputHours] = useState('')
    const [userInputMinutes, setUserInputMinutes] = useState('')
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
        setTargetTime(newTime)
        setSelectedOption(null)
        setUserInputHours('')
        setUserInputMinutes('')
        setIsFeedbackVisible(false)
        setIsCorrect(null)

        // Swap modes for variety
        const newMode: QuestionType =
            Math.random() > 0.5 ? 'input' : 'multiple-choice'
        setMode(newMode)

        if (newMode === 'multiple-choice') {
            const correct = formatTime(newTime)
            const distractors = new Set<string>()
            while (distractors.size < 3) {
                const d = formatTime(generateRandomTime())
                if (d !== correct) distractors.add(d)
            }
            const allOptions = Array.from(distractors)
            allOptions.splice(Math.floor(Math.random() * 4), 0, correct)
            setOptions(allOptions)
        }
    }, [generateRandomTime])

    // const startNewQuestion = useCallback(() => {
    //     // const newTime = generateRandomTime()
    //     setTargetTime(parseClockTime(questions[currentQuestionIndex].answer))
    //     setSelectedOption(null)
    //     setUserInputHours('')
    //     setUserInputMinutes('')
    //     setIsFeedbackVisible(false)
    //     setIsCorrect(null)
    //     setOptions(questions[currentQuestionIndex + 1].options)
    //     setCurrentQuestionIndex((prev) => prev + 1)
    //     setMode(questions[currentQuestionIndex + 1].type)

    //     // Swap modes for variety
    //     // const newMode: QuestionType =
    //     //     Math.random() > 0.5 ? 'input' : 'multiple-choice'
    //     // setMode(newMode)

    //     // if (newMode === 'multiple-choice') {
    //     //     const correct = formatTime(newTime)
    //     //     const distractors = new Set<string>()
    //     //     while (distractors.size < 3) {
    //     //         const d = formatTime(generateRandomTime())
    //     //         if (d !== correct) distractors.add(d)
    //     //     }
    //     //     const allOptions = Array.from(distractors)
    //     //     allOptions.splice(Math.floor(Math.random() * 4), 0, correct)
    //     //     setOptions(allOptions)
    //     // }
    // }, [])

    useEffect(() => {
        startNewQuestion()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleCheckAnswer = () => {
        let correct = false
        if (mode === 'multiple-choice') {
            correct = selectedOption === formatTime(targetTime)
        } else {
            correct =
                parseInt(userInputHours) === targetTime.hours &&
                parseInt(userInputMinutes) === targetTime.minutes
        }

        setIsCorrect(correct)
        setIsFeedbackVisible(true)
        if (correct) {
            setScore((s) => s + 20)
        }
    }

    const handleNext = () => {
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

    const isFooterDisabled =
        mode === 'multiple-choice'
            ? !selectedOption
            : !userInputHours || !userInputMinutes

    return (
        <div className="flex p-6 flex-col min-h-screen max-w-md mx-auto bg-background-light relative overflow-hidden">
            <Header
                currentQuestionIdx={currentQuestionIdx}
                totalQuestions={totalQuestions}
                score={score}
            />

            <main className="flex-1 flex flex-col items-center overflow-y-auto gap-3 justify-between">
                {questionText && <MascotBubble message={questionText} />}
                {QuestionComponent && <QuestionComponent {...targetTime} />}
                {/* {AnswersComponent && <AnswersComponent />}*/}
                <Answers
                    mode={mode}
                    options={options}
                    selectedOption={selectedOption}
                    onSelectOption={setSelectedOption}
                    userInputHours={userInputHours}
                    onChangeHours={setUserInputHours}
                    userInputMinutes={userInputMinutes}
                    onChangeMinutes={setUserInputMinutes}
                    isDisabled={isFeedbackVisible}
                />
                <ActionFooter
                    isFeedbackVisible={isFeedbackVisible}
                    isCorrect={isCorrect}
                    isDisabled={isFooterDisabled}
                    correctTimeLabel={formatTime(targetTime)}
                    onCheckAnswer={handleCheckAnswer}
                    onNext={handleNext}
                />
            </main>
            {/* <BottomNav /> */}
        </div>
    )
}
