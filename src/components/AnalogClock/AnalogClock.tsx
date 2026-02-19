import React from "react";

type AnalogClockProps = {
  hours: number;
  minutes: number;
  size?: number;
};

export const AnalogClock: React.FC<AnalogClockProps> = ({
  hours,
  minutes,
  size = 280,
}) => {
  // Calculate rotations
  const minuteRotation = minutes * 6; // 360 / 60
  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + 30 / 60 per minute

  return (
    <div
      className="relative rounded-full border-10 border-white  bg-white  clock-shadow flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ width: size, height: size }}
    >
      {/* Numbers */}
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

      {/* Clock Hands Container */}
      <div className="relative w-full h-full flex justify-center">
        {/* Minute Hand */}
        <div
          className="absolute w-1.5 rounded-full  origin-bottom transition-transform duration-700 ease-out"
          style={{
            height: "50%",
            transform: `rotate(${minuteRotation}deg)`,
            // top: "50%",
          }}
        >
          <div className="absolute w-1 h-8/12 rounded-full bg-slate-800 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-0.5"></div>
        </div>
        {/* <div
          className="absolute w-1.5 rounded-full bg-slate-800 origin-bottom transition-transform duration-700 ease-out"
          style={{
            height: size * 0.35,
            transform: `translateY(-50%) rotate(${minuteRotation}deg)`,
            top: "50%",
          }}
        /> */}

        {/* Hour Hand */}
        <div
          className="absolute w-2 rounded-full  origin-bottom transition-transform duration-700 ease-out"
          style={{
            transform: `rotate(${hourRotation}deg)`,
            height: "50%",
          }}
        >
          <div className="absolute w-2 h-5/12 rounded-full bg-slate-800 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-0.5"></div>
        </div>

        {/* Center Pin */}
        <div className="absolute w-4 h-4 bg-primary border-4 border-white  rounded-full z-10 shadow-md" />
      </div>
    </div>
  );
};
