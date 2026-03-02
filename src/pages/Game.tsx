import { useCallback } from 'react'
import { useNavigate } from 'react-router'

import { Game } from '../components/Game'
import { useGameData } from '../hooks/useGameData'

const GamePage = () => {
    const navigate = useNavigate()

    const { data, isSuccess } = useGameData('1')

    const handleComplete = useCallback(
        (score: number) => {
            navigate('/results', { state: { score } })
        },
        [navigate],
    )
    return (
        isSuccess && (
            <Game
                {...data}
                onComplete={handleComplete}
            />
        )
    )
}

export default GamePage
