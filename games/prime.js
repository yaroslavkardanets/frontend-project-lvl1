import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomNumber from '../src/generate-random-number.js';

const gameRound = () => {
  const randomNumber = generateRandomNumber();
  const isPrime = () => {
    if (randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
      return true;
    }
    console.log(randomNumber);
    const arr = [];
    if (randomNumber % 2 !== 0) {
      for (let i = 3; i < randomNumber / 2; i += 2) {
        if (Number.isInteger(randomNumber / i)) {
          arr.push(i);
          console.log(arr);
        }
      }
    }
  };
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
