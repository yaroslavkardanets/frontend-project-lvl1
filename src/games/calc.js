import runGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

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
  const randomNumberOne = generateRandomNumber();
  const randomNumberTwo = generateRandomNumber();
  const operator = ['-', '+', '*'];
  const randomOperator = generateRandomNumber(0, operator.length - 1);
  const rightAnswer = calculate(randomNumberOne, randomNumberTwo, randomOperator);

  // const question = `Question: ${randomNumberOne} ${operator[randomOperator]} ${randomNumberTwo}`;

  return [`${randomNumberOne} ${operator[randomOperator]} ${randomNumberTwo}`, `${rightAnswer}`];
};

export default () => runGame(calcGameRules, calcGameRound);
