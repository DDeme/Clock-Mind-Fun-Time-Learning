import React from "react";

export const Dial: React.FC = () => (
  <div className="absolute inset-4 text-slate-400 font-extrabold text-lg select-none">
    <span className="absolute top-0 left-1/2 -translate-x-1/2">12</span>
    <span className="absolute right-0 top-1/2 -translate-y-1/2">3</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2">6</span>
    <span className="absolute left-0 top-1/2 -translate-y-1/2">9</span>

    {/* Subtle intermediate numbers */}
    {[
      { num: 1, position: "top-[10%] right-[22%]" },
      { num: 2, position: "top-[25%] right-[8%]" },
      { num: 4, position: "bottom-[25%] right-[8%]" },
      { num: 5, position: "bottom-[10%] right-[22%]" },
      { num: 7, position: "bottom-[10%] left-[22%]" },
      { num: 8, position: "bottom-[25%] left-[8%]" },
      { num: 10, position: "top-[25%] left-[8%]" },
      { num: 11, position: "top-[10%] left-[22%]" },
    ].map(({ num, position }) => (
      <span key={num} className={`absolute ${position} text-sm opacity-60`}>
        {num}
      </span>
    ))}
  </div>
);
