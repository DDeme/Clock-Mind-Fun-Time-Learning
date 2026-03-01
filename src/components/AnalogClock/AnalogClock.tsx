import React from 'react'
import { ClockHands } from './ClockHands'
import { Dial } from './Dial'

type AnalogClockProps = {
    hours: number
    minutes: number
    seconds?: number
    size?: number
    hideSeconds?: boolean
}

export const AnalogClock: React.FC<AnalogClockProps> = ({
    hours,
    minutes,
    seconds = 0,
    size = 280,
    hideSeconds = true,
}) => {
    // Calculate rotations

    return (
        <div
            className="clock-shadow relative flex items-center justify-center rounded-full border-10 border-white bg-white transition-all duration-500 ease-in-out"
            style={{ height: size, width: size }}
        >
            <Dial />
            <ClockHands
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                hideSeconds={hideSeconds}
            />
        </div>
    )
}
