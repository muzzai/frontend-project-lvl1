import { getRandomInt } from '../utils';
import playTheGame from '..';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const progression = [];
  const step = getRandomInt(1, 100);
  const start = getRandomInt(0, 100);
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  const hiddenMemberIndex = getRandomInt(0, progression.length - 1);
  const hiddenMember = String(progression[hiddenMemberIndex]);
  progression[hiddenMemberIndex] = '..';
  const question = progression.join(' ');
  return {
    question,
    answer: hiddenMember,
  };
};

export default () => playTheGame(gameDescription, getGameData);
