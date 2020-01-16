import getRandomInt from '../utils';
import playTheGame from '..';

const isEven = (number) => number % 2 === 0;

const game = {
  gameDescription: 'Answer "yes" if the number is even, otherwise answer "no"',
  askUser: () => {
    const num = getRandomInt(0, 100);
    console.log(`Question: ${num}`);
    if (isEven(num)) {
      return 'yes';
    }
    return 'no';
  },
};

export default () => playTheGame(game);
