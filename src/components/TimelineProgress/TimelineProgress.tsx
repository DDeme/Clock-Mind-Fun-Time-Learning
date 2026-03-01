import { Home, History, ClipboardCheck, User, Play } from 'lucide-react'
import { ProgressHeader } from '../ProgressHeader/ProgressHeader'
import { TimelineContent } from '../TimelineContent/TimelineContent'

export const TimelineProgress = () => {
    const lessons = [
        {
            id: 1,
            position: 'left' as const,
            status: 'completed' as const,
            title: 'Clock Face',
        },
        {
            id: 2,
            position: 'right' as const,
            progress: 43,
            status: 'active' as const,
            title: 'The Hour Hand',
        },
        {
            id: 3,
            position: 'left' as const,
            status: 'locked' as const,
            title: 'Minute Hand',
        },
        {
            id: 4,
            position: 'right' as const,
            status: 'locked' as const,
            title: 'Half Past & Quarter',
        },
        {
            id: 5,
            position: 'left' as const,
            status: 'locked' as const,
            title: 'Seconds',
        },
    ]

    return (
        <div className="font-display bg-background-light flex min-h-screen justify-center text-slate-900 antialiased">
            <div className="from-accent-blue relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-linear-to-b to-white shadow-2xl">
                <ProgressHeader
                    title="Clock Master"
                    level="Level 2: The Hour Hand"
                    currentLessons={3}
                    totalLessons={10}
                />

                <TimelineContent lessons={lessons} />

                {/* Dynamic Floating Action Button */}
                <button className="absolute right-6 bottom-28 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl transition-transform active:scale-95">
                    <Play className="size-6 fill-white" />
                </button>

                {/* Bottom Navigation Bar */}
                <nav className="sticky bottom-0 z-30 w-full border-t border-slate-200 bg-white/95 px-6 pt-4 pb-8 backdrop-blur-lg">
                    <div className="flex items-center justify-between gap-2">
                        {/* Home */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-blue-500">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                                <Home className="size-5 fill-blue-500" />
                            </div>
                            <span className="text-[10px] font-bold tracking-tight uppercase">
                                Home
                            </span>
                        </button>
                        {/* Practice */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-blue-500">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <History className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold tracking-tight uppercase">
                                Practice
                            </span>
                        </button>
                        {/* Quiz */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-blue-500">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <ClipboardCheck className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold tracking-tight uppercase">
                                Quiz
                            </span>
                        </button>
                        {/* Profile */}
                        <button className="flex flex-1 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-blue-500">
                            <div className="flex h-10 w-10 items-center justify-center">
                                <User className="size-5" />
                            </div>
                            <span className="text-[10px] font-bold tracking-tight uppercase">
                                Me
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}
