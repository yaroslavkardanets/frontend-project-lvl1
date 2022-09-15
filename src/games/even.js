import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const evenGameRound = () => {
  const questionCondition = [];
  const randomNumber = generateRandomRange();
  const question = `Question: ${randomNumber}`;
  questionCondition.push(question);
  const conditionOfUserAnswer = isEven(randomNumber) ? 'yes' : 'no';
  questionCondition.push(conditionOfUserAnswer);
  return questionCondition;
};

export default () => runGame(evenGameRules, evenGameRound);
