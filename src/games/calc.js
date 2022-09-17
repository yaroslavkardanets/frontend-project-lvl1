import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const calcGameRules = 'What is the result of the expression?';
const calculate = (num1, num2, operator) => {
  // console.log(`*** randomOperator = ${randomOperator}`);
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
  const randomNumberOne = generateRandomRange();
  const randomNumberTwo = generateRandomRange();
  const operator = ['-', '+', '*'];
  const randomOperator = generateRandomRange(0, operator.length - 1);
  const rightAnswer = calculate(randomNumberOne, randomNumberTwo, randomOperator);

  const question = `Question: ${randomNumberOne} ${operator[randomOperator]} ${randomNumberTwo}`;

  return [question, `${rightAnswer}`];
};

export default () => runGame(calcGameRules, calcGameRound);
