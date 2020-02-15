import { getRandomInt } from '../utils';
import playTheGame from '..';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const step = getRandomInt(1, 100);
  const start = getRandomInt(0, 100);
  const makeProgression = (prog, iterStep, len) => {
    if (len === progressionLength) return prog;
    const nextMember = prog[prog.length - 1] + iterStep;
    return makeProgression([...prog, nextMember], iterStep, prog.length);
  };
  const progression = makeProgression([start], step);
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
