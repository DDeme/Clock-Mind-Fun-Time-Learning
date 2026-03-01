/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react'
import {
    ChevronLeft,
    Settings,
    Sun,
    Moon,
    Lightbulb,
    RefreshCcw,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export const ClockShowcase = () => {
    const [time, setTime] = useState(new Date())
    const [is24Hour, setIs24Hour] = useState(false)
    const [activeTab, setActiveTab] = useState('home')
    const [isManual, setIsManual] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const clockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isManual || isDragging) return
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [isManual, isDragging])

    const hours = time.getHours()
    const minutes = time.getMinutes()

    const displayHours = is24Hour
        ? hours.toString().padStart(2, '0')
        : (hours % 12 || 12).toString()

    const displayMinutes = minutes.toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'

    // Analog clock rotations
    const hourRotation = (hours % 12) * 30 + minutes * 0.5
    const minuteRotation = minutes * 6

    const handlePan = (event: any, info: any, type: 'hour' | 'minute') => {
        if (!clockRef.current) return
        const rect = clockRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const x = info.point.x - centerX
        const y = info.point.y - centerY

        let angle = Math.atan2(y, x) * (180 / Math.PI) + 90
        if (angle < 0) angle += 360

        const newTime = new Date(time)
        if (type === 'minute') {
            const mins = Math.round(angle / 6) % 60
            newTime.setMinutes(mins)
            newTime.setSeconds(0)
        } else {
            const h = Math.floor(angle / 30) % 12
            const currentH = newTime.getHours()
            const isPM = currentH >= 12
            newTime.setHours(isPM ? (h === 0 ? 12 : h + 12) : h === 0 ? 0 : h)
        }
        setTime(newTime)
        setIsManual(true)
    }

    const resetToLive = () => {
        setIsManual(false)
        setTime(new Date())
    }

    return (
        <div className="bg-background-light flex min-h-screen flex-col font-sans text-slate-800">
            {/* Header */}
            <header className="flex items-center justify-between px-6 pt-8 pb-4">
                <button
                    aria-label="Go back"
                    className="neumorphic-flat active:neumorphic-inset flex h-10 w-10 items-center justify-center rounded-full text-blue-700 transition-all"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-800">
                        Digital Clock
                    </h1>
                    {isManual && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold tracking-widest text-slate-600 uppercase"
                        >
                            Manual Mode
                        </motion.span>
                    )}
                </div>
                <button
                    aria-label="Settings"
                    className="neumorphic-flat active:neumorphic-inset flex h-10 w-10 items-center justify-center rounded-full text-blue-700 transition-all"
                >
                    <Settings size={20} />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 space-y-8 overflow-y-auto px-6 py-4 pb-24">
                {/* Digital Display Card */}
                <section className="relative flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="neumorphic-flat flex w-full flex-col items-center justify-center rounded-3xl border-4 border-white/50 py-10"
                    >
                        <span className="mb-2 text-xs font-bold tracking-widest text-blue-800 uppercase">
                            Digital Time
                        </span>
                        <div className="flex items-baseline gap-1">
                            <span className="glow-text text-7xl font-extrabold tracking-tighter text-blue-800">
                                {displayHours}:{displayMinutes}
                            </span>
                            {!is24Hour && (
                                <span className="ml-2 text-2xl font-bold text-blue-800">
                                    {ampm}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    <AnimatePresence>
                        {isManual && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                onClick={resetToLive}
                                className="absolute -bottom-4 z-20 flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-xs font-bold text-white shadow-lg transition-colors hover:bg-blue-800"
                            >
                                <RefreshCcw size={14} />
                                Sync to Live
                            </motion.button>
                        )}
                    </AnimatePresence>
                </section>

                {/* Analog Reference */}
                <section className="flex flex-col items-center space-y-4">
                    <div className="flex w-full max-w-[256px] items-center justify-between">
                        <h2 className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                            Analog Reference
                        </h2>
                        <div className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                            Drag Hands
                        </div>
                    </div>

                    <div
                        ref={clockRef}
                        className="clock-face relative flex h-64 w-64 touch-none items-center justify-center rounded-full border-12 border-white"
                    >
                        {/* Clock Numbers */}
                        <div className="absolute inset-6 flex justify-center font-bold text-slate-800 select-none">
                            12
                        </div>
                        <div className="absolute inset-6 flex items-center justify-end font-bold text-slate-800 select-none">
                            3
                        </div>
                        <div className="absolute inset-6 flex items-end justify-center font-bold text-slate-800 select-none">
                            6
                        </div>
                        <div className="absolute inset-6 flex items-center justify-start font-bold text-slate-800 select-none">
                            9
                        </div>

                        {/* Clock Hands */}
                        {/* Hour Hand */}
                        <motion.div
                            className="absolute z-10 mb-16 h-16 w-2 origin-bottom cursor-grab rounded-full bg-slate-800 active:cursor-grabbing"
                            animate={{ rotate: hourRotation }}
                            transition={
                                isDragging
                                    ? { type: 'just' }
                                    : { stiffness: 50, type: 'spring' }
                            }
                            onPanStart={() => setIsDragging(true)}
                            onPan={(e, info) => handlePan(e, info, 'hour')}
                            onPanEnd={() => setIsDragging(false)}
                        >
                            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-slate-800/20" />
                        </motion.div>

                        {/* Minute Hand */}
                        <motion.div
                            className="absolute z-10 mb-24 h-24 w-1.5 origin-bottom cursor-grab rounded-full bg-blue-500 active:cursor-grabbing"
                            animate={{ rotate: minuteRotation }}
                            transition={
                                isDragging
                                    ? { type: 'just' }
                                    : { stiffness: 50, type: 'spring' }
                            }
                            onPanStart={() => setIsDragging(true)}
                            onPan={(e, info) => handlePan(e, info, 'minute')}
                            onPanEnd={() => setIsDragging(false)}
                        >
                            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blue-500/20" />
                        </motion.div>

                        <div className="z-20 h-4 w-4 rounded-full border-2 border-white bg-blue-500 shadow-sm"></div>
                    </div>
                </section>

                {/* Settings Toggles */}
                <section className="grid grid-cols-2 gap-4">
                    {/* AM/PM Display */}
                    <div className="neumorphic-flat space-y-3 rounded-2xl p-4">
                        <p className="text-xs font-bold text-slate-600 uppercase">
                            Period
                        </p>
                        <div className="neumorphic-inset flex rounded-xl bg-slate-200/30 p-1">
                            <button
                                onClick={() => {
                                    const newTime = new Date(time)
                                    if (newTime.getHours() >= 12)
                                        newTime.setHours(
                                            newTime.getHours() - 12,
                                        )
                                    setTime(newTime)
                                    setIsManual(true)
                                }}
                                className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 transition-all ${ampm === 'AM' ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                <Sun size={14} />
                                <span className="text-sm font-bold">AM</span>
                            </button>
                            <button
                                onClick={() => {
                                    const newTime = new Date(time)
                                    if (newTime.getHours() < 12)
                                        newTime.setHours(
                                            newTime.getHours() + 12,
                                        )
                                    setTime(newTime)
                                    setIsManual(true)
                                }}
                                className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 transition-all ${ampm === 'PM' ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                <Moon size={14} />
                                <span className="text-sm font-bold">PM</span>
                            </button>
                        </div>
                    </div>

                    {/* 12h/24h Toggle */}
                    <div className="neumorphic-flat space-y-3 rounded-2xl p-4">
                        <p className="text-xs font-bold text-slate-600 uppercase">
                            Format
                        </p>
                        <div className="neumorphic-inset flex rounded-xl bg-slate-200/30 p-1">
                            <button
                                onClick={() => setIs24Hour(false)}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${!is24Hour ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                12h
                            </button>
                            <button
                                onClick={() => setIs24Hour(true)}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${is24Hour ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                24h
                            </button>
                        </div>
                    </div>
                </section>

                {/* Educational Prompt */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 rounded-3xl border border-blue-500/20 bg-blue-500/10 p-5"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30">
                        <Lightbulb
                            size={20}
                            className="text-white"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-blue-700">
                            Did you know?
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                            {minutes === 45
                                ? 'When the big hand points to 9, it\'s "quarter to" the next hour!'
                                : minutes === 15
                                  ? 'When the big hand points to 3, it\'s "quarter past" the hour!'
                                  : minutes === 30
                                    ? 'When the big hand points to 6, it\'s "half past" the hour!'
                                    : 'The short hand shows the hour, and the long hand shows the minutes!'}
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}
