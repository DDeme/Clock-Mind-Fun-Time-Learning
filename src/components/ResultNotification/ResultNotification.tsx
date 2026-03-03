import React from 'react'
import { useTranslation } from 'react-i18next'

type ResultNotificationProps = {
    isCorrect: boolean | null
    correctAnswer: string
    earnedStars: number
}

export const ResultNotification: React.FC<ResultNotificationProps> = ({
    isCorrect,
    correctAnswer,
    earnedStars,
}) => {
    const { t } = useTranslation()
    
    return (
        <div
            className={`animate-slide-up flex flex-col gap-4`}
            role="alert"
            aria-live="assertive"
        >
            <div
                className={`flex items-center gap-3 rounded-xl p-4 ${isCorrect ? 'bg-green-700 text-white' : 'bg-red-700 text-white'}`}
            >
                <span
                    className="material-symbols-outlined text-3xl"
                    aria-hidden="true"
                >
                    {isCorrect ? 'check_circle' : 'cancel'}
                </span>
                <div>
                    <p className="text-lg font-black">
                        {isCorrect ? t('result.success') : t('result.error')}
                    </p>
                    <p className="text-sm">
                        {isCorrect
                            ? t('result.earnedStars', { stars: earnedStars })
                            : t('result.correctAnswer', { answer: correctAnswer })}
                    </p>
                </div>
            </div>
        </div>
    )
}
