import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const calcGameRules = 'What is the result of the expression?';
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case 0:
      return num1 - num2;
    case 1:
      return num1 + num2;
    default:
      return num1 * num2;
  }
};

const calcGameRound = () => {
  const randomNumberOne = generateRandomNumber();
  const randomNumberTwo = generateRandomNumber();
  const operators = ['-', '+', '*'];
  const randomOperatorIndex = generateRandomNumber(0, operators.length - 1);
  const rightAnswer = calculate(randomNumberOne, randomNumberTwo, randomOperatorIndex);

  return [`${randomNumberOne} ${operators[randomOperatorIndex]} ${randomNumberTwo}`, `${rightAnswer}`];
};

export default () => runGame(calcGameRules, calcGameRound);
