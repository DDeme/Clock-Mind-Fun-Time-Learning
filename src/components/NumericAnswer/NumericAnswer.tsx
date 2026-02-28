type value = {
    hours: number
    minutes: number
}

type NumericAnswerProps = {
    options: number[][]
    value: value
    onChange: (value: value) => void
    isDisabled: boolean
}

export const NumericAnswer = ({
    options,
    value,
    onChange,
    isDisabled,
}: NumericAnswerProps) => {
    return (
        <div className="w-full bg-white rounded-2xl p-6 shadow-xl border border-blue-400/5">
            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <label
                        className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest"
                        htmlFor="hours"
                    >
                        Hours
                    </label>
                    <select
                        value={value?.hours}
                        onChange={(e) =>
                            onChange({
                                hours: Number(e.target.value),
                                minutes: value?.minutes,
                            })
                        }
                        id="hours"
                        disabled={isDisabled}
                        className={`w-20 h-15 text-center text-3xl font-black bg-background-light border-2 border-blue-400/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 rounded-xl text-blue-400 transition-all outline-none ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <option value="">--</option>
                        {options[0].map((hour) => (
                            <option
                                key={hour}
                                value={hour}
                            >
                                {hour}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="text-4xl font-bold text-slate-300 mt-6">:</div>
                <div className="flex flex-col items-center gap-2">
                    <label
                        className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest"
                        htmlFor="minutes"
                    >
                        Minutes
                    </label>
                    <select
                        value={value?.minutes}
                        disabled={isDisabled}
                        onChange={(e) =>
                            onChange({
                                hours: value?.hours,
                                minutes: Number(e.target.value),
                            })
                        }
                        id="minutes"
                        className={`w-20 h-15 text-center text-3xl font-black bg-background-light border-2 border-blue-400/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 rounded-xl text-blue-400 transition-all outline-none ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <option value="">--</option>
                        {options[1].map((minute) => (
                            <option
                                key={minute}
                                value={minute}
                            >
                                {minute}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
