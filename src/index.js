import readlineSync from 'readline-sync';

const rounds = 3;

export default (game) => {
  const { askUser, gameDescription } = game;
  console.log('\nWellcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name, please: ');
  console.log(`Well, hello, ${userName}\n`);
  for (let counter = 1; counter <= rounds; counter += 1) {
    const correctAnswer = askUser();
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again`);
      break;
    }
    console.log('Correct!');
    if (counter === rounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
