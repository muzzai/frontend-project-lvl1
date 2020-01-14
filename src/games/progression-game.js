import { getRandomInt, wellcome } from '../utils';
import engine from '..';

const gameDiscription = 'What number is missing in the progression?';

const game = () => {
  const progression = [];
  const step = getRandomInt(1, 100);
  const start = getRandomInt(0, 100);
  for (let i = 1; i <= 10; i += 1) {
    progression.push(start + step * i);
  }
  const randomPosition = getRandomInt(0, progression.length - 1);
  const answer = `${progression[randomPosition]}`;
  progression[randomPosition] = '..';
  const strProgression = progression.reduce((acc, num) => `${acc}${num} `, '');
  console.log(`Question: ${strProgression}`);
  return answer;
};

export default () => engine(wellcome(gameDiscription), game);
