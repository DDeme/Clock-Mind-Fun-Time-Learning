/**
 * Represents the progress and performance of a user across various activities in the application.
 */

/**
 * Detailed information about a single question attempted by the user.
 */
export interface QuestionProgress {
    questionId: string
    isCorrect: boolean
    scoreDiff: number
    timeSpentMs: number
    timestamp: string // ISO 8601 string
}

/**
 * Progress and high scores for a specific game.
 */
export interface GameProgress {
    gameId: string
    bestScore: number
    totalStarsEarned: number
    completionCount: number
    lastPlayed: string // ISO 8601 string
    averageTimeMs: number
    questionsHistory: QuestionProgress[]
}

/**
 * Completion status and progress for a lesson.
 */
export interface LessonProgress {
    lessonId: number
    status: 'locked' | 'active' | 'completed'
    completedGameIds: string[]
    lastAccessed: string // ISO 8601 string
}

/**
 * Mastery and unlock status for a learning topic.
 */
export interface TopicProgress {
    topicId: string
    isUnlocked: boolean
    masteryLevel: number // Percentage 0-100
    completedLessonIds: number[]
}

/**
 * The root interface for all user progress data.
 */
export interface UserProgress {
    userId: string
    userName: string

    // Global Stats
    totalStars: number
    totalScore: number
    streakCount: number
    maxStreakCount: number
    lastActiveDate: string // ISO 8601 string

    // Activity Breakdown
    games: Record<string, GameProgress>
    lessons: Record<number, LessonProgress>
    topics: Record<string, TopicProgress>

    // History
    recentActivity: {
        type: 'game' | 'lesson'
        id: string | number
        timestamp: string // ISO 8601 string
        result?: number // score or stars
    }[]
}
