import getRandomInt from '../utils';
import playTheGame from '..';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let counter = 2; counter <= Math.sqrt(number); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;
};

const game = {
  gameDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  askUser: () => {
    const num = getRandomInt(0, 100);
    console.log(`Question: ${num}`);
    return isPrime(num) ? 'yes' : 'no';
  },
};

export default () => playTheGame(game);
