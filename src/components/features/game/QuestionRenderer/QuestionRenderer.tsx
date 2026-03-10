import React from 'react'

import { QuestionTypeValues } from '../../../../types/questionType.d'
import { parseTime } from '../../../../utils/parseTime/parseTime'
import { AnalogClock } from '../../clock/AnalogClock'
import { TimeToHumanText } from '../../clock/TimeToHuman/TimeToHuman'

import type { QuestionType } from '../../../../types/questionType.d'

type QuestionRendererProps = {
    questionType: QuestionType
    value: string
}

export type { QuestionRendererProps }

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
    questionType,
    value,
}) => {
    switch (questionType) {
        case QuestionTypeValues.ANALOG_CLOCK:
            return <AnalogClock {...parseTime(value)} />
        case QuestionTypeValues.TEXT_CLOCK:
            return <TimeToHumanText {...parseTime(value)} />
        case QuestionTypeValues.TEXT:
            return <div>{value}</div>
        case QuestionTypeValues.EMPTY:
            return <div></div>
        default:
            throw new Error('Invalid question type')
    }
}
