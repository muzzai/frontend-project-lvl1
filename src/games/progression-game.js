import { getRandomInt } from '..';

const randomRange = 100;


export const question = () => {
  const result = [];
  const step = getRandomInt(randomRange) + 1;
  const start = getRandomInt(randomRange);
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
  const findStep = () => {
    if (dotsIndex === 0 || dotsIndex === lastIndex) {
      return numbersFromString[2] - numbersFromString[1];
    }
    const lastNumber = numbersFromString[lastIndex];
    const firstNumber = numbersFromString[0];
    return (lastNumber - firstNumber) / lastIndex;
  };
  const previous = numbersFromString[dotsIndex - 1];
  const next = numbersFromString[dotsIndex + 1];
  return previous ? `${parseInt(previous, 10) + findStep()}` : `${parseInt(next, 10) - findStep()}`;
};
