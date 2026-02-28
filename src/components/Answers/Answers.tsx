import React from 'react'
import type { AnswerType } from '../Game/Game'
import { NumericAnswer } from '../NumericAnswer/NumericAnswer'
import { SingleChoice } from '../SingleChoice/SingleChoice'

const AnswerType = {
    SINGLE_CHOICE: 'single-choice',
    NUMERIC_ANSWER: 'numeric-answer',
} as const

type SingleChoiceOptions = {
    type: typeof AnswerType.SINGLE_CHOICE
    options: {
        hours: number
        minutes: number
    }[]
    value: {
        hours: number
        minutes: number
    } | null
    onChange: (
        option: {
            hours: number
            minutes: number
        } | null,
    ) => void
    isDisabled: boolean
}

type NumericAnswerOptions = {
    type: typeof AnswerType.NUMERIC_ANSWER
    options: number[][]
    value: {
        hours: number
        minutes: number
    }
    onChange: (
        value: {
            hours: number
            minutes: number
        } | null,
    ) => void
    isDisabled: boolean
}

type AnswersProps = SingleChoiceOptions | NumericAnswerOptions

export const Answers: React.FC<AnswersProps> = (props) => {
    switch (props.type) {
        case AnswerType.SINGLE_CHOICE:
            return <SingleChoice {...props} />
        case AnswerType.NUMERIC_ANSWER:
            return <NumericAnswer {...props} />
        default:
            return null
    }
}
