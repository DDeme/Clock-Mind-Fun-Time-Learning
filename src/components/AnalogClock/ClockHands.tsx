import React, { useEffect } from "react";
import { CenterPin } from "./CenterPin";

type ClockHandsProps = {
  minutes: number;
  hours: number;
};

export const ClockHands: React.FC<ClockHandsProps> = ({ minutes, hours }) => {
  const [minuteRotation, setMinuteRotation] = React.useState(0);
  const [hourRotation, setHourRotation] = React.useState(12);

  useEffect(() => {
    setHourRotation((hours % 12) * 30 + minutes * 0.5);
  }, [hours, minutes]);

  useEffect(() => {
    setMinuteRotation(minutes * 6);
  }, [minutes]);

  return (
    <div className="relative w-full h-full flex justify-center">
      {/* Minute Hand */}
      <div
        className="absolute w-1.5 rounded-full  origin-bottom transition-transform duration-700 ease-out"
        style={{
          height: "50%",
          transform: `rotate(${minuteRotation}deg)`,
        }}
      >
        <div className="absolute w-1 h-7/12 rounded-full bg-blue-500 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-2"></div>
      </div>

      <div
        className="absolute w-2 rounded-full  origin-bottom transition-transform duration-700 ease-out"
        style={{
          transform: `rotate(${hourRotation}deg)`,
          height: "50%",
        }}
      >
        <div className="absolute w-2 h-4/12 rounded-full bg-slate-800 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-2"></div>
      </div>

      <CenterPin />
    </div>
  );
};
