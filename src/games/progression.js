import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomRange from '../src/generate-random-range.js';

const gameRound = () => {
  const range = [];
  const rangeStart = generateRandomRange(0, 50);
  const rangeSteps = generateRandomRange(5, 10);
  const rangeStep = generateRandomRange(1, 10);
  const rangeStop = rangeStart + (rangeStep * rangeSteps);
  const missingNumber = generateRandomRange(0, rangeSteps);

  for (let i = rangeStart; i < rangeStop; i += rangeStep) {
    range.push(i);
  }

  const getMissingNumber = range[missingNumber];

  range[missingNumber] = '..';
  console.log(`Question: ${range.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (`${getMissingNumber}` === `${userAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getMissingNumber}'.`);
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
