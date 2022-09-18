import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gcdGameRules = 'Find the greatest common divisor of given numbers.';

const greatestDivisor = (num1, num2) => {
  if (num2) {
    return greatestDivisor(num2, num1 % num2);
  }
  return num1;
};

const gcdGameRound = () => {
  const randomNumberOne = generateRandomNumber();
  const randomNumberTwo = generateRandomNumber();

  return [`${randomNumberOne} ${randomNumberTwo}`, `${greatestDivisor(randomNumberOne, randomNumberTwo)}`];
};

export default () => runGame(gcdGameRules, gcdGameRound);
