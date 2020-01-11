import { getRandomInt } from '..';

export const question = () => {
  const result = [];
  const step = getRandomInt(100) + 1;
  const start = getRandomInt(100);
  for (let i = 1; i <= 10; i += 1) {
    result.push(start + step * i);
  }
  result[getRandomInt(result.length)] = '..';
  const strResult = result.reduce((acc, num) => `${acc}${num} `, '');
  return strResult.slice(0, strResult.length - 1);
};

export const solution = (input) => {
  const numbersFromString = input.split(' ');
  const dotsIndex = numbersFromString.indexOf('..');
  const lastIndex = numbersFromString.length - 1;
  if (dotsIndex === 0 || dotsIndex === lastIndex) {
    return `${numbersFromString[2] - numbersFromString[1]}`;
  }
  const lastNumber = numbersFromString[lastIndex];
  const firstNumber = numbersFromString[0];
  return `${(lastNumber - firstNumber) / lastIndex}`;
};
