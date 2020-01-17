import readlineSync from 'readline-sync';

const rounds = 3;

export default (gameDescription, game) => {
  console.log('\nWellcome to the Brain Games!');
  console.log(`${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name, please: ');
  console.log(`Well, hello, ${userName}\n`);
  for (let counter = 1; counter <= rounds; counter += 1) {
    const { answer, question } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again`);
      break;
    }
    console.log('Correct!');
    if (counter === rounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
