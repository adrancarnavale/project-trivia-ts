import React, { useEffect, useState } from 'react';
import { decreaseTimeByOne } from '../../app/reducers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ONE_SECOND } from './constants';
import { increaseQuestionIndex, resetTimer } from '../../app/reducers';

const GameQuestionTimer = () => {
  const dispatch = useAppDispatch();

  const [timerId, setTimerId] = useState<number>();

  const {
    timer: { currentTime },
    questions: { index, questions },
  } = useAppSelector((state) => state);

  const startTimer = () => {
    const id = window.setInterval(() => {
      dispatch(decreaseTimeByOne());
    }, ONE_SECOND);

    setTimerId(id);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerId);
      dispatch(increaseQuestionIndex());
      dispatch(resetTimer());
      startTimer();
    }
  }, [currentTime]);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default GameQuestionTimer;
