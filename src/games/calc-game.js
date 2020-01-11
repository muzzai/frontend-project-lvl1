import { getRandomInt } from '..';

const ops = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};

const randomCeiling = 30;
const number = () => getRandomInt(randomCeiling);
const randomOperation = () => ['*', '-', '+'][getRandomInt(3)];
export const question = () => `${number()} ${randomOperation()} ${number()}`;
export const solution = (string) => {
  const numbersAndOperation = string.split(' ');
  const firstNum = parseInt(numbersAndOperation[0], 10);
  const secondNum = parseInt(numbersAndOperation[2], 10);
  const operation = numbersAndOperation[1];
  return `${ops[operation](firstNum, secondNum)}`;
};
