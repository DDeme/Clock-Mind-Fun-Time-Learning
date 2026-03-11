import { Clock, Check, X } from 'lucide-react'
import { motion } from 'motion/react'
import { Card } from '../../../ui'

const MotionCard = motion(Card)

type ResultItem = {
    isCorrect: boolean
    id: string
}

type QuestionsResultProps = {
    results: ResultItem[]
    title: string
}

export const QuestionsResult = ({ results, title }: QuestionsResultProps) => {
    return (
        <section className="flex w-full flex-col">
            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800">{title}</h2>
                <button className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-600">
                    Tap to review
                </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
                {results.map((item, index) => (
                    <MotionCard
                        key={item.id}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        padding="none"
                        rounded="2xl"
                        border={false}
                        className={`relative flex aspect-square items-center justify-center border-2 bg-white ${
                            item.isCorrect
                                ? 'border-emerald-500'
                                : 'border-rose-500'
                        }`}
                    >
                        <Clock className="h-7 w-7 text-slate-700" />
                        <div
                            className={`absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-white shadow-md ${
                                item.isCorrect
                                    ? 'bg-emerald-500'
                                    : 'bg-rose-500'
                            }`}
                        >
                            {item.isCorrect ? (
                                <Check className="h-3 w-3 stroke-[4px]" />
                            ) : (
                                <X className="h-3 w-3 stroke-[4px]" />
                            )}
                        </div>
                    </MotionCard>
                ))}
            </div>
        </section>
    )
}
