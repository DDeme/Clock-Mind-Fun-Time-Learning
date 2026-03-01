import React from 'react'

type SingleChoiceProps = {
    options: {
        hours: number
        minutes: number
    }[]
    value: {
        hours: number
        minutes: number
    } | null
    onChange: (option: { hours: number; minutes: number }) => void
    isDisabled: boolean
}

const formatTime = (time: { hours: number; minutes: number }) => {
    const h = time.hours
    const m = time.minutes.toString().padStart(2, '0')
    return `${h}:${m}`
}

export const SingleChoice: React.FC<SingleChoiceProps> = ({
    options,
    value,
    onChange,
    isDisabled,
}) => (
    <div
        role="radiogroup"
        aria-label="Time options"
        className="grid w-full grid-cols-2 gap-4"
    >
        {options.map((option) => {
            const isSelected =
                value?.hours === Number(option.hours) &&
                value?.minutes === Number(option.minutes)
            const timeString = formatTime(option)

            return (
                <button
                    key={timeString}
                    role="radio"
                    aria-checked={isSelected}
                    aria-label={`Select ${timeString}`}
                    onClick={() =>
                        onChange({
                            hours: Number(option.hours),
                            minutes: Number(option.minutes),
                        })
                    }
                    disabled={isDisabled}
                    className={`rounded-2xl border-2 p-3 text-center transition-all duration-200 focus:ring-4 focus:ring-blue-400/50 focus:outline-none active:scale-95 ${
                        isSelected
                            ? 'border-blue-400 bg-blue-400/5 shadow-md ring-4 ring-blue-200/10'
                            : 'border-slate-100 bg-white shadow-sm hover:border-blue-500/40'
                    } ${isDisabled ? 'cursor-not-allowed opacity-50' : ''} `}
                >
                    <span
                        className={`text-2xl font-bold ${isSelected ? 'text-blue-400' : 'text-slate-700'}`}
                    >
                        {timeString}
                    </span>
                </button>
            )
        })}
    </div>
)
