import readlineSync from 'readline-sync';

import { userName } from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const gameRound = () => {
  const randomNumber = generateRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;

  if ((isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log('Wrong answer!');
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
