//reducer
import { rootReducer } from './rootReducer';

export { rootReducer };

//actions

import { savePlayerToken } from './tokenReducer';

export { savePlayerToken };

import {
  saveQuestions,
  increaseQuestionIndex,
  calculateScore,
} from './questionsReducer';

export { saveQuestions, increaseQuestionIndex, calculateScore };

import { decreaseTimeByOne, resetTimer } from './timerReducer';

export { decreaseTimeByOne, resetTimer };
