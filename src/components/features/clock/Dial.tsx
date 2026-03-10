import clsx from 'clsx'
import React from 'react'

const isQuarter = (index: number) => {
    if (index % 15 === 0) {
        return true
    }
    return false
}
const isFive = (index: number) => {
    if (isQuarter(index)) {
        return false
    }

    if (index % 5 === 0) {
        return true
    }
    return false
}

export const Dial: React.FC = () => (
    <div className="absolute inset-1 text-lg font-extrabold text-gray-800 select-none">
        {[
            { num: 12, position: 'top-0 left-1/2 -translate-x-1/2' },
            { num: 3, position: 'right-0 top-1/2 -translate-y-1/2' },
            { num: 6, position: 'bottom-0 left-1/2 -translate-x-1/2' },
            { num: 9, position: 'left-0 top-1/2 -translate-y-1/2' },
        ].map(({ num, position }) => (
            <span
                key={num}
                className={`absolute ${position}`}
            >
                {num}
            </span>
        ))}
        {[
            { num: 1, position: 'top-[6%] right-[25%]' },
            { num: 2, position: 'top-[22%] right-[8%]' },
            { num: 4, position: 'bottom-[22%] right-[8%]' },
            { num: 5, position: 'bottom-[6%] right-[25%]' },
            { num: 7, position: 'bottom-[6%] left-[25%]' },
            { num: 8, position: 'bottom-[22%] left-[8%]' },
            { num: 10, position: 'top-[22%] left-[8%]' },
            { num: 11, position: 'top-[6%] left-[25%]' },
        ].map(({ num, position }) => (
            <span
                key={num}
                className={`absolute ${position} text-sm text-gray-600`}
            >
                {num}
            </span>
        ))}
        <div className="absolute inset-0 m-6 rounded-full border border-gray-400 p-2" />
        <div className="relative flex h-full w-full justify-center">
            {new Array(60).fill(0).map((_, index) => (
                <div
                    key={index}
                    className="absolute w-0.5 origin-bottom rounded-full transition-transform duration-700 ease-out"
                    style={{
                        height: '50%',
                        transform: `rotate(${index * 6}deg)`,
                    }}
                >
                    <div
                        className={clsx(
                            'absolute top-0 left-1/2 z-10 mt-6 w-0.5 -translate-x-1/2 rounded-full',
                            {
                                'h-2/18 w-0.5 bg-slate-800':
                                    !isQuarter(index) && !isFive(index),
                                'h-3/18 w-0.75 bg-red-400': isFive(index),
                                'h-4/18 w-1 bg-red-600': isQuarter(index),
                            },
                        )}
                    />
                </div>
            ))}
        </div>
    </div>
)
