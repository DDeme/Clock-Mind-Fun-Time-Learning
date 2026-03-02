import { useQuery } from '@tanstack/react-query'

import { fetchGameData, type GameDataResponse } from '../utils/api'

export const useGameData = (id: string) => {
    return useQuery<GameDataResponse>({
        queryFn: () => fetchGameData(id),
        queryKey: ['gameData', id],
        // 10 minutes
        retry: 2,
        retryDelay: (attemptIndex: number) =>
            Math.min(1000 * 2 ** attemptIndex, 30000),
        staleTime: 1000 * 60 * 10,
    })
}
