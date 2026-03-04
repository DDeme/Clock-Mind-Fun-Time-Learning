import React, { type ComponentProps } from 'react'

import { AnalogClock } from '../AnalogClock/AnalogClock'
import { TimeToHumanText } from '../TimeToHuman/TimeToHuman'

const QuestionType = {
    ANALOG_CLOCK: 'analog-clock',
    DIGITAL_CLOCK: 'digital-clock',
    TEXT_CLOCK: 'text-clock',
} as const

type AnalogClockQuestion = {
    questionType: typeof QuestionType.ANALOG_CLOCK
    value: ComponentProps<typeof AnalogClock>
}

type DigitalClockQuestion = {
    questionType: typeof QuestionType.DIGITAL_CLOCK
    value: ComponentProps<typeof AnalogClock>
}
type TextClockQuestion = {
    questionType: typeof QuestionType.TEXT_CLOCK
    value: ComponentProps<typeof TimeToHumanText>
}

type QuestionRendererProps =
    | AnalogClockQuestion
    | DigitalClockQuestion
    | TextClockQuestion

export type { QuestionRendererProps }

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
    questionType,
    value,
}) => {
    switch (questionType) {
        case QuestionType.ANALOG_CLOCK:
            return (
                <AnalogClock
                    {...(value as ComponentProps<typeof AnalogClock>)}
                />
            )
        case QuestionType.TEXT_CLOCK:
            return (
                <TimeToHumanText
                    {...(value as ComponentProps<typeof TimeToHumanText>)}
                />
            )
        default:
            throw new Error('Invalid question type')
    }
}
