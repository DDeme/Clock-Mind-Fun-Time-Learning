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
    const formatTime = (h: number, m: number) => {
        const displayHours = h > 12 ? h - 12 : h
        const displayMinutes = m.toString().padStart(2, '0')
        return `${displayHours}:${displayMinutes}`
    }

    const timeString = formatTime(hours, minutes)

    return (
        <div
            className="clock-shadow relative flex items-center justify-center rounded-full border-10 border-white bg-white transition-all duration-500 ease-in-out"
            style={{ height: size, width: size }}
            role="img"
            aria-label={`Analog clock showing ${timeString}`}
            aria-describedby="clock-description"
        >
            <div
                id="clock-description"
                className="sr-only"
            >
                Clock face showing {timeString}. Hour hand pointing to{' '}
                {hours > 12 ? hours - 12 : hours}, minute hand pointing to{' '}
                {minutes}.
            </div>
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
