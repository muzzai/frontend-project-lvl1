import getRandomInt from '../utils';
import playTheGame from '..';

const ops = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};

const game = {
  gameDescription: 'What is the result of the expression?',
  askUser: () => {
    const num1 = getRandomInt(0, 100);
    const num2 = getRandomInt(0, 100);
    const randomOperation = ['*', '-', '+'][getRandomInt(0, 2)];
    console.log(`Question: ${num1} ${randomOperation} ${num2}`);
    return `${ops[randomOperation](num1, num2)}`;
  },
};

export default () => playTheGame(game);
