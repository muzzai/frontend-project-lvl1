import { getRandomInt, getClosedQuestion } from '../utils';
import playTheGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const squareRootOfNumber = Math.sqrt(number);
  const iter = (div) => {
    if (div > squareRootOfNumber) return true;
    return number % div === 0 ? false : iter(div + 1);
  };
  return iter(2);
};

const getGameData = () => getClosedQuestion(getRandomInt(0, 100), isPrime);

export default () => playTheGame(gameDescription, getGameData);
