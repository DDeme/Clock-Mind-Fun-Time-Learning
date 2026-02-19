import React from "react";

type ContinueButtonProps = {
  onNext: () => void;
};

export const ContinueButton: React.FC<ContinueButtonProps> = ({ onNext }) => (
  <button
    onClick={onNext}
    className="w-full bg-slate-900 d text-white  font-extrabold py-5 rounded-2xl text-xl shadow-xl active:scale-95 transition-transform"
  >
    CONTINUE
  </button>
);
