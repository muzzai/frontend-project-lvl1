import getRandomInt from '../utils';
import playTheGame from '..';

const progressionLenght = 10;

const game = {
  gameDescription: 'What number is missing in the progression?',
  askUser: () => {
    const progression = [];
    const step = getRandomInt(1, 100);
    const start = getRandomInt(0, 100);
    for (let i = 1; i <= progressionLenght; i += 1) {
      progression.push(start + step * i);
    }
    const randomPosition = getRandomInt(0, progression.length - 1);
    const answer = String(progression[randomPosition]);
    progression[randomPosition] = '..';
    const strProgression = progression.reduce((acc, num) => `${acc}${num} `, '');
    console.log(`Question: ${strProgression}`);
    return answer;
  },
};

export default () => playTheGame(game);
