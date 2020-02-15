import { getRandomInt } from '../utils';
import playTheGame from '..';

const progressionLength = 10;
const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const step = getRandomInt(1, 100);
  const start = getRandomInt(0, 100);
  const makeProgression = (prog, iterStep) => {
    if (prog.length === progressionLength) return prog;
    const nextMember = prog[prog.length - 1] + iterStep;
    return makeProgression([...prog, nextMember], iterStep);
  };
  const progression = makeProgression([start], step);
  const hiddenMemberIndex = getRandomInt(0, progression.length - 1);
  const hiddenMember = String(progression[hiddenMemberIndex]);
  progression[hiddenMemberIndex] = '..';
  return {
    question: progression.join(' '),
    answer: hiddenMember,
  };
};

export default () => playTheGame(gameDescription, getGameData);
