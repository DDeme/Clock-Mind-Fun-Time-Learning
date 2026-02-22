import { Home, History, ClipboardCheck, User, Play } from 'lucide-react'
import { ProgressHeader } from '../ProgressHeader/ProgressHeader'
import { TimelineContent } from '../TimelineContent/TimelineContent'

export const TimelineProgress = () => {
    const lessons = [
        {
            id: 1,
            title: 'Clock Face',
            status: 'completed' as const,
            position: 'left' as const,
        },
        {
            id: 2,
            title: 'The Hour Hand',
            status: 'active' as const,
            position: 'right' as const,
            progress: 43,
        },
        {
            id: 3,
            title: 'Minute Hand',
            status: 'locked' as const,
            position: 'left' as const,
        },
        {
            id: 4,
            title: 'Half Past & Quarter',
            status: 'locked' as const,
            position: 'right' as const,
        },
        {
            id: 5,
            title: 'Seconds',
            status: 'locked' as const,
            position: 'left' as const,
        },
    ]

    return (
        <div className="font-display bg-background-light text-slate-900 antialiased min-h-screen flex justify-center">
            <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-linear-to-b from-accent-blue to-white shadow-2xl">
                <ProgressHeader
                    title="Clock Master"
                    level="Level 2: The Hour Hand"
                    currentLessons={3}
                    totalLessons={10}
                />

                <TimelineContent lessons={lessons} />

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
