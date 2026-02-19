type NumericAnswerProps = {
  hoursValue: number;
  minutesValue: number;
  onHoursChange: (value: string) => void;
  onMinutesChange: (value: string) => void;
};

export const NumericAnswer = ({
  hoursValue,
  minutesValue,
  onHoursChange,
  onMinutesChange,
}: NumericAnswerProps) => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-xl border border-blue-400/5 mb-12">
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            Hours
          </label>
          <input
            type="number"
            min="1"
            max="12"
            value={hoursValue}
            onChange={(e) => onHoursChange(e.target.value)}
            placeholder="--"
            className="w-20 h-20 text-center text-3xl font-black bg-background-light border-2 border-blue-400/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 rounded-xl text-blue-400 transition-all outline-none"
          />
        </div>
        <div className="text-4xl font-bold text-slate-300 mt-6">:</div>
        <div className="flex flex-col items-center gap-2">
          <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
            Minutes
          </label>
          <input
            type="number"
            min="0"
            max="59"
            value={minutesValue}
            onChange={(e) => onMinutesChange(e.target.value)}
            placeholder="--"
            className="w-20 h-20 text-center text-3xl font-black bg-background-light border-2 border-blue-400/20 focus:border-blue-400 focus:ring-4 focus:ring-blue-400/10 rounded-xl text-blue-400 transition-all outline-none"
          />
        </div>
      </div>
    </div>
  );
};
