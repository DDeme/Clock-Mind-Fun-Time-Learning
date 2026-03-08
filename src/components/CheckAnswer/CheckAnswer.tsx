import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../Button'

type CheckAnswerProps = {
    isDisabled: boolean
    onCheckAnswer: () => void
}

export const CheckAnswer: React.FC<CheckAnswerProps> = ({
    isDisabled,
    onCheckAnswer,
}) => {
    const { t } = useTranslation()

    return (
        <Button
            onClick={onCheckAnswer}
            disabled={isDisabled}
            variant="primary"
        >
            {t('game.checkAnswer')}
            <span className="material-symbols-outlined font-bold">
                arrow_forward
            </span>
        </Button>
    )
}
