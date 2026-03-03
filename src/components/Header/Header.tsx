import React from 'react'
import { useTranslation } from 'react-i18next'

type HeaderProps = {
    currentStep: number
    totalQuestions: number
    score: number
    onClose?: () => void
}

export const Header: React.FC<HeaderProps> = ({
    currentStep,
    totalQuestions,
    score,
    onClose,
}) => {
    const { t } = useTranslation()
    
    return (
        <header className="pt-6 pb-3">
            <div className="flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-transform active:scale-90"
                >
                    <span className="material-symbols-outlined text-slate-600">
                        close
                    </span>
                </button>

                <div className="mx-4 flex flex-1 flex-col items-center py-2">
                    <div
                        className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
                        role="progressbar"
                        aria-valuenow={currentStep}
                        aria-valuemin={0}
                        aria-valuemax={totalQuestions}
                        aria-label={t('game.progress', { current: currentStep, total: totalQuestions })}
                    >
                        <div
                            className="h-full rounded-full bg-blue-400 transition-all duration-500"
                            style={{
                                width: `${(currentStep / totalQuestions) * 100}%`,
                            }}
                        />
                    </div>
                    <span className="mt-1 text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                        {t('game.questionCounter', { current: currentStep, total: totalQuestions })}
                    </span>
                </div>

                <div
                    className="flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1"
                    role="status"
                    aria-label={t('game.score', { score })}
                >
                    <span
                        className="material-symbols-outlined text-xl text-blue-600"
                        aria-hidden="true"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        star
                    </span>
                    <span className="font-bold text-blue-600">{score}</span>
                </div>
            </div>
        </header>
    )
}
