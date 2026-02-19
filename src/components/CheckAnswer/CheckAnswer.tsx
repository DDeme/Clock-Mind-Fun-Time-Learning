import React from "react";

type CheckAnswerProps = {
  isDisabled: boolean;
  onCheckAnswer: () => void;
};

export const CheckAnswer: React.FC<CheckAnswerProps> = ({
  isDisabled,
  onCheckAnswer,
}) => (
  <button
    onClick={onCheckAnswer}
    disabled={isDisabled}
    className={`
              w-full font-extrabold py-5 rounded-2xl text-xl transition-all flex items-center justify-center gap-3 shadow-lg
              ${
                isDisabled
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/30 active:translate-y-1 active:shadow-none"
              }
            `}
  >
    CHECK ANSWER
    <span className="material-symbols-outlined font-bold">
      arrow_forward
    </span>
  </button>
);
