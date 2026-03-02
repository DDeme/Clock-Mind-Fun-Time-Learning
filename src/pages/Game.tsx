import { useNavigate } from 'react-router'

import { Game } from '../components/Game'
import { questionsGenerator } from '../utils/gameGenerator/gameGenerator'

const g = questionsGenerator(5)

export const GamePage = () => {
    const navigate = useNavigate()
    return (
        <Game
            id="game"
            questions={g}
            onComplete={() => {
                navigate('/results')
            }}
        />
    )
}
