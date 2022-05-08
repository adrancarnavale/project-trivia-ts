import React from 'react';
import {
  GameHeader,
  GameQuestion,
  GameQuestionInformations,
  GameQuestionOptions,
  GameQuestionTimer,
  QuestionsScore,
} from '../../components';

function Game() {
  return (
    <div>
      <GameHeader />
      <QuestionsScore />
      <GameQuestionInformations />
      <GameQuestionTimer />
      <GameQuestion />
      <GameQuestionOptions />
    </div>
  );
}

export default Game;
