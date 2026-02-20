import React from 'react'
import { CheckAnswer } from '../CheckAnswer'
import { ResultNotification } from '../ResultNotification'
import { ContinueButton } from '../ContinueButton'

type ActionFooterProps = {
    isFeedbackVisible: boolean
    isCorrect: boolean | null
    isDisabled: boolean
    correctTimeLabel: string
    onCheckAnswer: () => void
    onNext: () => void
}

export const ActionFooter: React.FC<ActionFooterProps> = ({
    isFeedbackVisible,
    isCorrect,
    isDisabled,
    correctTimeLabel,
    onCheckAnswer,
    onNext,
}) => (
    <footer className="w-full bg-white  border-t border-slate-100  z-20">
        {!isFeedbackVisible ? (
            <CheckAnswer
                isDisabled={isDisabled}
                onCheckAnswer={onCheckAnswer}
            />
        ) : (
            <div className={`flex flex-col gap-4 animate-slide-up`}>
                <ResultNotification
                    isCorrect={isCorrect}
                    correctTimeLabel={correctTimeLabel}
                />
                <ContinueButton onNext={onNext} />
            </div>
        )}
    </footer>
)
