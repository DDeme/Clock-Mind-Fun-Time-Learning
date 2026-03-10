import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from '../../../ui'

type ContinueButtonProps = {
    onNext: () => void
}

export const ContinueButton: React.FC<ContinueButtonProps> = ({ onNext }) => {
    const { t } = useTranslation()

    return (
        <Button
            onClick={onNext}
            variant="dark"
        >
            {t('game.nextQuestion')}
        </Button>
    )
}
