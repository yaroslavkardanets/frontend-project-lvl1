import readlineSync from 'readline-sync';

import { userName } from '../src/index.js';
import generateRandomNumber from '../src/generate-random-number.js';

const gameRound = () => {
  const randomNumber1 = generateRandomNumber();
  const randomNumber2 = generateRandomNumber();

  const greatestDivisor = () => {
    const biggestNumber = Math.max(randomNumber1, randomNumber2);
    const smallestNumber = Math.min(randomNumber1, randomNumber2);

    if (smallestNumber === 0 || smallestNumber === 1) {
      return smallestNumber;
    }

    for (let i = smallestNumber; i >= 0; i -= 1) {
      if (smallestNumber % i === 0 && Number.isInteger(biggestNumber / i)) {
        return i;
      }
    }
  };

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  console.log(`--- greatestDivisor = ${greatestDivisor()}`);
  const userAnswer = readlineSync.question('Your answer: ');
  // console.log(`--- userAnswer = ${userAnswer}`);

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
