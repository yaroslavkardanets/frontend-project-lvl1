import runGame from '../index.js';
import generateRandomRange from '../generate-random-range.js';

const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num >= 0 && num <= 2) {
    return true;
  } if (num % 2 === 0) {
    return false;
  }
  const arr = [];
  for (let i = 3; i < num / 2; i += 2) {
    if (Number.isInteger(num / i)) {
      arr.push(i);
    }
  }
  if (arr.length > 0) {
    return false;
  }
  return true;
};

const primeGameRound = () => {
  const randomNumber = generateRandomRange();
  const prime = isPrime(randomNumber) ? 'yes' : 'no';

  return [`${randomNumber}`, prime];
};

export default () => runGame(primeGameRules, primeGameRound);
