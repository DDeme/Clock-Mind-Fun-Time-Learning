
export type QuestionType = 'input' | 'multiple-choice';

export interface GameState {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  level: 'Beginner' | 'Intermediate' | 'Expert';
  mode: QuestionType;
}

export interface ClockTime {
  hours: number;
  minutes: number;
}
