import React from 'react'
import { motion } from 'motion/react'
import clsx from 'clsx'

export interface SkeletonProps {
    variant?: 'circle' | 'square' | 'text'
    width?: string | number
    height?: string | number
    className?: string
    animate?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'square',
    width,
    height,
    className,
    animate = true,
}) => {
    const baseClasses = clsx(
        'bg-gray-200',
        {
            rounded: variant === 'text',
            'rounded-full': variant === 'circle',
            'rounded-md': variant === 'square',
        },
        className,
    )

    const style = {
        height:
            height ||
            (variant === 'text'
                ? '1rem'
                : variant === 'circle'
                  ? '40px'
                  : '20px'),
        width: width || (variant === 'circle' ? '40px' : '100%'),
    }

    if (!animate) {
        return (
            <div
                className={baseClasses}
                style={style}
            />
        )
    }

    return (
        <motion.div
            className={baseClasses}
            style={style}
            animate={{
                opacity: [0.4, 1, 0.4],
            }}
            transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
            }}
        />
    )
}

export interface SkeletonLoaderProps {
    children?: React.ReactNode
    isLoading?: boolean
    className?: string
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
    children,
    isLoading = false,
    className,
}) => {
    if (!isLoading) {
        return <>{children}</>
    }

    return (
        <div className={clsx('space-y-3', className)}>
            <div className="flex items-center space-x-3">
                <Skeleton
                    variant="circle"
                    width={40}
                    height={40}
                />
                <div className="flex-1 space-y-2">
                    <Skeleton
                        variant="text"
                        width="60%"
                    />
                    <Skeleton
                        variant="text"
                        width="40%"
                    />
                </div>
            </div>
            <Skeleton
                variant="square"
                height={200}
            />
            <div className="space-y-2">
                <Skeleton variant="text" />
                <Skeleton
                    variant="text"
                    width="80%"
                />
                <Skeleton
                    variant="text"
                    width="65%"
                />
            </div>
        </div>
    )
}

export interface AnimatedSkeletonIconProps {
    type?: 'circle' | 'square'
    size?: number
    className?: string
    color?: string
}

export const AnimatedSkeletonIcon: React.FC<AnimatedSkeletonIconProps> = ({
    type = 'circle',
    size = 24,
    className,
    color = '#9CA3AF',
}) => {
    const svgPath =
        type === 'circle'
            ? `M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z`
            : `M4,4H20V20H4V4Z`

    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.path
                d={svgPath}
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                animate={{
                    opacity: [0.3, 1, 0.3],
                    pathLength: [0, 1],
                }}
                transition={{
                    opacity: {
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    },
                    pathLength: {
                        duration: 1.5,
                        ease: 'easeInOut',
                        repeat: Infinity,
                    },
                }}
            />
        </motion.svg>
    )
}

export default Skeleton
