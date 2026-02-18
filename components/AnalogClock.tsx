
import React from 'react';

interface AnalogClockProps {
  hours: number;
  minutes: number;
  size?: number;
}

const AnalogClock: React.FC<AnalogClockProps> = ({ hours, minutes, size = 280 }) => {
  // Calculate rotations
  const minuteRotation = minutes * 6; // 360 / 60
  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 + 30 / 60 per minute

  return (
    <div 
      className="relative rounded-full border-[10px] border-white dark:border-slate-800 bg-white dark:bg-slate-900 clock-shadow flex items-center justify-center transition-all duration-500 ease-in-out"
      style={{ width: size, height: size }}
    >
      {/* Numbers */}
      <div className="absolute inset-4 text-slate-400 font-extrabold text-lg select-none">
        <span className="absolute top-0 left-1/2 -translate-x-1/2">12</span>
        <span className="absolute right-0 top-1/2 -translate-y-1/2">3</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2">6</span>
        <span className="absolute left-0 top-1/2 -translate-y-1/2">9</span>
        
        {/* Subtle intermediate numbers */}
        <span className="absolute top-[10%] right-[22%] text-sm opacity-30">1</span>
        <span className="absolute top-[25%] right-[8%] text-sm opacity-30">2</span>
        <span className="absolute bottom-[25%] right-[8%] text-sm opacity-30">4</span>
        <span className="absolute bottom-[10%] right-[22%] text-sm opacity-30">5</span>
        <span className="absolute bottom-[10%] left-[22%] text-sm opacity-30">7</span>
        <span className="absolute bottom-[25%] left-[8%] text-sm opacity-30">8</span>
        <span className="absolute top-[25%] left-[8%] text-sm opacity-30">10</span>
        <span className="absolute top-[10%] left-[22%] text-sm opacity-30">11</span>
      </div>

      {/* Clock Hands Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Minute Hand */}
        <div 
          className="absolute w-1.5 rounded-full bg-primary origin-bottom transition-transform duration-700 ease-out"
          style={{ 
            height: size * 0.35, 
            transform: `translateY(-50%) rotate(${minuteRotation}deg)`,
            top: '50%'
          }}
        />

        {/* Hour Hand */}
        <div 
          className="absolute w-2.5 rounded-full bg-slate-800 dark:bg-slate-200 origin-bottom transition-transform duration-700 ease-out"
          style={{ 
            height: size * 0.25, 
            transform: `translateY(-50%) rotate(${hourRotation}deg)`,
            top: '50%'
          }}
        />

        {/* Center Pin */}
        <div className="absolute w-4 h-4 bg-primary border-4 border-white dark:border-slate-800 rounded-full z-10 shadow-md" />
      </div>
    </div>
  );
};

export default AnalogClock;
