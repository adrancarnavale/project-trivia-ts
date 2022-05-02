import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from '../userReducer';
import { tokenSlice } from '../tokenReducer';

const rootReducer = combineReducers({
  user: userSlice,
  token: tokenSlice,
});

export default rootReducer;
