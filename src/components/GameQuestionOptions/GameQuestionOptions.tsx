import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { randomizeAnswers } from './helperFunctions';
import { generateUniqueId } from '../../helpers';
import {
  OptionButtonCorrect,
  OptionButtonIncorrect,
} from './GameQuestionsOptions.styles';
import {
  increaseQuestionIndex,
  resetTimer,
  calculateScore,
} from '../../app/reducers';
import { useNavigate } from 'react-router-dom';

const GameQuestionOptions = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { questions, index } = useAppSelector((state) => state.questions);
  const { currentTime } = useAppSelector((state) => state.timer);

  const [answers, setAnswers] = useState<[string, string][]>([]);
  const [theme, setTheme] = useState(false);

  const checkAnswer = (tag: string) => {
    setTheme(true);

    const questionAnswerInfo = {
      difficulty: questions[index].difficulty,
      timer: currentTime,
      tag,
    };

    dispatch(calculateScore(questionAnswerInfo));

    setTimeout(() => {
      if (index === 4) navigate('/results');
      dispatch(resetTimer());
      setTheme(false);
      dispatch(increaseQuestionIndex());
    }, 500);
  };

  useEffect(() => {
    questions[index]?.answers?.length > 0 &&
      setAnswers(randomizeAnswers(questions[index]?.answers));
  }, [questions, questions[index]]);

  return (
    <div>
      {answers.map(([answerTag, answerText], i) => {
        const key = generateUniqueId();

        return answerTag === '0' ? (
          <div key={key}>
            <OptionButtonCorrect
              type="button"
              onClick={() => checkAnswer(answerTag)}
              theme={theme}
            >
              {answerText}
            </OptionButtonCorrect>
          </div>
        ) : (
          <div key={key}>
            <OptionButtonIncorrect
              type="button"
              onClick={() => checkAnswer(answerTag)}
              theme={theme}
            >
              {answerText}
            </OptionButtonIncorrect>
          </div>
        );
      })}
    </div>
  );
};

export default GameQuestionOptions;
