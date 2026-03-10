import { useLocation, useNavigate } from 'react-router'

import { GameResults } from '../components/containers/GameResults'

import type { GameResult } from '../components/containers/Game'

const GameResultsPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const gameResult = location.state?.gameResult as unknown as GameResult

    if (!gameResult) {
        navigate('/lesson')
        return null
    }
    // const totalTime =
    //     new Date(gameResult.finished).getTime() -
    //     new Date(gameResult.started).getTime()
    return <GameResults {...gameResult} />
}

export default GameResultsPage
