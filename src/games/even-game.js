import { getRandomInt, wellcome } from '../utils';
import engine from '..';

const gameDiscription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;
const game = () => {
  const num = getRandomInt(0, 100);
  console.log(`Question: ${num}`);
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};

export default () => engine(wellcome(gameDiscription), game);
