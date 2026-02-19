import React from "react";
import type { QuestionType } from "../Game/Game";
import { MultipleChoice } from "./MultipleChoice";

type AnswersProps = {
  mode: QuestionType;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  userInputHours: string;
  onChangeHours: (value: string) => void;
  userInputMinutes: string;
  onChangeMinutes: (value: string) => void;
};

export const Answers: React.FC<AnswersProps> = ({
  mode,
  options,
  selectedOption,
  onSelectOption,
  userInputHours,
  onChangeHours,
  userInputMinutes,
  onChangeMinutes,
}) => (
  <>
    {mode === "multiple-choice" ? (
      <MultipleChoice
        options={options}
        selectedOption={selectedOption}
        onSelectOption={onSelectOption}
      />
    ) : (
      <div className="w-full bg-white  rounded-2xl p-6 shadow-xl border border-primary/5 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              Hours
            </label>
            <input
              type="number"
              min="1"
              max="12"
              value={userInputHours}
              onChange={(e) => onChangeHours(e.target.value)}
              placeholder="--"
              className="w-20 h-20 text-center text-3xl font-black bg-background-light  border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl text-primary transition-all outline-none"
            />
          </div>
          <div className="text-4xl font-bold text-slate-300  mt-6">:</div>
          <div className="flex flex-col items-center gap-2">
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
              Minutes
            </label>
            <input
              type="number"
              min="0"
              max="59"
              value={userInputMinutes}
              onChange={(e) => onChangeMinutes(e.target.value)}
              placeholder="--"
              className="w-20 h-20 text-center text-3xl font-black bg-background-light  border-2 border-primary/20 focus:border-primary focus:ring-4 focus:ring-primary/10 rounded-xl text-primary transition-all outline-none"
            />
          </div>
        </div>
      </div>
    )}
  </>
);
