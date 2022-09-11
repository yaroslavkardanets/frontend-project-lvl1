import generateRandomNumber from '../generate-random-number.js';

export const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

export const evenGameRound = () => {
  const questionCondition = [];
  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;
  questionCondition.push(question);
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';
  questionCondition.push(conditionOfUserAnswer);
  return questionCondition;
};
