import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomNumber from '../src/generate-random-number.js';
import generateRandomRange from '../src/generate-random-range.js';

const gameRound = () => {
  const result = [];
  const rangeStart = generateRandomRange(0, 50);
  const rangeSteps = generateRandomRange(5, 10);
  const missingNumber = generateRandomRange(0, 10);
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
