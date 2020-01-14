import { getRandomInt, wellcome } from '../utils';
import engine from '..';

const gameDiscription = 'Find the greatest common divisor!';

const game = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  console.log(`Question: ${num1} ${num2}`);
  const findGCD = (a, b) => {
    if (!b) {
      return a;
    }
    return findGCD(b, a % b);
  };
  return `${findGCD(num1, num2)}`;
};

export default () => engine(wellcome(gameDiscription), game);
