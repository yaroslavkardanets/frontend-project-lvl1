import generateRandomNumber from '../generate-random-number.js';

// import { /* userName, greeting, */ randomNumber } from '../index.js';
// import generateRandomNumber from '../generate-random-number.js';

export const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (randomNum) => randomNum % 2 === 0;

export const gameRound = () => {
  const questionAnswer = [];

  const randomNumber = generateRandomNumber();
  const question = `Question: ${randomNumber}`;
  questionAnswer.push(question);
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';
  questionAnswer.push(conditionOfUserAnswer);
  return questionAnswer;
};
/*
const gameRound = () => {
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
  return false;
};
*/

// Надо подумать, как этот модуль будет работать с разными играми

// export default fullGame;
