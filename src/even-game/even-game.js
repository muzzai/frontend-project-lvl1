import { getRandomInt } from '..';

const randomCeiling = 100;

const isEven = (number) => number % 2 === 0;

export const question = getRandomInt(randomCeiling);
export const solution = (input) => {
  if (isEven(input)) {
    return 'yes';
  }
  return 'no';
};
