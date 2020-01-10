import { getRandomInt } from '..';

const randomCeiling = 100;
const number = () => getRandomInt(randomCeiling) + 1;

export const question = () => `${number()} ${number()}`;
export const solution = (input) => {
  const numbers = input.split(' ');
  const firstNum = numbers[0];
  const secondNum = numbers[1];
  const findGCD = (a, b) => {
    if (!b) {
      return a;
    }
    return findGCD(b, a % b);
  };
  return `${findGCD(firstNum, secondNum)}`;
};
