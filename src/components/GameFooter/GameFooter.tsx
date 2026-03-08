import React from 'react'

import { ActionFooter } from '../ActionFooter'
import { CheckAnswer } from '../CheckAnswer'
import { ContinueButton } from '../ContinueButton'
import { FinishButton } from '../FinishButton'

type GameFooterProps = {
    isFeedbackVisible: boolean
    isCorrect: boolean | null
    isDisabled: boolean
    onCheckAnswer: () => void
    onNext: () => void
    feedback: React.ReactNode
    isLastQuestion: boolean
}

export const GameFooter: React.FC<GameFooterProps> = ({
    isFeedbackVisible,
    isCorrect,
    isDisabled,
    onCheckAnswer,
    onNext,
    feedback,
    isLastQuestion,
}) => (
    <ActionFooter>
        {isFeedbackVisible && feedback}

        {!isCorrect && !isFeedbackVisible && (
            <CheckAnswer
                isDisabled={isDisabled}
                onCheckAnswer={onCheckAnswer}
            />
        )}
        {isCorrect !== null && !isLastQuestion && (
            <ContinueButton onNext={onNext} />
        )}
        {isCorrect !== null && isLastQuestion && (
            <FinishButton
                onClick={onNext}
                isDisabled={isDisabled}
            />
        )}
    </ActionFooter>
)
