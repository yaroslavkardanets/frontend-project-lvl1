import generateRandomNumber from '../generate-random-number.js';

export const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

export const gameRound = () => {
  const questionAnswer = [];
  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;
  questionAnswer.push(question);
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';
  questionAnswer.push(conditionOfUserAnswer);
  return questionAnswer;
};
