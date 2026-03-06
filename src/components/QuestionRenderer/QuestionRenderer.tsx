import React from 'react'

import { parseTime } from '../../utils/parseTime/parseTime'
import { AnalogClock } from '../AnalogClock/AnalogClock'
import { TimeToHumanText } from '../TimeToHuman/TimeToHuman'

export const QuestionType = {
    ANALOG_CLOCK: 'analog-clock',
    DIGITAL_CLOCK: 'digital-clock',
    EMPTY: 'empty',
    TEXT: 'text',
    TEXT_CLOCK: 'text-clock',
} as const

type QuestionRendererProps = {
    questionType: (typeof QuestionType)[keyof typeof QuestionType]
    value: string
}

export type { QuestionRendererProps }

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
    questionType,
    value,
}) => {
    switch (questionType) {
        case QuestionType.ANALOG_CLOCK:
            return <AnalogClock {...parseTime(value)} />
        case QuestionType.TEXT_CLOCK:
            return <TimeToHumanText {...parseTime(value)} />
        case QuestionType.TEXT:
            return <div>{value}</div>
        case QuestionType.EMPTY:
            return <div></div>
        default:
            throw new Error('Invalid question type')
    }
}
