import { memoize } from 'lodash'

export const parseTime = memoize((time: string) => {
    const [hours, minutes] = time.split(':').map(Number)
    return { hours, minutes }
})
