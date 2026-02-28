import React, { type ComponentProps } from 'react'
import { AnalogClock } from '../AnalogClock/AnalogClock'

const QuestionType = {
    ANALOG_CLOCK: 'analog-clock',
    DIGITAL_CLOCK: 'digital-clock',
} as const

type AnalogClockQuestion = {
    questionType: typeof QuestionType.ANALOG_CLOCK
    value: ComponentProps<typeof AnalogClock>
}

type DigitalClockQuestion = {
    questionType: typeof QuestionType.DIGITAL_CLOCK
    value: ComponentProps<typeof AnalogClock>
}

type QuestionRendererProps = AnalogClockQuestion | DigitalClockQuestion

export type { QuestionRendererProps }

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({
    questionType,
    value,
}) => {
    if (questionType === QuestionType.ANALOG_CLOCK) {
        return (
            <AnalogClock {...(value as ComponentProps<typeof AnalogClock>)} />
        )
    }

    throw new Error('Invalid question type')
}
