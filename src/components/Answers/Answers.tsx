import React from 'react'

import { NumericAnswer } from '../NumericAnswer/NumericAnswer'
import { SingleChoice } from '../SingleChoice/SingleChoice'

export const AnswerType = {
    NUMERIC_ANSWER: 'numeric-answer',
    SINGLE_CHOICE: 'single-choice',
} as const

type AnswersProps = {
    type: (typeof AnswerType)[keyof typeof AnswerType]
    options: string[]
    value: string | null
    onChange: (option: string | null) => void
    isDisabled: boolean
}

const numOptions = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
]

export const Answers: React.FC<AnswersProps> = (props) => {
    switch (props.type) {
        case AnswerType.SINGLE_CHOICE:
            return <SingleChoice {...props} />
        case AnswerType.NUMERIC_ANSWER:
            return (
                <NumericAnswer
                    {...props}
                    options={numOptions}
                />
            )
        default:
            return null
    }
}
