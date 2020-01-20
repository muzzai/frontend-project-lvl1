import getRandomInt from '../utils';
import playTheGame from '..';

const gameDescription = 'Find the greatest common divisor!';
const findGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return findGCD(b, a % b);
};

const getGameData = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  return {
    question: `${num1} ${num2}`,
    answer: String(findGCD(num1, num2)),
  };
};

export default () => playTheGame(gameDescription, getGameData);
