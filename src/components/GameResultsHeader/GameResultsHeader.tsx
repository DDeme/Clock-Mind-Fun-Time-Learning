import { Trophy } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

interface GameResultsHeaderProps {
    totalScore: number
    maxScore: number
    userName: string
}

export const GameResultsHeader = ({
    totalScore,
    maxScore,
    userName,
}: GameResultsHeaderProps) => {
    const { t } = useTranslation()

    const getMessage = (totalScore: number, maxScore: number) => {
        const successPercentage = (totalScore / maxScore) * 100
        if (successPercentage >= 90) return t('result.outstanding')
        if (successPercentage >= 70) return t('result.greatJob')
        if (successPercentage >= 50) return t('result.goodEffort')
        return t('result.keepPracticing')
    }

    return (
        <header className="relative overflow-hidden rounded-b-[3rem] bg-blue-700 px-4 pt-4 pb-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="relative z-10 flex items-center justify-center gap-6"
            >
                <div className="rounded-full bg-white/20 p-4 shadow-inner backdrop-blur-md">
                    <Trophy className="h-12 w-12 fill-white/20 text-white" />
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-white">
                        {getMessage(totalScore, maxScore)}, {userName}!
                    </h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-3 rounded-full bg-white px-6 py-2 shadow-xl"
                    >
                        <span className="text-xl font-bold text-blue-700">
                            {t('common.stars')}: {totalScore}/{maxScore}
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </header>
    )
}
