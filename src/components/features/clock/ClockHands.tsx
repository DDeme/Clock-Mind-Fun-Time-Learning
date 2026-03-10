import React, { useLayoutEffect, useRef } from 'react'

import { CenterPin } from './CenterPin'

type ClockHandsProps = {
    minutes: number
    hours: number
    seconds: number
    hideSeconds?: boolean
}

export const ClockHands: React.FC<ClockHandsProps> = ({
    minutes,
    hours,
    seconds,
    hideSeconds = false,
}) => {
    const [minuteRotation, setMinuteRotation] = React.useState(0)
    const [hourRotation, setHourRotation] = React.useState(12)
    const [secondRotation, setSecondRotation] = React.useState(0)

    const prevHourRotation = useRef(12)
    const prevMinuteRotation = useRef(0)
    const prevSecondRotation = useRef(0)

    useLayoutEffect(() => {
        const targetRotation = (hours % 12) * 30 + minutes * 0.5
        const currentRotation = prevHourRotation.current

        // Calculate the shortest path for smooth animation
        const diff = targetRotation - currentRotation
        const absDiff = Math.abs(diff)

        let newRotation
        if (absDiff <= 180) {
            // Short path is direct
            newRotation = targetRotation
        } else if (diff > 0) {
            // Going forward but long path, go backward instead
            newRotation = targetRotation - 360
        } else {
            // Going backward but long path, go forward instead
            newRotation = targetRotation + 360
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setHourRotation(newRotation)
        prevHourRotation.current = newRotation
    }, [hours, minutes])

    useLayoutEffect(() => {
        const targetRotation = minutes * 6
        const currentRotation = prevMinuteRotation.current

        // Calculate the shortest path for smooth animation
        const diff = targetRotation - currentRotation
        const absDiff = Math.abs(diff)

        let newRotation
        if (absDiff <= 180) {
            // Short path is direct
            newRotation = targetRotation
        } else if (diff > 0) {
            // Going forward but long path, go backward instead
            newRotation = targetRotation - 360
        } else {
            // Going backward but long path, go forward instead
            newRotation = targetRotation + 360
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMinuteRotation(newRotation)
        prevMinuteRotation.current = newRotation
    }, [minutes])

    useLayoutEffect(() => {
        const targetRotation = seconds * 6
        const currentRotation = prevSecondRotation.current

        // Calculate the shortest path for smooth animation
        const diff = targetRotation - currentRotation
        const absDiff = Math.abs(diff)

        let newRotation
        if (absDiff <= 180) {
            // Short path is direct
            newRotation = targetRotation
        } else if (diff > 0) {
            // Going forward but long path, go backward instead
            newRotation = targetRotation - 360
        } else {
            // Going backward but long path, go forward instead
            newRotation = targetRotation + 360
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSecondRotation(newRotation)
        prevSecondRotation.current = newRotation
    }, [seconds])

    return (
        <div className="relative flex h-full w-full justify-center">
            {/* Minute Hand */}
            <div
                className="absolute w-1.5 origin-bottom rounded-full transition-transform duration-700 ease-out"
                style={{
                    height: '50%',
                    transform: `rotate(${minuteRotation}deg)`,
                }}
            >
                <div className="absolute bottom-0 left-1/2 z-10 mb-2 h-6/12 w-1 -translate-x-1/2 rounded-full bg-blue-500"></div>
            </div>

            <div
                className="absolute w-2 origin-bottom rounded-full transition-transform duration-700 ease-out"
                style={{
                    height: '50%',
                    transform: `rotate(${hourRotation}deg)`,
                }}
            >
                <div className="absolute bottom-0 left-1/2 z-10 mb-2 h-4/12 w-2 -translate-x-1/2 rounded-full bg-slate-800"></div>
            </div>
            {!hideSeconds && (
                <div
                    className="absolute w-1 origin-bottom rounded-full transition-transform duration-700 ease-out"
                    style={{
                        height: '50%',
                        transform: `rotate(${secondRotation}deg)`,
                    }}
                >
                    <div className="absolute bottom-0 left-1/2 z-10 mb-2 h-8/12 w-0.5 -translate-x-1/2 rounded-full bg-red-500 opacity-50"></div>
                </div>
            )}

            <CenterPin />
        </div>
    )
}
