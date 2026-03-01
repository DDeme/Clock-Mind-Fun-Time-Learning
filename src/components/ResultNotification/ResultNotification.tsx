import React from 'react'

type ResultNotificationProps = {
    isCorrect: boolean | null
    correctAnswer: string
    earnedStars: number
}

export const ResultNotification: React.FC<ResultNotificationProps> = ({
    isCorrect,
    correctAnswer,
    earnedStars,
}) => (
    <div
        className={`animate-slide-up flex flex-col gap-4`}
        role="alert"
        aria-live="assertive"
    >
        <div
            className={`flex items-center gap-3 rounded-xl p-4 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
        >
            <span
                className="material-symbols-outlined text-3xl"
                aria-hidden="true"
            >
                {isCorrect ? 'check_circle' : 'cancel'}
            </span>
            <div>
                <p className="text-lg font-black">
                    {isCorrect ? 'Amazing Job!' : 'Not Quite Right'}
                </p>
                <p className="text-sm opacity-80">
                    {isCorrect
                        ? `You earned +${earnedStars} stars!`
                        : `The correct answer was ${correctAnswer}`}
                </p>
            </div>
        </div>
    </div>
)
