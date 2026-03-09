import { z } from 'zod'

import { AnswerTypeValues } from '../../types/answerType.d'
import { QuestionTypeValues } from '../../types/questionType.d'

// Zod schema for AnswerType
export const AnswerTypeSchema = z.enum([...Object.values(AnswerTypeValues)])

// Zod schema for QuestionType
export const QuestionTypeSchema = z.enum([...Object.values(QuestionTypeValues)])

// Zod schema for Question
export const QuestionSchema = z.object({
    answer: z.object({
        options: z.array(z.string()),
        type: AnswerTypeSchema,
    }),
    id: z.string(),
    question: z.object({
        questionType: QuestionTypeSchema,
        text: z.string(),
        value: z.string(),
    }),
    scoreValue: z.object({
        negativeScore: z.number(),
        positiveScore: z.number(),
    }),
})

// Zod schema for Game
export const GameSchema = z.object({
    description: z.string(),
    id: z.string(),
    questions: z.array(QuestionSchema),
    title: z.string(),
})

// Type inference from Zod schema (should match the original types)
export type GameSchemaType = z.infer<typeof GameSchema>
export type QuestionSchemaType = z.infer<typeof QuestionSchema>
export type AnswerTypeSchemaType = z.infer<typeof AnswerTypeSchema>
export type QuestionTypeSchemaType = z.infer<typeof QuestionTypeSchema>

// Validation functions
export const validateGame = (data: unknown): GameSchemaType => {
    return GameSchema.parse(data)
}

export const validateQuestion = (data: unknown): QuestionSchemaType => {
    return QuestionSchema.parse(data)
}

export const validateAnswerType = (data: unknown): AnswerTypeSchemaType => {
    return AnswerTypeSchema.parse(data)
}

export const validateQuestionType = (data: unknown): QuestionTypeSchemaType => {
    return QuestionTypeSchema.parse(data)
}

// Safe validation functions (return result instead of throwing)
export const safeValidateGame = (data: unknown) => {
    return GameSchema.safeParse(data)
}

export const safeValidateQuestion = (data: unknown) => {
    return QuestionSchema.safeParse(data)
}

export const safeValidateAnswerType = (data: unknown) => {
    return AnswerTypeSchema.safeParse(data)
}

export const safeValidateQuestionType = (data: unknown) => {
    return QuestionTypeSchema.safeParse(data)
}
