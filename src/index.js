import readlineSync from 'readline-sync';

export default (userName, game) => {
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
