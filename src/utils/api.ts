import type { Question } from './gameGenerator/gameGenerator'

export interface GameDataResponse {
    id: string
    questions: Question[]
}

export const fetchGameData = async (
    id: string = 'id',
): Promise<GameDataResponse> => {
    try {
        const response = await fetch(`/api/game/${id}.json`)

        if (!response.ok) {
            throw new Error(
                `Failed to fetch game data: ${response.status} ${response.statusText}`,
            )
        }

        const data = await response.json()

        // Validate the response structure
        if (!data || !Array.isArray(data.questions)) {
            throw new Error(
                'Invalid game data format: questions array is required',
            )
        }

        return data
    } catch (error) {
        console.error('Error fetching game data:', error)
        throw error
    }
}
