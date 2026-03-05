import { z } from 'zod'

export const QuestionSchema = z.object({
    answer: z.object({
        correct: z.union([z.string(), z.number(), z.any()]).optional(),
        options: z.union([
            z.array(z.string()),
            z.array(z.number()),
            z.array(
                z.object({
                    hours: z.number().int().min(1).max(12),
                    minutes: z.number().int().min(0).max(59),
                }),
            ),
            z.array(z.array(z.number())),
        ]),
        type: z.enum(['single-choice', 'numeric-answer']),
    }),
    id: z.string(),
    question: z.object({
        questionType: z.enum([
            'text-only',
            'analog-clock',
            'digital-clock',
            'text-clock',
        ]),
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

export const TimeClockSchema = z.array(LessonSchema)

export type Question = z.infer<typeof QuestionSchema>
export type Lesson = z.infer<typeof LessonSchema>
export type TimeClockData = z.infer<typeof TimeClockSchema>

/**
 * Validates the time-clock.json data.
 * @param data The data to validate.
 * @returns The validated data.
 * @throws Error if validation fails.
 */
export const validateTimeClockData = (data: unknown): TimeClockData => {
    return TimeClockSchema.parse(data)
}
