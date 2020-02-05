export const getClosedQuestion = (num, predicat) => ({
  question: num,
  answer: predicat(num) ? 'yes' : 'no',
});

export const getRandomInt = (minimum, maximum) => minimum + Math
  .floor(Math.random() * (maximum - minimum + 1));
