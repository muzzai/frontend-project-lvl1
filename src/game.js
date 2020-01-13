import readlineSync from 'readline-sync';


const game = (userName, puzzle, solution) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const question = puzzle();
    console.log(`Question: ${question}`);
    const queryUser = readlineSync.question('Your answer: ');
    const correctAnswer = solution(question);
    if (queryUser !== correctAnswer) {
      return console.log(`'${queryUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again`);
    }
    console.log('Correct!');
  }
  return console.log(`Congrtulations, ${userName}!`);
};

export default game;
