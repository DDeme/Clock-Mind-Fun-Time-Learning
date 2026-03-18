import {
    ChevronLeft,
    Settings,
    Sun,
    Moon,
    Lightbulb,
    RefreshCcw,
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { AnalogClock } from '../AnalogClock'

export const ClockShowcase = () => {
    const { t } = useTranslation()
    const [time, setTime] = useState(new Date())
    const [is24Hour, setIs24Hour] = useState(false)
    const [isManual, setIsManual] = useState(false)

    useEffect(() => {
        if (isManual) return
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [isManual])

    const hours = time.getHours()
    const minutes = time.getMinutes()

    const displayHours = is24Hour
        ? hours.toString().padStart(2, '0')
        : (hours % 12 || 12).toString()

    const displayMinutes = minutes.toString().padStart(2, '0')
    const ampm = hours >= 12 ? t('clock.pm') : t('clock.am')

    const resetToLive = () => {
        setIsManual(false)
        setTime(new Date())
    }

    const getEducationalText = () => {
        if (minutes === 45) return t('clock.educational.quarterTo')
        if (minutes === 15) return t('clock.educational.quarterPast')
        if (minutes === 30) return t('clock.educational.halfPast')
        return t('clock.educational.default')
    }

    return (
        <div className="bg-background-light flex min-h-screen flex-col font-sans text-slate-800">
            {/* Header */}
            <header className="flex items-center justify-between px-6 pt-8 pb-4">
                <button
                    aria-label={t('accessibility.goBack')}
                    className="neumorphic-flat active:neumorphic-inset flex h-10 w-10 items-center justify-center rounded-full text-blue-700 transition-all"
                >
                    <ChevronLeft size={20} />
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-extrabold tracking-tight text-slate-800">
                        {t('clock.digitalTime')}
                    </h1>
                    {isManual && (
                        <motion.span
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[10px] font-bold tracking-widest text-slate-600 uppercase"
                        >
                            {t('clock.manualMode')}
                        </motion.span>
                    )}
                </div>
                <button
                    aria-label={t('accessibility.settings')}
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
                            {t('clock.digitalTime')}
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
                                {t('clock.syncToLive')}
                            </motion.button>
                        )}
                    </AnimatePresence>
                </section>

                {/* Analog Reference */}
                <section className="flex flex-col items-center space-y-4">
                    <div className="flex w-full max-w-[256px] items-center justify-between">
                        <h2 className="text-sm font-bold tracking-widest text-slate-600 uppercase">
                            {t('clock.analogReference')}
                        </h2>
                        <div className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600 uppercase">
                            {t('clock.dragHands')}
                        </div>
                    </div>

                    <AnalogClock
                        hours={hours}
                        minutes={minutes}
                        seconds={time.getSeconds()}
                        size={256}
                        hideSeconds={true}
                        draggable={true}
                        time={time}
                        onChange={(newTime) => {
                            setTime(newTime)
                            setIsManual(true)
                        }}
                    />
                </section>

                {/* Settings Toggles */}
                <section className="grid grid-cols-2 gap-4">
                    {/* AM/PM Display */}
                    <div className="neumorphic-flat space-y-3 rounded-2xl p-4">
                        <p className="text-xs font-bold text-slate-600 uppercase">
                            {t('clock.time')}
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
                                className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 transition-all ${ampm === t('clock.am') ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                <Sun size={14} />
                                <span className="text-sm font-bold">
                                    {t('clock.am')}
                                </span>
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
                                className={`flex flex-1 items-center justify-center gap-1 rounded-lg py-2 transition-all ${ampm === t('clock.pm') ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                <Moon size={14} />
                                <span className="text-sm font-bold">
                                    {t('clock.pm')}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* 12h/24h Toggle */}
                    <div className="neumorphic-flat space-y-3 rounded-2xl p-4">
                        <p className="text-xs font-bold text-slate-600 uppercase">
                            {t('settings.difficulty')}
                        </p>
                        <div className="neumorphic-inset flex rounded-xl bg-slate-200/30 p-1">
                            <button
                                onClick={() => setIs24Hour(false)}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${!is24Hour ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                {t('clock.format12h')}
                            </button>
                            <button
                                onClick={() => setIs24Hour(true)}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${is24Hour ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600'}`}
                            >
                                {t('clock.format24h')}
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
                            {t('clock.didYouKnow')}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-slate-600">
                            {getEducationalText()}
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    )
}
