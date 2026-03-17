import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { ClockHands } from './ClockHands'
import { Dial } from './Dial'

type AnalogClockProps = {
    hours: number
    minutes: number
    seconds?: number
    size?: number
    hideSeconds?: boolean
    draggable?: boolean
    time?: Date
    onChange?: (newTime: Date) => void
}

export const AnalogClock: React.FC<AnalogClockProps> = ({
    hours,
    minutes,
    seconds = 0,
    size = 280,
    hideSeconds = true,
    draggable = false,
    time,
    onChange,
}) => {
    const { t } = useTranslation()
    const [isDragging, setIsDragging] = useState(false)
    const clockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!draggable || !time) return
        const timer = setInterval(() => {
            if (!isDragging && onChange) {
                onChange(new Date())
            }
        }, 1000)
        return () => clearInterval(timer)
    }, [draggable, isDragging, onChange, time])

    const handlePan = (
        _event: unknown,
        info: { point: { x: number; y: number } },
        type: 'hour' | 'minute',
    ) => {
        if (!clockRef.current || !time || !onChange) return
        const rect = clockRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const x = info.point.x - centerX
        const y = info.point.y - centerY

        let angle = Math.atan2(y, x) * (180 / Math.PI) + 90
        if (angle < 0) angle += 360

        const newTime = new Date(time)
        if (type === 'minute') {
            const currentMinutes = newTime.getMinutes()
            const mins = Math.round(angle / 6) % 60
            newTime.setMinutes(mins)
            newTime.setSeconds(0)

            // Check if we crossed from near 60 to 0 (or vice versa)
            if (currentMinutes >= 55 && mins <= 5) {
                // Crossed from 59 to 00, increment hour
                const currentHour = newTime.getHours()
                newTime.setHours(currentHour + 1)
            } else if (currentMinutes <= 5 && mins >= 55) {
                // Crossed from 00 to 59, decrement hour
                const currentHour = newTime.getHours()
                newTime.setHours(currentHour - 1)
            }
        } else {
            const h = Math.floor(angle / 30) % 12
            const currentH = newTime.getHours()
            const isPM = currentH >= 12
            newTime.setHours(isPM ? (h === 0 ? 12 : h + 12) : h === 0 ? 0 : h)
        }
        onChange(newTime)
    }
    // Calculate rotations
    const formatTime = (h: number, m: number) => {
        const displayHours = h > 12 ? h - 12 : h === 0 ? 12 : h
        const displayMinutes = m.toString().padStart(2, '0')
        return `${displayHours}:${displayMinutes}`
    }

    const timeString = formatTime(hours, minutes)

    return (
        <div
            ref={clockRef}
            className="clock-shadow relative flex items-center justify-center rounded-full border-10 border-white bg-white transition-all duration-500 ease-in-out"
            style={{ height: size, width: size }}
            role="img"
            aria-label={t('accessibility.analogClockShowing', { time: timeString })}
            aria-describedby="clock-description"
        >
            <div
                id="clock-description"
                className="sr-only"
            >
                {t('accessibility.clockDescription', {
                    hours: hours > 12 ? hours - 12 : hours === 0 ? 12 : hours,
                    minutes,
                    time: timeString,
                })}
            </div>
            <Dial />
            <ClockHands
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                hideSeconds={hideSeconds}
                draggable={draggable}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
                onPan={handlePan}
            />
        </div>
    )
}
