import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'

type SingleChoiceProps = {
    options: string[]
    value: string | null
    onChange: (option: string) => void
    isDisabled: boolean
}

const getMaxCharLength = (options: string[]): number => {
    return options.reduce((max, option) => Math.max(max, option.length), 0)
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({
    options,
    value,
    onChange,
    isDisabled,
}) => {
    const { t } = useTranslation()
    const maxCharLength = getMaxCharLength(options)

    console.log(maxCharLength)

    const getGridCols = () => {
        if (maxCharLength >= 10) {
            return 'grid-cols-1'
        }

        if (maxCharLength <= 3) {
            return `grid-cols-${options.length > 12 ? 12 : options.length}`
        }
        if ([3, 5, 7, 9].includes(options.length)) {
            return 'grid-cols-1'
        }
        return 'grid-cols-2'
    }

    return (
        <div
            role="radiogroup"
            aria-label={t('accessibility.timeOptions')}
            className={clsx('grid w-full gap-4', getGridCols())}
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
                        className={clsx(
                            'rounded-2xl border-2 p-3 text-center transition-all duration-200 focus:ring-4 focus:ring-blue-400/50 focus:outline-none active:scale-95',
                            isSelected
                                ? 'border-blue-400 bg-blue-400/5 shadow-md ring-4 ring-blue-200/10'
                                : 'border-slate-100 bg-white shadow-sm hover:border-blue-500/40',
                            isDisabled && 'cursor-not-allowed opacity-50',
                        )}
                    >
                        <span
                            className={clsx(
                                maxCharLength >= 18 ? 'text-xl' : 'text-2xl',
                                'font-bold',
                                isSelected ? 'text-blue-600' : 'text-slate-700',
                            )}
                        >
                            {option}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
