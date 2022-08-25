import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomRange from '../src/generate-random-range.js';

const gameRound = () => {
  const range = [];
  const rangeStart = generateRandomRange(0, 50);
  console.log(`rangeStart = ${rangeStart}`);
  const rangeSteps = generateRandomRange(5, 10);
  console.log(`rangeSteps = ${rangeSteps}`);
  const rangeStep = generateRandomRange(1, 10);
  console.log(`rangeStep = ${rangeStep}`);
  const rangeStop = rangeStart + (rangeStep * rangeSteps);
  const missingNumber = generateRandomRange(0, rangeSteps);

  for (let i = rangeStart; i < rangeStop; i += rangeStep) {
    // console.log('i =', i);
    range.push(i);
  }
  console.log(`range = ${range}`);
  const getMissingNumber = range[missingNumber];
  console.log(`getMissingNumber = ${getMissingNumber}`);
  range[missingNumber] = '...';
  console.log(`rangeMissing = ${range}`);
  // return range;
  console.log(`Question: ${range}`);
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
