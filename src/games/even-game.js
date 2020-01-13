import { getRandomInt } from '..';

const randomRange = 100;

const isEven = (number) => number % 2 === 0;
export const question = () => getRandomInt(randomRange);
export const solution = (input) => {
  if (isEven(input)) {
    return 'yes';
  }
  return 'no';
};
