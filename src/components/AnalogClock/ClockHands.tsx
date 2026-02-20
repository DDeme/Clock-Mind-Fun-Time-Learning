import React, { useEffect } from "react";
import { CenterPin } from "./CenterPin";

type ClockHandsProps = {
    minutes: number;
    hours: number;
    seconds: number;
    hideSeconds?: boolean;
};

export const ClockHands: React.FC<ClockHandsProps> = ({
    minutes,
    hours,
    seconds,
    hideSeconds = false,
}) => {
    const [minuteRotation, setMinuteRotation] = React.useState(0);
    const [hourRotation, setHourRotation] = React.useState(12);
    const [secondRotation, setSecondRotation] = React.useState(0);

    useEffect(() => {
        setHourRotation((hours % 12) * 30 + minutes * 0.5);
    }, [hours, minutes]);

    useEffect(() => {
        setMinuteRotation(minutes * 6);
    }, [minutes]);

    useEffect(() => {
        setSecondRotation(seconds * 6);
    }, [seconds]);

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
                <div className="absolute w-1 h-6/12 rounded-full bg-blue-500 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-2"></div>
            </div>

            <div
                className="absolute w-2 rounded-full origin-bottom transition-transform duration-700 ease-out"
                style={{
                    transform: `rotate(${hourRotation}deg)`,
                    height: "50%",
                }}
            >
                <div className="absolute w-2 h-4/12 rounded-full bg-slate-800 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-2"></div>
            </div>
            {!hideSeconds && (
                <div
                    className="absolute w-1 rounded-full  origin-bottom transition-transform duration-700 ease-out"
                    style={{
                        transform: `rotate(${secondRotation}deg)`,
                        height: "50%",
                    }}
                >
                    <div className="absolute w-0.5 h-8/12 rounded-full bg-red-500 bottom-0 left-1/2 -translate-x-1/2 z-10 mb-2 opacity-50"></div>
                </div>
            )}

            <CenterPin />
        </div>
    );
};
