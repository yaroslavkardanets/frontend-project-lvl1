import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const evenGameRound = () => {
  const randomNumber = generateRandomNumber();
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [`${randomNumber}`, conditionOfUserAnswer];
};

export default () => runGame(evenGameRules, evenGameRound);
