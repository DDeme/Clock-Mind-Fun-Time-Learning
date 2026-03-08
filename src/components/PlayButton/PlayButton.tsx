import { Play } from 'lucide-react'
import { useNavigate } from 'react-router'

interface PlayButtonProps {
    onClick?: () => void
    ariaLabel?: string
}

export const PlayButton = ({
    onClick,
    ariaLabel = 'Start lesson',
}: PlayButtonProps) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (onClick) {
            onClick()
        } else {
            navigate('/game')
        }
    }

    return (
        <div className="fixed bottom-40 left-0 z-40 w-full">
            <div className="bg-background-light relative mx-auto flex max-w-md flex-col items-end px-10">
                <button
                    data-testid="play-button"
                    aria-label={ariaLabel}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white shadow-xl transition-transform active:scale-95"
                    onClick={handleClick}
                >
                    <Play className="size-6 fill-white" />
                </button>
            </div>
        </div>
    )
}
