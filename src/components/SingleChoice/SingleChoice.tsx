import React from 'react'
import { useTranslation } from 'react-i18next'

type SingleChoiceProps = {
    options: string[]
    value: string | null
    onChange: (option: string) => void
    isDisabled: boolean
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({
    options,
    value,
    onChange,
    isDisabled,
}) => {
    const { t } = useTranslation()

    return (
        <div
            role="radiogroup"
            aria-label={t('accessibility.timeOptions')}
            className="grid w-full grid-cols-2 gap-4"
        >
            {options.map((option) => {
                const isSelected = value === option
                return (
                    <button
                        key={option}
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={t('accessibility.selectTime', {
                            time: option,
                        })}
                        onClick={() => onChange(option)}
                        disabled={isDisabled}
                        className={`rounded-2xl border-2 p-3 text-center transition-all duration-200 focus:ring-4 focus:ring-blue-400/50 focus:outline-none active:scale-95 ${
                            isSelected
                                ? 'border-blue-400 bg-blue-400/5 shadow-md ring-4 ring-blue-200/10'
                                : 'border-slate-100 bg-white shadow-sm hover:border-blue-500/40'
                        } ${isDisabled ? 'cursor-not-allowed opacity-50' : ''} `}
                    >
                        <span
                            className={`text-2xl font-bold ${isSelected ? 'text-blue-600' : 'text-slate-700'}`}
                        >
                            {option}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
