import React from 'react';
import { useAppSelector } from '../../hooks';

const ResultsScore = () => {
  const { score } = useAppSelector((state) => state.questions);

  return (
    <div>
      <h2>{score}</h2>
    </div>
  );
};

export default ResultsScore;
