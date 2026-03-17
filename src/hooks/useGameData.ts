import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

import { fetchFromAPI } from '../utils/api'

import type { Question } from '../utils/gameGenerator/gameGenerator'

export interface GameDataResponse {
    id: string
    title: string
    description: string
    questions: Question[]
}

export const useGameData = (id: string) => {
    const { i18n } = useTranslation()
    return useQuery<GameDataResponse>({
        queryFn: () => fetchFromAPI(`/api/game/${i18n.language}/${id}.json`),
        queryKey: ['gameData', id, i18n.language],
        staleTime: 1000 * 60 * 10,
    })
}
