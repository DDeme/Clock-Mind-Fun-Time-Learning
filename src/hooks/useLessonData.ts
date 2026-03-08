import { useQuery } from '@tanstack/react-query'

import { fetchFromAPI } from '../utils/api'

import type { Lesson } from '../components/TimelineProgress'

export const useLessonData = (id: string) => {
    return useQuery<Lesson[]>({
        queryFn: () => fetchFromAPI(`/api/lesson/${id}.json`),
        queryKey: ['lessonData', id],
        staleTime: 1000 * 60 * 10,
    })
}
