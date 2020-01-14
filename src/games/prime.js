import { getRandomInt, wellcome } from '../utils';
import engine from '..';

const gameDiscription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let counter = 2; counter <= Math.sqrt(number); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const num1 = getRandomInt(0, 100);
  console.log(`Question: ${num1}`);
  if (num1 < 3 || isPrime(num1)) {
    return 'yes';
  }
  return 'no';
};

export default () => engine(wellcome(gameDiscription), game);
