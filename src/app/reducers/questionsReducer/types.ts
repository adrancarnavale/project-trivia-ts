export interface IQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
}

export interface IQuestionsReducerInitialState {
  index: number;
  questions: IQuestion[];
  score: number;
}

export interface IQuestionScoreInfo {
  difficulty: string;
  timer: number;
  tag: string;
}

export interface ICasesObjQuestionScoreInfo {
  easy: () => number;
  medium: () => number;
  hard: () => number;
}
