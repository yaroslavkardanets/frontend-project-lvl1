import readlineSync from 'readline-sync';

import { userName } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';
import generateRandomRange from '../generate-random-range.js';

// const generateRandomOperation = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const randomOperator = generateRandomRange(0, 2);
  const operator = ['-', '+', '*'];
  // console.log(`randomOperator = ${randomOperator}`);
  let result;
  if (randomOperator === 0) {
    result = randomNumber1 - randomNumber2;
  } else if (randomOperator === 1) {
    result = randomNumber1 + randomNumber2;
  } else {
    result = randomNumber1 * randomNumber2;
  }

  console.log(`Question: ${randomNumber1} ${operator[randomOperator]} ${randomNumber2}`);
  // console.log(result);
  const userAnswer = readlineSync.question('Your answer: ');

  if (`${result}` === `${userAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

// Надо подумать, как этот модуль будет работать с разными играми
const fullGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const game = gameRound();
    if (!game) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default fullGame;
