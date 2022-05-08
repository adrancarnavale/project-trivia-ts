import React from 'react';
import { useAppSelector } from '../../hooks';

const GameQuestionInformations = () => {
  const { questions, index } = useAppSelector((state) => state.questions);
  return (
    <div>
      <h2>{questions[index]?.category}</h2>
      <h2>{questions[index]?.difficulty}</h2>
    </div>
  );
};

export default GameQuestionInformations;
