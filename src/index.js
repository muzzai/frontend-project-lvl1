import readlineSync from 'readline-sync';

export const getUserName = () => readlineSync.question('May I have your name, please: ');
export const wellcome = () => console.log('Wellcome to the Brain Games!');
