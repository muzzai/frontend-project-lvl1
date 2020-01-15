import readlineSync from 'readline-sync';

export default (gameDiscription, game) => {
  console.log('\nWellcome to the Brain Games!');
  console.log(`${gameDiscription}\n`);
  const userName = readlineSync.question('May I have your name, please: ');
  console.log(`Well, hello, ${userName}\n`);
  for (let counter = 0; counter < 3; counter += 1) {
    const correctAnswer = game();
    const queryUser = readlineSync.question('Your answer: ');
    if (queryUser !== correctAnswer) {
      return console.log(`'${queryUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again`);
    }
    console.log('Correct!');
  }
  return console.log(`Congrtulations, ${userName}!`);
};
