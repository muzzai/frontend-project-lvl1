import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name, please: ');
export const wellcome = (gameDiscription) => {
  console.log('\nWellcome to the Brain Games!');
  console.log(`${gameDiscription}\n`);
  const user = getUserName();
  console.log(`Well, hello, ${user}\n`);
  return user;
};
export const getRandomInt = (start, range) => start + Math.floor(Math.random() * range);
