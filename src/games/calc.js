import getRandomInt from '../utils';
import playTheGame from '..';

const gameDescription = 'What is the result of the expression?';
const ops = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};
const opsArray = Object.keys(ops);

const game = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const randomOperation = opsArray[getRandomInt(0, opsArray.length - 1)];
  return {
    answer: `${ops[randomOperation](num1, num2)}`,
    question: `${num1} ${randomOperation} ${num2}`,
  };
};

export default () => playTheGame(gameDescription, game);
