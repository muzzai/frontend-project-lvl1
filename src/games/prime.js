import { getRandomInt, getClosedQuestion } from '../utils';
import playTheGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let counter = 2; counter <= Math.sqrt(number); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => getClosedQuestion(getRandomInt(0, 100), isPrime);

export default () => playTheGame(gameDescription, getGameData);
