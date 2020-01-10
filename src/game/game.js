import readlineSync from 'readline-sync';

const game = (userName, puzzle, solution) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const question = puzzle();
    console.log(`Question: ${question}`);
    const queryUser = readlineSync.question('Your answer: ');
    const correctAnswear = solution(question);
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
