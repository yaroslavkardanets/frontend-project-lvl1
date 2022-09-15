// import readlineSync from 'readline-sync';

// import { userName } from '../index.js';
import generateRandomRange from '../generate-random-range.js';

export const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 0 || num === 1 || num === 2) {
    return 'yes';
  } if (num % 2 === 0) {
    return 'no';
  }
  const arr = [];
  for (let i = 3; i < num / 2; i += 2) {
    if (Number.isInteger(num / i)) {
      arr.push(i);
    }
  }
  if (arr.length > 0) {
    return 'no';
  }
  return 'yes';
};

export const primeGameRound = () => {
  const questionCondition = [];
  const randomNumber = generateRandomRange();

  // console.log('*** isPrime: ', isPrime(randomNumber));

  const question = `Question: ${randomNumber}`;
  questionCondition.push(question, isPrime(randomNumber));
  // console.log('*** questionCondition: ', questionCondition);
  return questionCondition;
  // const userAnswer = readlineSync.question('Your answer: ');
};
