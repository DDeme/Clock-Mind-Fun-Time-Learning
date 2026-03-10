import { motion } from 'motion/react'

import { Typography } from '../Typography'

export const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50">
            <motion.div
                className="flex flex-col items-center space-y-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    className="h-12 w-12 rounded-full border-4 border-blue-500 border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                />
                <Typography
                    variant="body"
                    color="muted"
                >
                    Loading...
                </Typography>
            </motion.div>
        </div>
    )
}
