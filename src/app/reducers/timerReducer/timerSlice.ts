import { createSlice } from '@reduxjs/toolkit';
import { getNodeMajorVersion } from 'typescript';
import { THIRTY_SECONDS } from './constants';

const initialState = {
  currentTime: THIRTY_SECONDS,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    decreaseTimeByOne: (state) => {
      state.currentTime -= 1;
    },
    resetTimer: (state) => {
      state.currentTime = THIRTY_SECONDS;
    },
  },
});

export const { decreaseTimeByOne, resetTimer } = timerSlice.actions;
export default timerSlice.reducer;
