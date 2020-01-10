import readlineSync from 'readline-sync';

const randomCeiling = 100;

const isEven = (number) => number % 2 === 0;
const getRandomInt = (number) => Math.floor(Math.random() * number);

const game = (userName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const number = getRandomInt(randomCeiling);
    console.log(`Question: ${number}`);
    const queryUser = readlineSync.question('Your answer: ');
    const correctAnswear = isEven(number) ? 'yes' : 'no';
    if (queryUser !== correctAnswear) {
      console.log(`'${queryUser}' is wrong answear ;(. Correct answear was '${correctAnswear}'\nLet's try again`);
      return 'loser';
    }
    console.log('Correct!');
  }
  console.log(`Congatulations, ${userName}!`);
  return 'winner';
};

export default game;
