import getRandomInt from '../utils';
import playTheGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const num = getRandomInt(0, 100);
  return {
    question: String(num),
    answer: isEven(num) ? 'yes' : 'no',
  };
};

export default () => playTheGame(gameDescription, getGameData);
