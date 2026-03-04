import { useLocation, useNavigate } from 'react-router'

import { GameResults } from '../components/GameResults'

import type { GameResult } from '../components/Game'

const GameResultsPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const gameResult = location.state?.gameResult as unknown as GameResult

    const totalTime = gameResult.started - gameResult.ended

    console.log(totalTime)
    if (!gameResult) {
        navigate('/timeline')
        return null
    }
    return <GameResults {...gameResult} />
}

export default GameResultsPage
