import React from 'react'
import imgUrl from '../../assets/pixel-cat.svg'

type MascotBubbleProps = {
    message: string
}

export const MascotBubble: React.FC<MascotBubbleProps> = ({ message }) => {
    return (
        <div
            className="animate-bounce-slow mx-auto flex w-full max-w-sm items-start gap-3"
            role="status"
            aria-live="polite"
        >
            <div className="relative flex-1 rounded-2xl border border-blue-400/10 bg-white px-5 py-3 shadow-lg">
                <p className="text-sm font-semibold text-slate-700">
                    {message}
                </p>
                <div
                    className="absolute top-5 -right-1 h-4 w-4 rotate-45 border-r border-b border-blue-400/10 bg-white"
                    aria-hidden="true"
                ></div>
            </div>
            <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-400/20 shadow-md">
                <img
                    alt="Friendly redhead cat mascot"
                    src={imgUrl}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}
