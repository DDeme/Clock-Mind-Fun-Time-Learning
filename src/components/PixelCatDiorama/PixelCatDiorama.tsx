import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

type PixelCatDioramaProps = {
    onMeow?: () => void
    className?: string
}

export const PixelCatDiorama: React.FC<PixelCatDioramaProps> = ({
    onMeow: _onMeow,
    className = '',
}) => {
    const [blink, setBlink] = useState(false)

    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setBlink(true)
            setTimeout(() => setBlink(false), 150)
        }, 4000)
        return () => clearInterval(blinkInterval)
    }, [])

    return (
        <section
            className={`diorama-frame flex aspect-square w-full max-w-[400px] items-center justify-center overflow-visible ${className}`}
        >
            <div className="diorama-floor" />
            <div className="cat-shadow-oval" />

            <div className="relative z-10 h-64 w-64 overflow-visible drop-shadow-[0_12px_0_rgba(0,0,0,0.5)]">
                <svg
                    viewBox="0 0 16 16"
                    className="h-full w-full"
                    style={{ shapeRendering: 'crispEdges' }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Tail */}
                    <motion.g
                        animate={{ rotate: [0, 5, 0, -5, 0] }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            repeat: Infinity,
                        }}
                        style={{ originX: '13px', originY: '11px' }}
                    >
                        <rect
                            x="13"
                            y="10"
                            width="1"
                            height="1"
                            fill="#D97706"
                        />
                        <rect
                            x="14"
                            y="9"
                            width="1"
                            height="2"
                            fill="#D97706"
                        />
                        <rect
                            x="15"
                            y="7"
                            width="1"
                            height="3"
                            fill="#F59E0B"
                        />
                        <rect
                            x="14"
                            y="6"
                            width="1"
                            height="1"
                            fill="#F59E0B"
                        />
                    </motion.g>

                    {/* Body */}
                    <rect
                        x="4"
                        y="9"
                        width="9"
                        height="5"
                        fill="#D97706"
                    />
                    <rect
                        x="5"
                        y="10"
                        width="7"
                        height="3"
                        fill="#F59E0B"
                    />

                    {/* Legs */}
                    <rect
                        x="4"
                        y="14"
                        width="2"
                        height="1"
                        fill="#78350F"
                    />
                    <rect
                        x="11"
                        y="14"
                        width="2"
                        height="1"
                        fill="#78350F"
                    />

                    {/* Head */}
                    <rect
                        x="3"
                        y="4"
                        width="8"
                        height="7"
                        fill="#F59E0B"
                    />

                    {/* Ears */}
                    <rect
                        x="3"
                        y="3"
                        width="2"
                        height="1"
                        fill="#D97706"
                    />
                    <rect
                        x="9"
                        y="3"
                        width="2"
                        height="1"
                        fill="#D97706"
                    />

                    {/* Eyes */}
                    <g>
                        <motion.rect
                            animate={{ height: blink ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                            x="4"
                            y="6"
                            width="1"
                            height="1"
                            fill="#000"
                        />
                        <motion.rect
                            animate={{ height: blink ? 0.1 : 1 }}
                            transition={{ duration: 0.1 }}
                            x="9"
                            y="6"
                            width="1"
                            height="1"
                            fill="#000"
                        />
                    </g>

                    {/* Nose */}
                    <rect
                        x="6"
                        y="8"
                        width="2"
                        height="1"
                        fill="#FECACA"
                    />

                    {/* Details */}
                    <rect
                        x="4"
                        y="4"
                        width="1"
                        height="1"
                        fill="#D97706"
                    />
                    <rect
                        x="6"
                        y="4"
                        width="2"
                        height="1"
                        fill="#D97706"
                    />
                    <rect
                        x="10"
                        y="4"
                        width="1"
                        height="1"
                        fill="#D97706"
                    />
                </svg>
            </div>
        </section>
    )
}
