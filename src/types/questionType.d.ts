export const QuestionTypeValues = {
    ANALOG_CLOCK: 'analog-clock',
    DIGITAL_CLOCK: 'digital-clock',
    EMPTY: 'empty',
    TEXT: 'text',
    TEXT_CLOCK: 'text-clock',
} as const

export type QuestionType =
    (typeof QuestionTypeValues)[keyof typeof QuestionTypeValues]
