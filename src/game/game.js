import readlineSync from 'readline-sync';

const game = (userName, puzzle, solution) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const question = puzzle();
    console.log(`Question: ${question}`);
    const queryUser = readlineSync.question('Your answer: ');
    const correctAnswer = solution(question);
    if (queryUser !== correctAnswer) {
      console.log(`'${queryUser}' is wrong answer ;(. Correct answear was '${correctAnswer}'\nLet's try again`);
      return 'loser';
    }
    console.log('Correct!');
  }
  console.log(`Congrtulations, ${userName}!`);
  return 'winner';
};

export default game;
