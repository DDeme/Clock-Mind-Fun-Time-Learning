import { Trophy } from 'lucide-react'

interface ProgressHeaderProps {
    title: string
    level: string
    currentLessons: number
    totalLessons: number
}

export const ProgressHeader = ({
    title,
    level,
    currentLessons,
    totalLessons
}: ProgressHeaderProps) => {
    const progressPercentage = (currentLessons / totalLessons) * 100

    return (
        <header className="sticky top-0 z-20 flex flex-col gap-4 bg-white/80 px-6 pb-6 pt-12 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                        {title}
                    </h1>
                    <p className="text-sm font-medium text-slate-500">
                        {level}
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
                        {currentLessons} / {totalLessons} Lessons
                    </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-blue-500"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>
        </header>
    )
}
