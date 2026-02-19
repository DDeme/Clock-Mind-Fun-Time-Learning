import React from "react";

type ActionFooterProps = {
  isFeedbackVisible: boolean;
  isCorrect: boolean | null;
  isDisabled: boolean;
  correctTimeLabel: string;
  onCheckAnswer: () => void;
  onNext: () => void;
};

export const ActionFooter: React.FC<ActionFooterProps> = ({
  isFeedbackVisible,
  isCorrect,
  isDisabled,
  correctTimeLabel,
  onCheckAnswer,
  onNext,
}) => (
  <footer className="p-6 pb-4 bg-white  border-t border-slate-100  z-20">
    {!isFeedbackVisible ? (
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
    ) : (
      <div className={`flex flex-col gap-4 animate-slide-up`}>
        <div
          className={`flex items-center gap-3 p-4 rounded-xl ${isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          <span className="material-symbols-outlined text-3xl">
            {isCorrect ? "check_circle" : "cancel"}
          </span>
          <div>
            <p className="font-black text-lg">
              {isCorrect ? "Amazing Job!" : "Not Quite Right"}
            </p>
            <p className="text-sm opacity-80">
              {isCorrect
                ? "You earned +20 stars!"
                : `The correct time was ${correctTimeLabel}`}
            </p>
          </div>
        </div>
        <button
          onClick={onNext}
          className="w-full bg-slate-900 d text-white  font-extrabold py-5 rounded-2xl text-xl shadow-xl active:scale-95 transition-transform"
        >
          CONTINUE
        </button>
      </div>
    )}
  </footer>
);
