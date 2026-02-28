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
    <div className="grid grid-cols-2 gap-4 w-full">
        {options.map((option) => (
            <button
                key={formatTime(option)}
                onClick={() =>
                    onChange({
                        hours: Number(option.hours),
                        minutes: Number(option.minutes),
                    })
                }
                disabled={isDisabled}
                className={`
                  p-3 rounded-2xl border-2 transition-all duration-200 active:scale-95 text-center
                  ${
                      value?.hours === Number(option.hours) &&
                      value?.minutes === Number(option.minutes)
                          ? 'bg-blue-400/5 border-blue-400 shadow-md ring-4 ring-blue-200/10'
                          : 'bg-white  border-slate-100  shadow-sm hover:border-blue-500/40'
                  }
                  ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
                <span
                    className={`text-2xl font-bold ${value?.hours === Number(option.hours) && value?.minutes === Number(option.minutes) ? 'text-blue-400' : 'text-slate-700'}`}
                >
                    {formatTime(option)}
                </span>
            </button>
        ))}
    </div>
)
