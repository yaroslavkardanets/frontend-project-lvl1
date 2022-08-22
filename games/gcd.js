import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomNumber from '../src/generate-random-number.js';

const randomNumbers = () => {
  const randomNumber1 = generateRandomNumber();
  console.log(`число 1 = ${randomNumber1}`);
  const randomNumber2 = generateRandomNumber();
  console.log(`число 2 = ${randomNumber2}`);
  const result = [randomNumber1, randomNumber2];
  return result;
};
console.log(`randomNumbers = ${randomNumbers()}`);

const greatestDivisor = () => {
  console.log(randomNumbers([0]));
  const biggestNumber = Math.max(randomNumbers([0]), randomNumbers([1]));
  const smallestNumber = Math.min(randomNumbers([0]), randomNumbers([1]));
  console.log(`--- biggestNumber = ${biggestNumber}`);
  console.log(`--- smallestNumber = ${smallestNumber}`);
  if (smallestNumber === 0 || smallestNumber === 1) {
    return smallestNumber;
  }

  for (let i = smallestNumber; i >= 0; i -= 1) {
    if (smallestNumber % i === 0 && Number.isInteger(biggestNumber / i)) {
      // if (Number.isInteger(biggestNumber / i)) {
      // console.log('i = ', i);
      return i;
      // }
    }
  }
};

const gameRound = () => {
  console.log(`Question: ${randomNumbers[0]} ${randomNumbers[1]}`);
  console.log(`--- greatestDivisor = ${greatestDivisor()}`);
  const userAnswer = readlineSync.question('Your answer: ');
  console.log(`--- userAnswer = ${userAnswer}`);

  if (`${greatestDivisor()}` === `${userAnswer}`) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${greatestDivisor()}'.`);
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
