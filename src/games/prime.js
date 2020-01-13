import { getRandomInt } from '..';

const randomRange = 100;

const isPrime = (number) => {
  for (let counter = 2; counter <= Math.sqrt(number); counter += 1) {
    if (number % counter === 0) {
      return false;
    }
  }
  return true;
};
export const question = () => getRandomInt(randomRange);
export const solution = (input) => {
  if (input < 3 || isPrime(input)) {
    return 'yes';
  }
  return 'no';
};
