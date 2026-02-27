import React from 'react'
import imgUrl from '../../assets/pixel-cat.svg'

type MascotBubbleProps = {
    message: string
}

export const MascotBubble: React.FC<MascotBubbleProps> = ({ message }) => {
    return (
        <div className="flex items-start gap-3 w-full max-w-sm mx-auto animate-bounce-slow">
            <div className="relative bg-white  px-5 py-3 rounded-2xl shadow-lg border border-blue-400/10 flex-1">
                <p className="text-sm font-semibold text-slate-700">
                    {message}
                </p>
                <div className="absolute top-5 -right-1 w-4 h-4 bg-white  rotate-45 border-b border-r border-blue-400/10"></div>
            </div>
            <div className="size-16 rounded-full bg-blue-400/20 flex items-center justify-center overflow-hidden border-2 border-white  shadow-md shrink-0">
                <img
                    alt="Friendly redhead cat mascot"
                    src={imgUrl}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}
