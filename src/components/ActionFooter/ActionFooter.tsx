import React, { type PropsWithChildren } from 'react'
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
    <footer className="w-full bg-white  border-t border-slate-100 gap-4 flex flex-col z-20">
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
