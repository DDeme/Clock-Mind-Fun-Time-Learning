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
        <div className="w-full rounded-2xl border border-blue-400/5 bg-white p-6 shadow-xl">
            <div className="flex items-center justify-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <label
                        className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
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
                        className={`bg-background-light h-15 w-20 rounded-xl border-2 border-blue-400/20 text-center text-3xl font-black text-blue-400 transition-all outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
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
                <div className="mt-6 text-4xl font-bold text-slate-300">:</div>
                <div className="flex flex-col items-center gap-2">
                    <label
                        className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase"
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
                        className={`bg-background-light h-15 w-20 rounded-xl border-2 border-blue-400/20 text-center text-3xl font-black text-blue-400 transition-all outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 ${isDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
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
