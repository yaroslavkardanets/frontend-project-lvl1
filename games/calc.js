import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomNumber from '../src/generate-random-number.js';
import generateRandomRange from '../src/generate-random-range.js';

// const generateRandomOperation = (min, max) => Math.round(Math.random() * (max - min) + min);

const gameRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();
  const random = generateRandomRange(1, 3);
  let operation;
  let result;
  if (random === 1) {
    (operation = `${randomNumber1} - ${randomNumber2}`) && (result = randomNumber1 - randomNumber2);
  } else if (random === 2) {
    (operation = `${randomNumber1} + ${randomNumber2}`) && (result = randomNumber1 + randomNumber2);
  } else {
    (operation = `${randomNumber1} * ${randomNumber2}`) && (result = randomNumber1 * randomNumber2);
  }

  console.log(`What is the result of the expression?: ${operation}`);
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
