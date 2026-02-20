import {
    Trophy,
    Check,
    Clock,
    Lock,
    Flag,
    Home,
    History,
    ClipboardCheck,
    User,
    Play,
} from 'lucide-react'

export const TimelineProgress = () => {
    return (
        <div className="font-display bg-background-light text-slate-900 antialiased min-h-screen flex justify-center">
            <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-linear-to-b from-accent-blue to-white shadow-2xl">
                {/* Header Section */}
                <header className="sticky top-0 z-20 flex flex-col gap-4 bg-white/80 px-6 pb-6 pt-12 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                                Clock Master
                            </h1>
                            <p className="text-sm font-medium text-slate-500">
                                Level 2: The Hour Hand
                            </p>
                        </div>
                        <div className="flex size-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                            <Trophy className="size-6" />
                        </div>
                    </div>

                    {/* Progress Summary Card */}
                    <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-700">
                                Overall Progress
                            </span>
                            <span className="text-sm font-bold text-blue-500">
                                3 / 10 Lessons
                            </span>
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                            <div
                                className="h-full rounded-full bg-blue-500"
                                style={{ width: '30%' }}
                            ></div>
                        </div>
                    </div>
                </header>

                {/* Timeline Scroll Area */}
                <main className="relative flex-1 overflow-y-auto px-6 py-8">
                    <div className="relative flex flex-col items-center">
                        {/* Central Vertical Line */}
                        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full border-l-2 border-dashed border-slate-300"></div>

                        {/* Lesson 1: Completed */}
                        <div className="relative mb-16 flex w-full items-center justify-center">
                            <div className="z-10 flex flex-col items-center">
                                <div className="flex size-16 items-center justify-center rounded-full border-4 border-green-600 bg-white text-green-600 shadow-lg">
                                    <Check className="size-8 stroke-3" />
                                </div>
                                <div className="absolute left-[calc(50%+40px)] w-32 translate-y-2">
                                    <span className="block text-sm font-bold text-slate-800">
                                        Clock Face
                                    </span>
                                    <span className="text-xs font-medium text-green-600">
                                        Finished!
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson 2: Current (Active) */}
                        <div className="relative mb-16 flex w-full items-center justify-center">
                            <div className="z-10 flex flex-col items-center">
                                {/* Progress Ring Container */}
                                <div className="relative flex size-24 items-center justify-center">
                                    <svg className="absolute size-full -rotate-90">
                                        <circle
                                            className="text-blue-500/20"
                                            cx="48"
                                            cy="48"
                                            fill="none"
                                            r="42"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                        ></circle>
                                        <circle
                                            className="text-blue-500"
                                            cx="48"
                                            cy="48"
                                            fill="none"
                                            r="42"
                                            stroke="currentColor"
                                            strokeDasharray="264"
                                            strokeDashoffset="150"
                                            strokeWidth="6"
                                        ></circle>
                                    </svg>
                                    <div className="flex size-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_0_20px_rgba(19,127,236,0.4)]">
                                        <Clock className="size-8" />
                                    </div>
                                </div>
                                <div className="absolute right-[calc(50%+50px)] w-36 text-right translate-y-0">
                                    <span className="block text-lg font-extrabold text-blue-500">
                                        The Hour Hand
                                    </span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-500/60">
                                        LEARNING...
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson 3: Locked */}
                        <div className="relative mb-16 flex w-full items-center justify-center">
                            <div className="z-10 flex flex-col items-center">
                                <div className="flex size-14 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-slate-400">
                                    <Lock className="size-6" />
                                </div>
                                <div className="absolute left-[calc(50%+40px)] w-32">
                                    <span className="block text-sm font-bold text-slate-400">
                                        Minute Hand
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">
                                        Locked
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson 4: Locked */}
                        <div className="relative mb-16 flex w-full items-center justify-center">
                            <div className="z-10 flex flex-col items-center">
                                <div className="flex size-14 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-slate-400">
                                    <Lock className="size-6" />
                                </div>
                                <div className="absolute right-[calc(50%+40px)] w-40 text-right">
                                    <span className="block text-sm font-bold text-slate-400">
                                        Half Past & Quarter
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">
                                        Locked
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Lesson 5: Locked */}
                        <div className="relative mb-16 flex w-full items-center justify-center">
                            <div className="z-10 flex flex-col items-center">
                                <div className="flex size-14 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-slate-400">
                                    <Lock className="size-6" />
                                </div>
                                <div className="absolute left-[calc(50%+40px)] w-32">
                                    <span className="block text-sm font-bold text-slate-400">
                                        Seconds
                                    </span>
                                    <span className="text-xs font-medium text-slate-400">
                                        Locked
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Final Destination */}
                        <div className="relative flex w-full flex-col items-center pb-24">
                            <div className="z-10 flex size-20 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-slate-300">
                                <Flag className="size-8" />
                            </div>
                            <span className="mt-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                                Graduation
                            </span>
                        </div>
                    </div>
                </main>

                {/* Dynamic Floating Action Button */}
                <button className="absolute bottom-28 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl active:scale-95 transition-transform">
                    <Play className="size-6 fill-white" />
                </button>

                {/* Bottom Navigation Bar */}
                <nav className="sticky bottom-0 z-30 w-full border-t border-slate-200 bg-white/95 px-6 pb-8 pt-4 backdrop-blur-lg">
                    <div className="flex items-center justify-between gap-2">
                        {/* Home */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-blue-500">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                                <Home className="size-5 fill-blue-500" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight">
                                Home
                            </span>
                        </button>
                        {/* Practice */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <History className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight">
                                Practice
                            </span>
                        </button>
                        {/* Quiz */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <ClipboardCheck className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight">
                                Quiz
                            </span>
                        </button>
                        {/* Profile */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <User className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-tight">
                                Me
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
