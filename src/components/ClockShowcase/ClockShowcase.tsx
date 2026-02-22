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
    Home,
    Clock,
    HelpCircle,
    RefreshCcw,
    Play,
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
        <div className="flex flex-col min-h-screen bg-background-light font-sans text-slate-800">
            {/* Header */}
            <header className="flex items-center justify-between px-6 pt-8 pb-4">
                <button className="w-10 h-10 flex items-center justify-center rounded-full neumorphic-flat text-blue-500 active:neumorphic-inset transition-all">
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
                            className="text-[10px] font-bold text-orange-500 uppercase tracking-widest"
                        >
                            Manual Mode
                        </motion.span>
                    )}
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full neumorphic-flat text-blue-500 active:neumorphic-inset transition-all">
                    <Settings size={20} />
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 px-6 py-4 space-y-8 overflow-y-auto pb-24">
                {/* Digital Display Card */}
                <section className="flex flex-col items-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full py-10 rounded-3xl neumorphic-flat flex flex-col items-center justify-center border-4 border-white/50"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-500/60 mb-2">
                            Digital Time
                        </span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-7xl font-extrabold text-blue-500 glow-text tracking-tighter">
                                {displayHours}:{displayMinutes}
                            </span>
                            {!is24Hour && (
                                <span className="text-2xl font-bold text-blue-500/40 ml-2">
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
                                className="absolute -bottom-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold z-20 hover:bg-blue-500/90 transition-colors"
                            >
                                <RefreshCcw size={14} />
                                Sync to Live
                            </motion.button>
                        )}
                    </AnimatePresence>
                </section>

                {/* Analog Reference */}
                <section className="flex flex-col items-center space-y-4">
                    <div className="flex items-center justify-between w-full max-w-[256px]">
                        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                            Analog Reference
                        </h2>
                        <div className="text-[10px] font-bold text-slate-400 uppercase bg-slate-100 px-2 py-0.5 rounded">
                            Drag Hands
                        </div>
                    </div>

                    <div
                        ref={clockRef}
                        className="relative w-64 h-64 rounded-full clock-face flex items-center justify-center border-[12px] border-white touch-none"
                    >
                        {/* Clock Numbers */}
                        <div className="absolute inset-6 flex justify-center text-slate-400 font-bold select-none">
                            12
                        </div>
                        <div className="absolute inset-6 flex items-center justify-end text-slate-400 font-bold select-none">
                            3
                        </div>
                        <div className="absolute inset-6 flex items-end justify-center text-slate-400 font-bold select-none">
                            6
                        </div>
                        <div className="absolute inset-6 flex items-center justify-start text-slate-400 font-bold select-none">
                            9
                        </div>

                        {/* Clock Hands */}
                        {/* Hour Hand */}
                        <motion.div
                            className="absolute w-2 h-16 bg-slate-800 rounded-full origin-bottom mb-16 cursor-grab active:cursor-grabbing z-10"
                            animate={{ rotate: hourRotation }}
                            transition={
                                isDragging
                                    ? { type: 'just' }
                                    : { type: 'spring', stiffness: 50 }
                            }
                            onPanStart={() => setIsDragging(true)}
                            onPan={(e, info) => handlePan(e, info, 'hour')}
                            onPanEnd={() => setIsDragging(false)}
                        >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800/20" />
                        </motion.div>

                        {/* Minute Hand */}
                        <motion.div
                            className="absolute w-1.5 h-24 bg-blue-500 rounded-full origin-bottom mb-24 cursor-grab active:cursor-grabbing z-10"
                            animate={{ rotate: minuteRotation }}
                            transition={
                                isDragging
                                    ? { type: 'just' }
                                    : { type: 'spring', stiffness: 50 }
                            }
                            onPanStart={() => setIsDragging(true)}
                            onPan={(e, info) => handlePan(e, info, 'minute')}
                            onPanEnd={() => setIsDragging(false)}
                        >
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500/20" />
                        </motion.div>

                        <div className="w-4 h-4 bg-blue-500 rounded-full z-20 border-2 border-white shadow-sm"></div>
                    </div>
                </section>

                {/* Settings Toggles */}
                <section className="grid grid-cols-2 gap-4">
                    {/* AM/PM Display */}
                    <div className="p-4 rounded-2xl neumorphic-flat space-y-3">
                        <p className="text-xs font-bold text-slate-400 uppercase">
                            Period
                        </p>
                        <div className="flex p-1 bg-slate-200/30 rounded-xl neumorphic-inset">
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
                                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1 transition-all ${ampm === 'AM' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-500'}`}
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
                                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1 transition-all ${ampm === 'PM' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-500'}`}
                            >
                                <Moon size={14} />
                                <span className="text-sm font-bold">PM</span>
                            </button>
                        </div>
                    </div>

                    {/* 12h/24h Toggle */}
                    <div className="p-4 rounded-2xl neumorphic-flat space-y-3">
                        <p className="text-xs font-bold text-slate-400 uppercase">
                            Format
                        </p>
                        <div className="flex p-1 bg-slate-200/30 rounded-xl neumorphic-inset">
                            <button
                                onClick={() => setIs24Hour(false)}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${!is24Hour ? 'bg-blue-500 text-white shadow-md' : 'text-slate-500'}`}
                            >
                                12h
                            </button>
                            <button
                                onClick={() => setIs24Hour(true)}
                                className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${is24Hour ? 'bg-blue-500 text-white shadow-md' : 'text-slate-500'}`}
                            >
                                24h
                            </button>
                        </div>
                    </div>
                </section>

                {/* Educational Prompt */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-blue-500/10 rounded-3xl p-5 border border-blue-500/20 flex items-start gap-4"
                >
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                        <Lightbulb
                            size={20}
                            className="text-white"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-blue-500 text-sm">
                            Did you know?
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1">
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
