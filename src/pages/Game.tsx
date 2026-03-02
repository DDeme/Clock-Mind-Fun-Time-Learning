import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router'

import { Game } from '../components/Game'
import { questionsGenerator } from '../utils/gameGenerator/gameGenerator'

const GamePage = () => {
    const navigate = useNavigate()

    const questions = useMemo(() => questionsGenerator(5), [])

    const handleComplete = useCallback(
        (score: number) => {
            navigate('/results', { state: { score } })
        },
        [navigate],
    )

    return (
        <Game
            id="game"
            questions={questions}
            onComplete={handleComplete}
        />
    )
}

export default GamePage
