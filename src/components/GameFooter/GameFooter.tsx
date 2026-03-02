import React from 'react'

import { ActionFooter } from '../ActionFooter'
import { CheckAnswer } from '../CheckAnswer'
import { ContinueButton } from '../ContinueButton'

type GameFooterProps = {
    isFeedbackVisible: boolean
    isCorrect: boolean | null
    isDisabled: boolean
    onCheckAnswer: () => void
    onNext: () => void
    feedback: React.ReactNode
}

export const GameFooter: React.FC<GameFooterProps> = ({
    isFeedbackVisible,
    isCorrect,
    isDisabled,
    onCheckAnswer,
    onNext,
    feedback,
}) => (
    <ActionFooter>
        {isFeedbackVisible && feedback}
        {!isCorrect && !isFeedbackVisible && (
            <CheckAnswer
                isDisabled={isDisabled}
                onCheckAnswer={onCheckAnswer}
            />
        )}
        {isCorrect !== null && <ContinueButton onNext={onNext} />}
    </ActionFooter>
)
