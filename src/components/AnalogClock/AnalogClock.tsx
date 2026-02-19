import React from "react";
import { ClockHands } from "./ClockHands";
import { Dial } from "./Dial";

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

  return (
    <div
      className="relative rounded-full border-10 border-white  bg-white  clock-shadow flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ width: size, height: size }}
    >
      <Dial />

      <ClockHands hours={hours} minutes={minutes} />
    </div>
  );
};
