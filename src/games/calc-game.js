import getRandomInt from '../utils';
import engine from '..';

const gameDiscription = 'What is the result of the expression?';

const ops = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};

const game = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const randomOperation = ['*', '-', '+'][getRandomInt(0, 2)];
  console.log(`Question: ${num1} ${randomOperation} ${num2}`);
  return `${ops[randomOperation](num1, num2)}`;
};

export default () => engine(gameDiscription, game);
