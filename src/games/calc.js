import { getRandomInt } from '../utils';
import playTheGame from '..';

const gameDescription = 'What is the result of the expression?';
const opsAndFuncs = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};
const operators = Object.keys(opsAndFuncs);

const getGameData = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  return {
    answer: String(opsAndFuncs[operator](num1, num2)),
    question: `${num1} ${operator} ${num2}`,
  };
};

export default () => playTheGame(gameDescription, getGameData);
