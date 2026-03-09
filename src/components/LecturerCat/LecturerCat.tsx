import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { PixelCatDiorama } from '../PixelCatDiorama/index'

export const LecturerCat = () => {
    const [isMeowing, setIsMeowing] = useState(false)

    const handleMeow = () => {
        setIsMeowing(true)
        setTimeout(() => setIsMeowing(false), 2000)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#121220] p-4 text-white">
            <header className="mb-10 text-center">
                <h1 className="mb-3 text-xl tracking-[0.2em] text-[#F97316] md:text-2xl">
                    PIXEL CAT
                </h1>
                <p className="text-[9px] tracking-tighter text-gray-500">
                    DIORAMA COMPANION V1.1
                </p>
            </header>

            <PixelCatDiorama onMeow={handleMeow} />

            <footer className="mt-14 text-center">
                <button
                    onClick={handleMeow}
                    className="cursor-pointer border-b-4 border-[#9A3412] bg-[#EA580C] px-8 py-4 text-[10px] text-white transition-all hover:bg-[#F97316] active:translate-y-1 active:border-b-0"
                >
                    SAY HI
                </button>

                <div className="mt-8 h-4">
                    <AnimatePresence>
                        {isMeowing && (
                            <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-[10px] text-[#4ADE80]"
                            >
                                MEOW!
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </footer>
        </main>
    )
}
