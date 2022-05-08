import React, { useEffect, useState } from 'react';
import { fetchQuestions } from '../../services';
import { saveQuestions } from '../../app/reducers';
import { useAppDispatch, useAppSelector } from '../../hooks';

const GameQuestion = () => {
  const dispatch = useAppDispatch();

  const { index, questions } = useAppSelector((state) => state.questions);

  const getQuestions = async () => {
    const { results: questionsList } = await fetchQuestions();

    dispatch(saveQuestions(questionsList));
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div>
      <h2>{questions[index]?.question}</h2>
    </div>
  );
};

export default GameQuestion;
