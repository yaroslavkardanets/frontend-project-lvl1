import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const primeGameRound = () => {
  const randomNumber = generateRandomRange();
  // const question = `Question: ${randomNumber}`;

  return [`${randomNumber}`, isPrime(randomNumber)];
};

export default () => runGame(primeGameRules, primeGameRound);
