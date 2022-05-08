import React from 'react';
import { useAppSelector } from '../../hooks';

const GameQuestionsScore = () => {
  const { score } = useAppSelector((state) => state.questions);

  return (
    <div>
      <h2>
        Score:
        {score}
      </h2>
    </div>
  );
};

export default GameQuestionsScore;
