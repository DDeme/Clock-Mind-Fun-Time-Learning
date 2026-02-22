import {
    Check,
    Clock,
    Lock,
    Flag,
} from 'lucide-react'

interface Lesson {
    id: number
    title: string
    status: 'completed' | 'active' | 'locked'
    position: 'left' | 'right'
    progress?: number
}

interface TimelineContentProps {
    lessons: Lesson[]
}

export const TimelineContent = ({ lessons }: TimelineContentProps) => {
    const renderLessonNode = (lesson: Lesson) => {
        switch (lesson.status) {
            case 'completed':
                return (
                    <div className="flex size-16 items-center justify-center rounded-full border-4 border-green-600 bg-white text-green-600 shadow-lg">
                        <Check className="size-8 stroke-3" />
                    </div>
                )
            case 'active':
                return (
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
                                strokeDashoffset={264 - (264 * (lesson.progress || 0)) / 100}
                                strokeWidth="6"
                            ></circle>
                        </svg>
                        <div className="flex size-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-[0_0_20px_rgba(19,127,236,0.4)]">
                            <Clock className="size-8" />
                        </div>
                    </div>
                )
            case 'locked':
                return (
                    <div className="flex size-14 items-center justify-center rounded-full border-4 border-slate-200 bg-slate-100 text-slate-400">
                        <Lock className="size-6" />
                    </div>
                )
            default:
                return null
        }
    }

    const renderLessonLabel = (lesson: Lesson) => {
        const positionClasses = lesson.position === 'left' 
            ? 'absolute left-[calc(50%+40px)] w-32 translate-y-2'
            : 'absolute right-[calc(50%+40px)] w-40 text-right translate-y-0'
        
        const textAlign = lesson.position === 'left' ? '' : 'text-right'

        let statusText = ''
        let statusColor = ''

        switch (lesson.status) {
            case 'completed':
                statusText = 'Finished!'
                statusColor = 'text-green-600'
                break
            case 'active':
                statusText = 'LEARNING...'
                statusColor = 'text-blue-500/60'
                break
            case 'locked':
                statusText = 'Locked'
                statusColor = 'text-slate-400'
                break
        }

        return (
            <div className={`${positionClasses} ${textAlign}`}>
                <span className={`block text-sm font-bold ${
                    lesson.status === 'completed' ? 'text-slate-800' : 
                    lesson.status === 'active' ? 'text-lg font-extrabold text-blue-500' : 
                    'text-slate-400'
                }`}>
                    {lesson.title}
                </span>
                <span className={`text-xs font-medium ${statusColor} ${
                    lesson.status === 'active' ? 'font-semibold uppercase tracking-wider' : ''
                }`}>
                    {statusText}
                </span>
            </div>
        )
    }

    return (
        <main className="relative flex-1 overflow-y-auto px-6 py-8">
            <div className="relative flex flex-col items-center">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full border-l-2 border-dashed border-slate-300"></div>

                {lessons.map((lesson) => (
                    <div key={lesson.id} className="relative mb-16 flex w-full items-center justify-center">
                        <div className="z-10 flex flex-col items-center">
                            {renderLessonNode(lesson)}
                            {renderLessonLabel(lesson)}
                        </div>
                    </div>
                ))}

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
    )
}
