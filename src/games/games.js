import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name, please: ');
export const wellcome = () => {
  console.log('\nWellcome to the Brain Games!');
  const user = getUserName();
  console.log(`Well, hello, ${user}\n`);
  return user;
};

export default () => wellcome('');
