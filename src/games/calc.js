// import readlineSync from 'readline-sync';

// import { userName } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';
import generateRandomRange from '../generate-random-range.js';

// const generateRandomOperation = (min, max) => Math.round(Math.random() * (max - min) + min);

const calcGameRound = () => {
  const questionCondition = [];
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const randomOperator = generateRandomRange(0, 2);
  const operator = ['-', '+', '*'];
  // console.log(`*** randomOperator = ${randomOperator}`);
  let result;
  if (randomOperator === 0) {
    result = randomNumber1 - randomNumber2;
  } else if (randomOperator === 1) {
    result = randomNumber1 + randomNumber2;
  } else {
    result = randomNumber1 * randomNumber2;
  }
  // console.log('*** result:', result);
  const resultToString = `${result}`;
  // console.log('*** resultToString:', resultToString);
  const question = `Question: ${randomNumber1} ${operator[randomOperator]} ${randomNumber2}`;
  // console.log('*** question:', question);
  questionCondition.push(question, resultToString);
  // console.log('*** questionCondition: ', questionCondition);
  return questionCondition;
};

export default calcGameRound;
