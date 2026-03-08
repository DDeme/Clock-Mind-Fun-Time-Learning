import { useCallback } from 'react'
import { useNavigate, useParams } from 'react-router'

import { Game } from '../components/Game'
import { GameSkeleton } from '../components/Game/Game.skeleton'
import { useGameData } from '../hooks/useGameData'

import type { GameResult } from '../components/Game'

const GamePage = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const { data, isLoading, isSuccess } = useGameData(id || '1')

    const handleComplete = useCallback(
        (gameResult: GameResult) => {
            navigate('/results', { state: { gameResult } })
        },
        [navigate],
    )
    return (
        <>
            {isLoading && <GameSkeleton />}
            {isSuccess && (
                <Game
                    {...data}
                    onComplete={handleComplete}
                />
            )}
        </>
    )
}

export default GamePage
