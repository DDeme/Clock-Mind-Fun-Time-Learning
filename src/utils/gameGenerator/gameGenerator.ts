import type { Answers } from '../../components/features/game/Answers'
import type { TFunction } from 'i18next'
import type { ComponentProps } from 'react'

export type AnswerType = ComponentProps<typeof Answers>['type']

const numericOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

export type ClockTime = {
    hours: number
    minutes: number
}

export type Question = {
    id: string
    answer: {
        options: string[]
        type: 'single-choice' | 'numeric-answer'
    }
    question: {
        questionType: 'analog-clock'
        text: string
        value: string
    }
    scoreValue: {
        negativeScore: number
        positiveScore: number
    }
}

const generateRandomTime = () => {
    const hours = Math.floor(Math.random() * 12) + 1
    const minutes = Math.floor(Math.random() * 12) * 5 // Use 5 min intervals for beginner
    return { hours, minutes }
}

const generateOptions = (type: AnswerType, value: ClockTime): string[] => {
    if (type === 'single-choice') {
        const correct = value
        const distractors: ClockTime[] = []
        while (distractors.length < 3) {
            const d = generateRandomTime()
            const isDuplicate = distractors.some(
                (existing) =>
                    existing.hours === d.hours &&
                    existing.minutes === d.minutes,
            )
            const isCorrect =
                d.hours === correct.hours && d.minutes === correct.minutes
            if (!isDuplicate && !isCorrect) distractors.push(d)
        }
        const allOptions = distractors
        allOptions.splice(Math.floor(Math.random() * 4), 0, correct)
        return allOptions.map((option) => `${option.hours}:${option.minutes}`)
    }
    return numericOptions.flat().map((option) => String(option))
}

export const questionsGenerator = (count: number, t: TFunction): Question[] => {
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
                text: t('game.question'),
                value: `${value.hours}:${value.minutes.toString().padStart(2, '0')}`,
            },
            scoreValue: {
                negativeScore: 0,
                positiveScore: 30,
            },
        }
    })
}
