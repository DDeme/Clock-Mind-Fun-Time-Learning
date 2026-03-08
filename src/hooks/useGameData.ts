import { useQuery } from '@tanstack/react-query'

import { fetchFromAPI } from '../utils/api'

import type { Question } from '../utils/gameGenerator/gameGenerator'

export interface GameDataResponse {
    id: string
    title: string
    description: string
    questions: Question[]
}

export const useGameData = (id: string) => {
    return useQuery<GameDataResponse>({
        queryFn: () => fetchFromAPI(`/api/game/${id}.json`),
        queryKey: ['gameData', id],
        staleTime: 1000 * 60 * 10,
    })
}
