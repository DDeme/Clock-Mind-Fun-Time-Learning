import React from "react";
type HeaderProps = {
  currentQuestionIdx: number;
  totalQuestions: number;
  score: number;
  onClose?: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  currentQuestionIdx,
  totalQuestions,
  score,
}) => {
  return (
    <header className="px-6 pt-10 pb-4">
      <div className="flex items-center justify-center mb-6">
        {/* <button
          onClick={onClose}
          className="flex items-center justify-center size-10 rounded-full bg-white  shadow-sm border border-slate-200  active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-slate-600 ">
            close
          </span>
        </button> */}

        <div className="flex flex-col items-center flex-1 mx-4 py-2">
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-400 transition-all duration-500 rounded-full"
              style={{
                width: `${(currentQuestionIdx / totalQuestions) * 100}%`,
              }}
            />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-500 uppercase tracking-widest">
            Question {currentQuestionIdx} of {totalQuestions}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
          <span
            className="material-symbols-outlined text-blue-400 text-xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="font-bold text-blue-400">{score}</span>
        </div>
      </div>
    </header>
  );
};
