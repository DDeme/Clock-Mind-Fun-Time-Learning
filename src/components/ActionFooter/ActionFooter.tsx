import React from 'react'
import { CheckAnswer } from '../CheckAnswer'
import { ContinueButton } from '../ContinueButton'

type ActionFooterProps = {
    isFeedbackVisible: boolean
    isCorrect: boolean | null
    isDisabled: boolean
    onCheckAnswer: () => void
    onNext: () => void
    feedback: React.ReactNode
}

export const ActionFooter: React.FC<ActionFooterProps> = ({
    isFeedbackVisible,
    isCorrect,
    isDisabled,
    onCheckAnswer,
    onNext,
    feedback,
}) => (
    <footer className="z-20 flex w-full flex-col gap-4 border-t border-slate-100 bg-white">
        {isFeedbackVisible && feedback}
        {!isCorrect && !isFeedbackVisible && (
            <CheckAnswer
                isDisabled={isDisabled}
                onCheckAnswer={onCheckAnswer}
            />
        )}
        {isCorrect !== null && <ContinueButton onNext={onNext} />}
    </footer>
)
