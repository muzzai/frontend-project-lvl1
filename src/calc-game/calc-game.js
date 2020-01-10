import { getRandomInt } from '..';

const ops = {
  '*': (a, b) => a * b,
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
};

const randomCeiling = 30;
const firstNumber = getRandomInt(randomCeiling);
const secondNumber = getRandomInt(randomCeiling);
const randomForOper = getRandomInt(3);
const randomOperation = ['*', '-', '+'][randomForOper];
export const question = `${firstNumber} ${randomOperation} ${secondNumber}`;
export const solution = ops[randomOperation](firstNumber, secondNumber);
