import { Home, History, ClipboardCheck, User } from 'lucide-react'

export const BottomNavigation = () => {
    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className="sticky bottom-0 z-30 w-full border-t border-slate-200 bg-white/95 px-6 pt-4 pb-8 backdrop-blur-lg"
        >
            <div className="flex items-center justify-between gap-2">
                {/* Home */}
                <button
                    aria-label="Go to home"
                    className="flex flex-1 flex-col items-center gap-1 text-blue-600"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10">
                        <Home className="size-5 fill-blue-500" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight uppercase">
                        Home
                    </span>
                </button>
                {/* Practice */}
                <button
                    aria-label="View practice exercises"
                    className="flex flex-1 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                    <div className="flex h-10 w-10 items-center justify-center">
                        <History className="size-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight uppercase">
                        Practice
                    </span>
                </button>
                {/* Quiz */}
                <button
                    aria-label="Take quiz"
                    className="flex flex-1 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                    <div className="flex h-10 w-10 items-center justify-center">
                        <ClipboardCheck className="size-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight uppercase">
                        Quiz
                    </span>
                </button>
                {/* Profile */}
                <button
                    aria-label="View profile"
                    className="flex flex-1 flex-col items-center gap-1 text-slate-500 transition-colors hover:text-blue-600"
                >
                    <div className="flex h-10 w-10 items-center justify-center">
                        <User className="size-5" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight uppercase">
                        Me
                    </span>
                </button>
            </div>
        </nav>
    )
}
