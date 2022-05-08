import {
  IQuestion,
  IQuestionScoreInfo,
  ICasesObjQuestionScoreInfo,
} from './types';

export const mountArrayWithAllQuestions = (questionsList: IQuestion[]) => {
  const mountedQuestions = questionsList.map((question: IQuestion) => {
    question.answers = [question.correct_answer, ...question.incorrect_answers];
    return question;
  });

  return mountedQuestions;
};

export const getScore = ({ difficulty, timer, tag }: IQuestionScoreInfo) => {
  const casesObj: ICasesObjQuestionScoreInfo = {
    easy: () => 10 + timer,
    medium: () => 10 + 2 * timer,
    hard: () => 10 + 3 * timer,
  };

  if (tag === '0')
    return casesObj[difficulty as keyof ICasesObjQuestionScoreInfo]();

  return 0;
};
