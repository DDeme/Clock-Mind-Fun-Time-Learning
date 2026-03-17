import { Question } from './question'

export interface Game {
    id: string
    title: string
    description: string
    questions: Question[]
    autoSubmit?: boolean
}
