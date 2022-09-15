import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const gcdGameRules = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  if (num2) {
    return greatestDivisor(num2, num1 % num2);
  }
  return num1;
};

const gcdGameRound = () => {
  const questionCondition = [];
  const randomNumber1 = generateRandomRange();
  const randomNumber2 = generateRandomRange();

  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  questionCondition.push(question, `${greatestDivisor(randomNumber1, randomNumber2)}`);
  return questionCondition;
};

export default () => runGame(gcdGameRules, gcdGameRound);
