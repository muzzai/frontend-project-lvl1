import { getRandomInt, getClosedQuestion } from '../utils';
import playTheGame from '..';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const getGameData = () => getClosedQuestion(getRandomInt(0, 100), isEven);

export default () => playTheGame(gameDescription, getGameData);
