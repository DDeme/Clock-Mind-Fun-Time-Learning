import { AnswerType } from './answerType'
import { QuestionType } from './questionType'

export type Question = {
    id: string
    answer: {
        options: string[]
        type: AnswerType
    }
    question: {
        questionType: QuestionType
        text: string
        value: string
    }
    scoreValue: {
        negativeScore: number
        positiveScore: number
    }
}
