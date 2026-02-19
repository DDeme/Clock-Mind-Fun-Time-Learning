import React from "react";

export const Dial: React.FC = () => (
  <div className="absolute inset-4 text-slate-400 font-extrabold text-lg select-none">
    {[
      { num: 12, position: "top-0 left-1/2 -translate-x-1/2" },
      { num: 3, position: "right-0 top-1/2 -translate-y-1/2" },
      { num: 6, position: "bottom-0 left-1/2 -translate-x-1/2" },
      { num: 9, position: "left-0 top-1/2 -translate-y-1/2" },
    ].map(({ num, position }) => (
      <span key={num} className={`absolute ${position}`}>
        {num}
      </span>
    ))}
    {[
      { num: 1, position: "top-[6%] right-[25%]" },
      { num: 2, position: "top-[22%] right-[8%]" },
      { num: 4, position: "bottom-[22%] right-[8%]" },
      { num: 5, position: "bottom-[6%] right-[25%]" },
      { num: 7, position: "bottom-[6%] left-[25%]" },
      { num: 8, position: "bottom-[22%] left-[8%]" },
      { num: 10, position: "top-[22%] left-[8%]" },
      { num: 11, position: "top-[6%] left-[25%]" },
    ].map(({ num, position }) => (
      <span key={num} className={`absolute ${position} text-sm opacity-60`}>
        {num}
      </span>
    ))}
  </div>
);
