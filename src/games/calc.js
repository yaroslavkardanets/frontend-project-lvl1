import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const calcGameRules = 'What is the result of the expression?';
const calculate = (num1, num2, operator) => {
  let rightAnswer;
  if (operator === 0) {
    rightAnswer = num1 - num2;
  } else if (operator === 1) {
    rightAnswer = num1 + num2;
  } else {
    rightAnswer = num1 * num2;
  }
  return rightAnswer;
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
