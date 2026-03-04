import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../Button'

type FinishButtonProps = {
    onClick: () => void
    isDisabled: boolean
}

export const FinishButton: React.FC<FinishButtonProps> = ({
    onClick,
    isDisabled,
}) => {
    const { t } = useTranslation()

    return (
        <Button
            onClick={onClick}
            disabled={isDisabled}
            variant="success"
        >
            {t('game.finishGame')}
        </Button>
    )
}
