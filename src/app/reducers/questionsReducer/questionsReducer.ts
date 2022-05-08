import { createSlice } from '@reduxjs/toolkit';
import { IQuestionsReducerInitialState } from './types';
import { mountArrayWithAllQuestions, getScore } from './helperFunctions';

const initialState: IQuestionsReducerInitialState = {
  index: 0,
  questions: [],
  score: 0,
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    saveQuestions: (state, { payload: questionsList }) => {
      const mountedQuestions = mountArrayWithAllQuestions(questionsList);
      state.questions = [...mountedQuestions];
    },
    increaseQuestionIndex: (state) => {
      state.index = state.index + 1;
    },
    calculateScore: (state, action) => {
      const newScore = getScore(action.payload);
      state.score = state.score + newScore;
    },
  },
});

export const { saveQuestions, increaseQuestionIndex, calculateScore } =
  questionsSlice.actions;
export default questionsSlice.reducer;
