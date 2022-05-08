import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../userReducer';
import { tokenSlice } from '../tokenReducer';
import { questionsReducer } from '../questionsReducer';
import { timerSlice } from '../timerReducer';

const rootReducer = combineReducers({
  user: userSlice,
  token: tokenSlice,
  questions: questionsReducer,
  timer: timerSlice,
});

export default rootReducer;
