export const AnswerTypeValues = {
    NUMERIC_ANSWER: 'numeric-answer',
    SINGLE_CHOICE: 'single-choice',
} as const

export type AnswerType =
    (typeof AnswerTypeValues)[keyof typeof AnswerTypeValues]
