import React from "react";

type MultipleChoiceProps = {
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
};

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  options,
  selectedOption,
  onSelectOption,
}) => (
  <div className="grid grid-cols-2 gap-4 w-full mb-12">
    {options.map((option) => (
      <button
        key={option}
        onClick={() => onSelectOption(option)}
        className={`
                  p-6 rounded-2xl border-2 transition-all duration-200 active:scale-95 text-center
                  ${
                    selectedOption === option
                      ? "bg-blue-400/5 border-blue-400 shadow-md ring-4 ring-blue-200/10"
                      : "bg-white  border-slate-100  shadow-sm hover:border-blue-500/40"
                  }
                `}
      >
        <span
          className={`text-3xl font-bold ${selectedOption === option ? "text-blue-400" : "text-slate-700"}`}
        >
          {option}
        </span>
      </button>
    ))}
  </div>
);
