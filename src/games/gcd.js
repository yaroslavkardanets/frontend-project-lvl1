// import readlineSync from 'readline-sync';

// import { userName } from '../index.js';
import generateRandomRange from '../generate-random-range.js';

export const gcdGameRules = 'Find the greatest common divisor of given numbers.';
// export const gcdGameRules = () => {
//   console.log('Find the greatest common divisor of given numbers.');
// };
const greatestDivisor = (num1, num2) => {
  if (num2) {
    return greatestDivisor(num2, num1 % num2);
  }
  return num1;
};

export const gcdGameRound = () => {
  const questionCondition = [];
  const randomNumber1 = generateRandomRange();
  const randomNumber2 = generateRandomRange();

  // const greatestDivisor = () => {
  //   const biggestNumber = Math.max(randomNumber1, randomNumber2);
  //   const smallestNumber = Math.min(randomNumber1, randomNumber2);

  //   for (let i = smallestNumber; i >= 0; i -= 1) {
  //     if (smallestNumber === 0 || smallestNumber === 1) {
  //       return smallestNumber;
  //     } if (smallestNumber % i === 0 && Number.isInteger(biggestNumber / i)) {
  //       return i;
  //     }
  //   }

  // console.log('*** greatestDivisor: ', greatestDivisor());

  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  questionCondition.push(question, `${greatestDivisor(randomNumber1, randomNumber2)}`);
  return questionCondition;
  // console.log(`--- greatestDivisor = ${greatestDivisor()}`);
  // const userAnswer = readlineSync.question('Your answer: ');

  // if (`${greatestDivisor()}` === `${userAnswer}`) {
  //   console.log('Correct!');
  //   return true;
  // }
  // console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${greatestDivisor()}'.`);
  // return false;
};

// Надо подумать, как этот модуль будет работать с разными играми
// export const fullGame = () => {
//   for (let i = 0; i < 3; i += 1) {
//     const game = gameRound();
//     if (!game) {
//       console.log(`Let's try again, ${userName}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };
