import React from 'react'

import {
    type AnswerType,
    AnswerTypeValues,
} from '../../../../types/answerType.d'
import { NumericAnswer } from '../../forms/NumericAnswer/NumericAnswer'
import { SingleChoice } from '../../forms/SingleChoice/SingleChoice'

type AnswersProps = {
    type: AnswerType
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
        case AnswerTypeValues.SINGLE_CHOICE:
            return <SingleChoice {...props} />
        case AnswerTypeValues.NUMERIC_ANSWER:
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
