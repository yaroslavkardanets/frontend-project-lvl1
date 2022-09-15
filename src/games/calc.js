import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const calcGameRules = 'What is the result of the expression?';

const calcGameRound = () => {
  const questionCondition = [];
  const randomNumber1 = generateRandomRange();
  const randomNumber2 = generateRandomRange();
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
  // console.log('*** resultToString:', resultToString);
  const question = `Question: ${randomNumber1} ${operator[randomOperator]} ${randomNumber2}`;
  // console.log('*** question:', question);
  questionCondition.push(question, `${result}`);
  // console.log('*** questionCondition: ', questionCondition);
  return questionCondition;
};

export default () => runGame(calcGameRules, calcGameRound);
