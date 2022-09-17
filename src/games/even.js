import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const evenGameRound = () => {
  const randomNumber = generateRandomRange();
  // const question = `Question: ${randomNumber}`;
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [`${randomNumber}`, conditionOfUserAnswer];
};

export default () => runGame(evenGameRules, evenGameRound);
