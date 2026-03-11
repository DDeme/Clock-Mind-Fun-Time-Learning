import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Card } from '../../../ui'

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

    const getGridCols = () => {
        const maxCharLength = getMaxCharLength(options)
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

    const getTextSize = () => {
        const maxCharLength = getMaxCharLength(options)
        if (maxCharLength >= 10) {
            return 'text-2xl'
        }
        return 'text-xl'
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
                    <Card
                        as="button"
                        key={option}
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={t('accessibility.selectTime', {
                            time: option,
                        })}
                        onClick={() => onChange(option)}
                        disabled={isDisabled}
                        padding="sm"
                        rounded="2xl"
                        border={false}
                        shadow={isSelected ? 'md' : 'sm'}
                        className={clsx(
                            'border-2 text-center transition-all duration-200 focus:ring-4 focus:ring-blue-400/50 focus:outline-none active:scale-95',
                            isSelected
                                ? 'border-blue-400 bg-blue-400/5 ring-4 ring-blue-200/10'
                                : 'border-slate-100 bg-white hover:border-blue-500/40',
                            isDisabled && 'cursor-not-allowed opacity-50',
                        )}
                    >
                        <span
                            className={clsx(
                                getTextSize(),
                                'font-bold',
                                isSelected ? 'text-blue-600' : 'text-slate-700',
                            )}
                        >
                            {option}
                        </span>
                    </Card>
                )
            })}
        </div>
    )
}
