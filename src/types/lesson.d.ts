export interface Lesson {
    id: string
    title: string
    status: 'completed' | 'active' | 'locked'
    position: 'left' | 'right'
    progress?: number
    games: string[]
}
