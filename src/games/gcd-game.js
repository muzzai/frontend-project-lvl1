import getRandomInt from '../utils';
import playTheGame from '..';

const findGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return findGCD(b, a % b);
};

const game = {
  gameDescription: 'Find the greatest common divisor!',
  askUser: () => {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    console.log(`Question: ${num1} ${num2}`);
    return String(findGCD(num1, num2));
  },
};

export default () => playTheGame(game);
