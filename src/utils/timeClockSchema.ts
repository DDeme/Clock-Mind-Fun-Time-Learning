import { z } from 'zod'

import { AnswerType } from '../components/Answers'
import { QuestionType } from '../components/QuestionRenderer'

export const QuestionSchema = z.object({
    answer: z.object({
        options: z.union([z.array(z.string())]),
        type: z.enum(['single-choice', 'numeric-answer', 'text']),
    }),
    id: z.string(),
    question: z.object({
        questionType: z.enum(Object.values(QuestionType)),
        text: z.string(),
        value: z
            .object({
                hours: z.number().int().min(1).max(12).optional(),
                minutes: z.number().int().min(0).max(59).optional(),
            })
            .optional(),
    }),
    scoreValue: z.object({
        negativeScore: z.number().int().nonnegative(),
        positiveScore: z.number().int().nonnegative(),
    }),
})

export const LessonSchema = z.object({
    examples: z.array(z.string()),
    explanation: z.string(),
    id: z.number().int().positive(),
    position: z.enum(['left', 'right']),
    progress: z.number().int().min(0).max(100).optional(),
    quiz: z.array(QuestionSchema),
    status: z.enum(['completed', 'active', 'locked']),
    title: z.string(),
})

export const GameQuestionSchema = z.object({
    answer: z.object({
        options: z.array(z.string()),
        type: z.enum(AnswerType),
    }),
    id: z.string(),
    question: z.object({
        questionType: z.enum([
            'analog-clock',
            'digital-clock',
            'text-clock',
            'empty',
        ]),
        text: z.string(),
        value: z.string(),
    }),
    scoreValue: z.object({
        negativeScore: z.number(),
        positiveScore: z.number(),
    }),
})

export const GameDataResponseSchema = z.object({
    description: z.string(),
    id: z.string(),
    questions: z.array(GameQuestionSchema),
    title: z.string(),
})

export const TimeClockSchema = z.array(LessonSchema)

export type Question = z.infer<typeof QuestionSchema>
export type Lesson = z.infer<typeof LessonSchema>
export type TimeClockData = z.infer<typeof TimeClockSchema>
export type GameDataResponse = z.infer<typeof GameDataResponseSchema>

/**
 * Validates the time-clock.json data.
 * @param data The data to validate.
 * @returns The validated data.
 * @throws Error if validation fails.
 */
export const validateTimeClockData = (data: unknown): TimeClockData => {
    return TimeClockSchema.parse(data)
}

/**
 * Validates the game data response.
 * @param data The data to validate.
 * @returns The validated data.
 * @throws Error if validation fails.
 */
export const validateGameDataResponse = (data: unknown): GameDataResponse => {
    return GameDataResponseSchema.parse(data)
}
