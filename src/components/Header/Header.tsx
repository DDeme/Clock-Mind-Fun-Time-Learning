import React from 'react'

type HeaderProps = {
    currentQuestionIdx: number
    totalQuestions: number
    score: number
    onClose?: () => void
}

export const Header: React.FC<HeaderProps> = ({
    currentQuestionIdx,
    totalQuestions,
    score,
}) => {
    return (
        <header className="pb-3">
            <div className="flex items-center justify-center">
                {/* <button
          onClick={onClose}
          className="flex items-center justify-center size-10 rounded-full bg-white  shadow-sm border border-slate-200  active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-slate-600 ">
            close
          </span>
        </button> */}

                <div className="mx-4 flex flex-1 flex-col items-center py-2">
                    <div
                        className="h-3 w-full overflow-hidden rounded-full bg-slate-200"
                        role="progressbar"
                        aria-valuenow={currentQuestionIdx}
                        aria-valuemin={0}
                        aria-valuemax={totalQuestions}
                        aria-label={`Progress: ${currentQuestionIdx} of ${totalQuestions} questions completed`}
                    >
                        <div
                            className="h-full rounded-full bg-blue-400 transition-all duration-500"
                            style={{
                                width: `${(currentQuestionIdx / totalQuestions) * 100}%`,
                            }}
                        />
                    </div>
                    <span className="mt-1 text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                        Question {currentQuestionIdx} of {totalQuestions}
                    </span>
                </div>

                <div
                    className="flex items-center gap-1 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1"
                    role="status"
                    aria-label={`Score: ${score} points`}
                >
                    <span
                        className="material-symbols-outlined text-xl text-blue-600"
                        aria-hidden="true"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        star
                    </span>
                    <span className="font-bold text-blue-600">{score}</span>
                </div>
            </div>
        </header>
    )
}
