import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button/Button'
import { motion } from 'motion/react'
import { Layout } from '../components/Layout'

export const IntroPage = () => {
    const navigate = useNavigate()

    const handleEnter = () => {
        navigate('/timeline')
    }

    return (
        <Layout hideNavigation>
            <div className="relative flex min-h-screen flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex max-w-md flex-col items-center space-y-8 text-center"
                >
                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl font-extrabold text-blue-600"
                    >
                        Clock Mind Fun
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg leading-relaxed text-slate-600"
                    >
                        Learn to tell time in a fun and interactive way!
                        Practice reading analog and digital clocks with engaging
                        games and challenges.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex w-full max-w-xs flex-col gap-4"
                    >
                        <Button
                            onClick={handleEnter}
                            variant="primary"
                        >
                            Enter Game
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </Layout>
    )
}
